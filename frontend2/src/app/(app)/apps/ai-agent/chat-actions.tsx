import { Copy, Folder, Info, Link as LinkIcon, PencilLine, Plus, Star, Trash2 } from "lucide-react";
import { createContext, use, useState, type ReactNode } from "react";
import { toast } from "sonner";

import { DialogFoot, DialogHead, DismissButton } from "@/components/common/dialog-parts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CHATS, PROJECTS, type Chat } from "@/data/ai-agent";
import { cn } from "@/lib/utils";

type DialogKind = "share" | "rename" | "project" | "delete";

type ChatActionsValue = {
	chats: Chat[];
	/** The chat open on the page, if any. Header actions act on it. */
	current: Chat | undefined;
	/** Opens a dialog for `chat`, or for the open chat when it is left out. */
	openDialog: (kind: DialogKind, chat?: Chat) => void;
	toggleStar: (chat: Chat) => void;
};

const ChatActionsContext = createContext<ChatActionsValue | null>(null);

export function useChatActions() {
	const context = use(ChatActionsContext);
	if (!context) throw new Error("useChatActions must be used inside ChatActionsProvider");
	return context;
}

const SHARE_LINK = "materia.app/share/7f2a9cQ3sL";

/** Lucide has no brand logos, so each network shows its initial on its brand colour. */
const SHARE_TARGETS = [
	{ label: "LinkedIn", initial: "in", color: "bg-[#0a66c2]", href: "https://www.linkedin.com/sharing/share-offsite/?url=" },
	{ label: "Facebook", initial: "f", color: "bg-[#1877f2]", href: "https://www.facebook.com/sharer/sharer.php?u=" },
	{ label: "X", initial: "X", color: "bg-black", href: "https://x.com/intent/post?url=" },
	{ label: "Reddit", initial: "r", color: "bg-[#ff4500]", href: "https://www.reddit.com/submit?url=" },
];

/**
 * Holds the chat list and the share, rename, project and delete dialogs, so a
 * sidebar item and the chat header open the same ones.
 */
