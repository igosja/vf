import { Check, ChevronRight, Copy, Lightbulb, PencilLine, RotateCw, ThumbsDown, ThumbsUp } from "lucide-react";
import { useRef, useState, type ComponentProps, type ReactNode } from "react";

import { IconButton } from "@/components/common/icon-button";
import { cn } from "@/lib/utils";

/** Copies `text` and shows a check for a moment. */
function CopyButton({ text }: { text: () => string }) {
	const [copied, setCopied] = useState(false);

	return (
		<IconButton
			className="opacity-50 hover:opacity-100"
			onClick={() => {
				navigator.clipboard?.writeText(text()).catch(() => {});
				setCopied(true);
				window.setTimeout(() => setCopied(false), 1500);
			}}
		>
			{copied ? <Check /> : <Copy />}
			<span className="sr-only">Copy</span>
		</IconButton>
	);
}

/** Hidden until the message is hovered or focused; the last message always shows them. */
const actions =
	"flex origin-left scale-80 opacity-0 transition-opacity duration-200 group-last/message:opacity-100 group-hover/message:opacity-100 group-has-focus-visible/message:opacity-100";

export function UserMessage({ attachment, children }: { attachment?: ReactNode; children: ReactNode }) {
	const content = useRef<HTMLDivElement>(null);

	return (
		<div className="group/message mb-8 flex flex-col items-end gap-2">
			{attachment}
			<div ref={content} className="max-w-150 rounded-2xl bg-muted px-4 py-3 break-words text-emphasis-foreground">
				{children}
			</div>
			<div className={cn(actions, "-mt-1 gap-0.5")}>
				<CopyButton text={() => content.current?.innerText.trim() ?? ""} />
				<IconButton className="opacity-50 hover:opacity-100">
					<PencilLine />
					<span className="sr-only">Edit</span>
				</IconButton>
			</div>
		</div>
	);
}

/** A reply. `thinking` adds the collapsed reasoning above it; `done` shows its actions once it has finished streaming. */
export function AssistantMessage({ thinking, done = true, children }: { thinking?: ReactNode; done?: boolean; children: ReactNode }) {
	const content = useRef<HTMLDivElement>(null);
	const [vote, setVote] = useState<"up" | "down" | null>(null);

	return (
		<div className="group/message mb-8">
			{thinking && (
				<details className="group/thinking mb-4">
					<summary className="-ml-2.5 inline-flex cursor-pointer list-none items-center gap-2 rounded-lg px-2.5 py-1 text-sm text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-emphasis-foreground [&::-webkit-details-marker]:hidden">
						<Lightbulb className="size-4.5" />
						Thought for 8 seconds
						<ChevronRight className="size-3 transition-transform duration-200 group-open/thinking:rotate-90" />
					</summary>
					<div className="mt-2 border-l-2 pl-4 text-sm text-muted-foreground">{thinking}</div>
				</details>
			)}

			<div ref={content} className="leading-relaxed wrap-anywhere text-emphasis-foreground">
				{children}
			</div>

			{done && (
				<div className={cn(actions, "mt-2 -ml-1.5 gap-0.5")}>
					<CopyButton text={() => content.current?.innerText.trim() ?? ""} />
					<IconButton
						className={cn("opacity-50 hover:opacity-100", vote === "up" && "opacity-100")}
						aria-pressed={vote === "up"}
						onClick={() => setVote(vote === "up" ? null : "up")}
					>
						<ThumbsUp />
						<span className="sr-only">Good response</span>
					</IconButton>
					<IconButton
						className={cn("opacity-50 hover:opacity-100", vote === "down" && "opacity-100")}
						aria-pressed={vote === "down"}
						onClick={() => setVote(vote === "down" ? null : "down")}
					>
						<ThumbsDown />
						<span className="sr-only">Bad response</span>
					</IconButton>
					<IconButton className="opacity-50 hover:opacity-100">
						<RotateCw />
						<span className="sr-only">Retry</span>
					</IconButton>
				</div>
			)}
		</div>
	);
}

/* The pieces a reply is written in. Replies are plain JSX, so each element carries its own spacing. */

export function Paragraph(props: ComponentProps<"p">) {
	return <p className="mb-4 last:mb-0" {...props} />;
}

export function Heading(props: ComponentProps<"h3">) {
	return <h3 className="mt-6 mb-3 text-base font-semibold" {...props} />;
}

export function OrderedList(props: ComponentProps<"ol">) {
	return <ol className="mb-4 list-decimal pl-8 *:mb-1.5 last:mb-0" {...props} />;
}

export function Strong(props: ComponentProps<"strong">) {
	return <strong className="font-semibold" {...props} />;
}

export function InlineCode(props: ComponentProps<"code">) {
	return <code className="rounded-sm bg-muted px-1.5 py-0.5 text-sm text-emphasis-foreground" {...props} />;
}

/** Three dots that bob while the reply is on its way. */
export function TypingIndicator() {
	return (
		<div className="inline-flex gap-1.5 py-2" aria-label="Typing">
			{[0, 0.15, 0.3].map((delay) => (
				<span key={delay} className="size-2 animate-typing rounded-full bg-muted-foreground" style={{ animationDelay: `${delay}s` }} />
			))}
		</div>
	);
}

/** Renders the demo reply text: numbered lines become a list and **text** turns bold. */
export function ReplyBody({ text }: { text: string }) {
	const blocks: ReactNode[] = [];
	let list: ReactNode[] = [];

	const bold = (line: string) => line.split(/\*\*(.+?)\*\*/g).map((part, index) => (index % 2 ? <Strong key={index}>{part}</Strong> : part));
	const flush = () => {
		if (list.length) blocks.push(<OrderedList key={blocks.length}>{list}</OrderedList>);
		list = [];
	};

	for (const line of text.split("\n")) {
		const item = line.match(/^\d+\.\s(.*)/);
		if (item) {
			list.push(<li key={list.length}>{bold(item[1])}</li>);
		} else {
			flush();
			blocks.push(<Paragraph key={blocks.length}>{bold(line)}</Paragraph>);
		}
	}
	flush();

	return blocks;
}
