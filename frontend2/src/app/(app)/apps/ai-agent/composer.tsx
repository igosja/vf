import {
	ArrowUp,
	Binoculars,
	Camera,
	Check,
	ChevronDown,
	Folder,
	Globe,
	HardDrive,
	Lightbulb,
	Mic,
	Plug,
	Plus,
	SlidersHorizontal,
	Square,
	Upload,
} from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const MODELS = [
	{ name: "Materia Pro", description: "Most capable for complex work" },
	{ name: "Materia", description: "Smart and efficient for everyday tasks" },
	{ name: "Materia Lite", description: "Fastest for quick answers" },
];

const TOOLS = [
	{ id: "search", label: "Web search", icon: Globe, on: true },
	{ id: "thinking", label: "Extended thinking", icon: Lightbulb, on: false },
	{ id: "research", label: "Deep research", icon: Binoculars, on: false },
];

/**
 * The message box. Enter sends and Shift+Enter starts a new line. While a
 * reply `streaming` in, the send button turns into stop.
 */
export function Composer({
	value,
	onChange,
	onSend,
	onStop,
	streaming = false,
	placeholder,
}: {
	value: string;
	onChange: (value: string) => void;
	onSend: (prompt: string) => void;
	onStop?: () => void;
	streaming?: boolean;
	placeholder: string;
}) {
	const [model, setModel] = useState(MODELS[0].name);
	const [tools, setTools] = useState(() => Object.fromEntries(TOOLS.map((tool) => [tool.id, tool.on])));

	const submit = () => {
		if (streaming) return onStop?.();
		const prompt = value.trim();
		if (prompt) onSend(prompt);
	};

	return (
		<form
			className="mx-auto w-full max-w-200 rounded-2xl border border-input/50 bg-popover p-3 pb-2.5 shadow-lg transition-colors duration-200 focus-within:border-input"
			onSubmit={(event) => {
				event.preventDefault();
				submit();
			}}
		>
			<textarea
				rows={1}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				onKeyDown={(event) => {
					if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
						event.preventDefault();
						submit();
					}
				}}
				placeholder={placeholder}
				aria-label="Message"
				className="block field-sizing-content max-h-60 min-h-12 w-full resize-none overflow-y-auto bg-transparent px-2 pt-1 pb-2 text-base text-emphasis-foreground outline-none placeholder:text-muted-foreground"
			/>

			<div className="flex items-center gap-1">
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<IconButton>
							<Plus />
							<span className="sr-only">Add content</span>
						</IconButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						<DropdownMenuItem>
							<Upload />
							Upload files
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Camera />
							Take a screenshot
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Folder />
							Add to project
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HardDrive />
							Add from Drive
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<IconButton>
							<SlidersHorizontal />
							<span className="sr-only">Tools</span>
						</IconButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" className="w-64">
						{TOOLS.map((tool) => (
							<DropdownMenuItem key={tool.id} onSelect={(event) => event.preventDefault()} asChild>
								<label>
									<tool.icon />
									<span className="flex-1">{tool.label}</span>
									<Switch checked={tools[tool.id]} onCheckedChange={(on) => setTools((current) => ({ ...current, [tool.id]: on }))} />
								</label>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Plug />
							Manage connectors
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu modal={false}>
					<DropdownMenuTrigger className="ml-auto flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm text-emphasis-foreground transition-colors duration-300 hover:bg-accent data-[state=open]:bg-accent">
						{model}
						<ChevronDown className="size-3.5" />
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-72">
						{MODELS.map((item) => (
							<DropdownMenuItem key={item.name} onSelect={() => setModel(item.name)}>
								<span className="flex-1">
									<span className="block text-emphasis-foreground">{item.name}</span>
									<span className="block text-xs text-muted-foreground">{item.description}</span>
								</span>
								<Check className={cn("ml-3 text-sky-500", item.name !== model && "opacity-0")} />
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<IconButton className="hidden sm:grid">
					<Mic />
					<span className="sr-only">Voice input</span>
				</IconButton>

				<button
					type="submit"
					disabled={!streaming && !value.trim()}
					className={cn(
						"ml-1 grid size-9 shrink-0 place-items-center rounded-xl transition duration-200 disabled:opacity-35",
						streaming ? "bg-emphasis-foreground text-background" : "bg-sky-500 text-white hover:enabled:brightness-105"
					)}
				>
					{streaming ? <Square className="size-4 fill-current" /> : <ArrowUp className="size-5" />}
					<span className="sr-only">{streaming ? "Stop" : "Send message"}</span>
				</button>
			</div>
		</form>
	);
}