export function ChatActionsProvider({ currentId, children }: { currentId?: number; children: ReactNode }) {
	const [chats, setChats] = useState(CHATS);
	const [dialog, setDialog] = useState<DialogKind | null>(null);
	const [target, setTarget] = useState<Chat | undefined>();
	const [title, setTitle] = useState("");
	const [project, setProject] = useState(PROJECTS[0].name);

	const current = chats.find((chat) => chat.id === currentId);

	const openDialog = (kind: DialogKind, chat = current) => {
		setTarget(chat);
		setTitle(chat?.title ?? "");
		setDialog(kind);
	};

	const close = () => setDialog(null);

	const toggleStar = (chat: Chat) => {
		setChats((list) => list.map((item) => (item.id === chat.id ? { ...item, starred: !item.starred } : item)));
		toast(chat.starred ? "Removed from starred" : "Added to starred", { icon: <Star /> });
	};

	const rename = () => {
		const value = title.trim();
		if (!value || !target) return;
		setChats((list) => list.map((item) => (item.id === target.id ? { ...item, title: value } : item)));
		close();
		toast("Chat renamed", { icon: <PencilLine /> });
	};

	const remove = () => {
		if (target) setChats((list) => list.filter((item) => item.id !== target.id));
		close();
		toast("Chat deleted", { icon: <Trash2 /> });
	};

	const name = <span className="text-emphasis-foreground">{target?.title}</span>;

	return (
		<ChatActionsContext value={{ chats, current, openDialog, toggleStar }}>
			{children}

			<Dialog open={dialog === "share"} onOpenChange={close}>
				<DialogContent showCloseButton={false} className="gap-0 p-0">
					<DialogHead>Shareable public link</DialogHead>
					<div className="px-6 pb-6">
						<div className="mb-5 flex items-center gap-3 rounded-full bg-muted p-1.5 pl-5">
							<input
								readOnly
								value={SHARE_LINK}
								aria-label="Public link"
								className="min-w-0 flex-1 truncate bg-transparent text-emphasis-foreground underline outline-none"
							/>
							<Button
								className="shrink-0 px-5"
								onClick={() => {
									navigator.clipboard?.writeText(SHARE_LINK).catch(() => {});
									toast("Link copied to clipboard", { icon: <LinkIcon /> });
								}}
							>
								<Copy />
								Copy link
							</Button>
						</div>
						<DialogDescription className="flex gap-2 text-sm text-muted-foreground">
							<Info className="size-5" />
							<span>Anyone with the link can view {name}. Public links can be reshared, so share responsibly. You can delete it anytime.</span>
						</DialogDescription>
					</div>
					<div className="flex justify-around border-t px-4 py-6">
						{SHARE_TARGETS.map((item) => (
							<a
								key={item.label}
								href={item.href + encodeURIComponent(`https://${SHARE_LINK}`)}
								target="_blank"
								rel="noopener"
								className="flex flex-col items-center gap-2 text-sm text-foreground"
							>
								<span className={cn("grid size-12 place-items-center rounded-full text-xl font-bold text-white", item.color)}>
									{item.initial}
								</span>
								{item.label}
							</a>
						))}
					</div>
				</DialogContent>
			</Dialog>

			<Dialog open={dialog === "rename"} onOpenChange={close}>
				<DialogContent showCloseButton={false} className="gap-0 p-0 sm:max-w-100">
					<DialogHead>Rename Chat</DialogHead>
					<DialogDescription className="sr-only">Give the chat a new title</DialogDescription>
					<form
						id="ai-rename-form"
						className="px-6"
						onSubmit={(event) => {
							event.preventDefault();
							rename();
						}}
					>
						<Input
							value={title}
							onChange={(event) => setTitle(event.target.value)}
							maxLength={80}
							required
							autoFocus
							onFocus={(event) => event.target.select()}
						/>
					</form>
					<DialogFoot>
						<DismissButton />
						<Button type="submit" form="ai-rename-form">
							Save
						</Button>
					</DialogFoot>
				</DialogContent>
			</Dialog>

			<Dialog open={dialog === "project"} onOpenChange={close}>
				<DialogContent showCloseButton={false} className="gap-0 p-0">
					<DialogHead>Add to Project</DialogHead>
					<form
						id="ai-project-form"
						className="px-6"
						onSubmit={(event) => {
							event.preventDefault();
							close();
							toast(`Added to ${project}`, { icon: <Folder /> });
						}}
					>
						<DialogDescription className="mb-5 text-sm text-muted-foreground">
							Move {name} into a project to keep its files and instructions together.
						</DialogDescription>
						<RadioGroup value={project} onValueChange={setProject} className="mb-4 gap-2">
							{PROJECTS.map((item) => (
								<label key={item.name} className="flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors hover:bg-accent">
									<Folder className={cn("size-4.5", item.color)} />
									<span className="flex-1">{item.name}</span>
									<RadioGroupItem value={item.name} />
								</label>
							))}
						</RadioGroup>
						<a href="#" className="inline-flex items-center gap-2 text-sm">
							<Plus className="size-4" />
							New project
						</a>
					</form>
					<DialogFoot>
						<DismissButton />
						<Button type="submit" form="ai-project-form">
							Add to project
						</Button>
					</DialogFoot>
				</DialogContent>
			</Dialog>

			<Dialog open={dialog === "delete"} onOpenChange={close}>
				<DialogContent showCloseButton={false} className="gap-0 p-0 sm:max-w-75">
					<div className="px-6 pt-8 text-center">
						<div className="mx-auto mb-5 grid avatar-mask size-10.5 place-items-center bg-red-400/15 text-red-400">
							<Trash2 className="size-6" />
						</div>
						<DialogTitle className="mb-2 text-base leading-tight font-medium text-emphasis-foreground">Delete chat?</DialogTitle>
						<DialogDescription className="text-sm text-muted-foreground">
							{name} and its files will be permanently deleted. This can't be undone.
						</DialogDescription>
					</div>
					<DialogFoot className="justify-center">
						<DismissButton />
						<Button variant="destructive" onClick={remove}>
							Delete
						</Button>
					</DialogFoot>
				</DialogContent>
			</Dialog>
		</ChatActionsContext>
	);
}
