"use client";

import {
	Archive,
	Check,
	ChevronDown,
	CircleEllipsis,
	Copy,
	FileCode,
	FileText,
	Folder,
	Link as LinkIcon,
	PencilLine,
	Pin,
	Share2,
	Star,
	Trash2,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { toast } from "sonner";

import { IconButton } from "@/components/common/icon-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DEMO_REPLY } from "@/data/ai-agent";
import { useLocation, useNavigate } from "@/lib/router";

import { useChatActions } from "../chat-actions";
import { Composer } from "../composer";
import { AiAgentLayout } from "../ai-agent-layout";
import { AssistantMessage, Heading, InlineCode, OrderedList, Paragraph, ReplyBody, Strong, TypingIndicator, UserMessage } from "./messages";

const REPLY = DEMO_REPLY.join("\n").split(" ");

const REGIONS = [
	{ region: "North America", q2: "$1.64M", q3: "$2.05M", change: "+25.0%" },
	{ region: "APAC", q2: "$0.88M", q3: "$1.12M", change: "+27.3%" },
	{ region: "EMEA", q2: "$1.18M", q3: "$1.21M", change: "+2.5%" },
	{ region: "LATAM", q2: "$0.37M", q3: "$0.44M", change: "+18.9%" },
];

/** A message sent on this page, and the reply streamed back word by word. */
type Turn = { prompt: string; words: number; done: boolean };

/** The chat title menu and the more menu at the right of the header. */
function ChatHeaderActions({ title }: { title: string }) {
	const { current, openDialog, toggleStar } = useChatActions();
	const say = (message: string, icon: ReactNode, undo = false) => toast(message, { icon, action: undo ? { label: "Undo", onClick: () => {} } : undefined });

	return (
		<>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger className="hidden h-8 max-w-75 items-center gap-1.5 rounded-lg px-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-accent data-[state=open]:bg-accent md:flex">
					<span className="truncate">{current?.title ?? title}</span>
					<ChevronDown className="size-3.5" />
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{current && (
						<DropdownMenuItem onSelect={() => toggleStar(current)}>
							<Star />
							{current.starred ? "Unstar" : "Star"}
						</DropdownMenuItem>
					)}
					<DropdownMenuItem onSelect={() => openDialog("rename")}>
						<PencilLine />
						Rename
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => openDialog("project")}>
						<Folder />
						Add to project
					</DropdownMenuItem>
					<DropdownMenuItem variant="destructive" onSelect={() => openDialog("delete")}>
						<Trash2 />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<IconButton>
						<CircleEllipsis />
						<span className="sr-only">More options</span>
					</IconButton>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onSelect={() => openDialog("share")}>
						<Share2 />
						Share conversation
					</DropdownMenuItem>
					<DropdownMenuItem
						onSelect={() => {
							navigator.clipboard?.writeText(window.location.href).catch(() => {});
							say("Link copied to clipboard", <LinkIcon />);
						}}
					>
						<LinkIcon />
						Copy link
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => say("Chat pinned to top", <Pin />)}>
						<Pin />
						Pin to top
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => openDialog("rename")}>
						<PencilLine />
						Rename
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onSelect={() => say("Downloading PDF...", <FileText />)}>
						<FileText />
						Download as PDF
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => say("Exported as Markdown", <FileCode />)}>
						<FileCode />
						Export as Markdown
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => say("Chat archived", <Archive />, true)}>
						<Archive />
						Archive
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive" onSelect={() => openDialog("delete")}>
						<Trash2 />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}

/** The opening conversation of the demo chat. */
function SampleThread() {
	const code = useRef<HTMLElement>(null);
	const [copied, setCopied] = useState(false);

	return (
		<>
			<UserMessage
				attachment={
					<div className="flex items-center gap-3 rounded-xl border py-2.5 pr-4 pl-3">
						<FileText className="size-8 text-red-400" />
						<div className="leading-tight">
							<div className="text-emphasis-foreground">q3-sales-report.pdf</div>
							<div className="text-xs text-muted-foreground">pdf · 2.4 mb</div>
						</div>
					</div>
				}
			>
				Summarize our Q3 sales performance from the attached report. Highlight the regions that grew the most and anything I should be worried about.
			</UserMessage>

			<AssistantMessage thinking="The report covers four regions across July to September. I should compare each region against Q2, call out the biggest movers, and flag the margin drop in EMEA since it runs against the revenue trend.">
				<Paragraph>
					Q3 was a strong quarter overall. Total revenue reached <Strong>$4.82M</Strong>, up <Strong>18.4%</Strong> from Q2, driven mainly by North
					America and APAC.
				</Paragraph>
				<Heading>Revenue by region</Heading>
				<Table className="mb-4 whitespace-nowrap">
					<TableHeader>
						<TableRow>
							<TableHead>Region</TableHead>
							<TableHead className="text-right">Q2</TableHead>
							<TableHead className="text-right">Q3</TableHead>
							<TableHead className="text-right">Change</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{REGIONS.map((row) => (
							<TableRow key={row.region}>
								<TableCell>{row.region}</TableCell>
								<TableCell className="text-right">{row.q2}</TableCell>
								<TableCell className="text-right">{row.q3}</TableCell>
								<TableCell className="text-right text-emerald-500">{row.change}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Heading>Things to watch</Heading>
				<OrderedList>
					<li>
						<Strong>EMEA margins fell 4 points</Strong> even though revenue was flat. Discounting on enterprise renewals looks like the cause.
					</li>
					<li>
						<Strong>Churn ticked up to 3.1%</Strong> in September, mostly from small accounts on monthly plans.
					</li>
					<li>
						<Strong>APAC pipeline is thin for Q4.</Strong> Most of the Q3 growth came from two large deals that won't repeat.
					</li>
				</OrderedList>
				<Paragraph>Want me to break down the EMEA discounting by account, or draft a short update for the leadership team?</Paragraph>
			</AssistantMessage>

			<UserMessage>Write a SQL query to get the top 5 products by revenue for this quarter.</UserMessage>

			<AssistantMessage>
				<Paragraph>Here's a query that joins orders with products and ranks them by revenue for the current quarter:</Paragraph>
				<div className="mb-4 overflow-hidden rounded-xl bg-muted">
					<div className="flex items-center justify-between border-b border-input/25 py-1.5 pr-2 pl-4 text-xs text-muted-foreground">
						<span>sql</span>
						<button
							type="button"
							onClick={() => {
								navigator.clipboard?.writeText(code.current?.innerText ?? "").catch(() => {});
								setCopied(true);
								window.setTimeout(() => setCopied(false), 1500);
							}}
							className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors hover:bg-secondary hover:text-foreground"
						>
							{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
							Copy
						</button>
					</div>
					<pre className="overflow-x-auto p-4 text-sm leading-normal text-emphasis-foreground">
						<code ref={code}>
							<span className="text-purple-400">SELECT</span>
							{"\n  p.name,\n  "}
							<span className="text-sky-500">SUM</span>
							{"(oi.quantity * oi.unit_price) "}
							<span className="text-purple-400">AS</span>
							{" revenue\n"}
							<span className="text-purple-400">FROM</span>
							{" order_items oi\n"}
							<span className="text-purple-400">JOIN</span>
							{" orders o   "}
							<span className="text-purple-400">ON</span>
							{" o.id = oi.order_id\n"}
							<span className="text-purple-400">JOIN</span>
							{" products p "}
							<span className="text-purple-400">ON</span>
							{" p.id = oi.product_id\n"}
							<span className="text-purple-400">WHERE</span>
							{" o.created_at >= "}
							<span className="text-sky-500">DATE_TRUNC</span>
							{"("}
							<span className="text-emerald-500">'quarter'</span>
							{", "}
							<span className="text-sky-500">CURRENT_DATE</span>
							{")\n  "}
							<span className="text-purple-400">AND</span>
							{" o.status = "}
							<span className="text-emerald-500">'completed'</span>
							{"\n"}
							<span className="text-purple-400">GROUP BY</span>
							{" p.name\n"}
							<span className="text-purple-400">ORDER BY</span>
							{" revenue "}
							<span className="text-purple-400">DESC</span>
							{"\n"}
							<span className="text-purple-400">LIMIT</span> <span className="text-amber-500">5</span>;
						</code>
					</pre>
				</div>
				<Paragraph>
					It only counts <InlineCode>completed</InlineCode> orders, so refunds and pending payments won't inflate the totals. If your database is
					MySQL, swap <InlineCode>DATE_TRUNC</InlineCode> for <InlineCode>MAKEDATE(YEAR(CURDATE()), 1)</InlineCode> plus a quarter offset.
				</Paragraph>
			</AssistantMessage>
		</>
	);
}

export default function AiAgentChat() {
	const location = useLocation();
	const navigate = useNavigate();
	// A prompt sent from the AI Agent home starts a fresh thread instead of the demo one.
	const [pending] = useState<string | undefined>(() => (location.state as { prompt?: string } | null)?.prompt);
	const [turns, setTurns] = useState<Turn[]>(() => (pending ? [{ prompt: pending, words: 0, done: false }] : []));
	const [streaming, setStreaming] = useState(Boolean(pending));
	const [draft, setDraft] = useState("");
	const thread = useRef<HTMLDivElement>(null);

	// While streaming, the last reply pauses on the typing dots, then grows two words at a time.
	useEffect(() => {
		if (!streaming) return;
		let words = 0;
		let interval = 0;
		const timeout = window.setTimeout(() => {
			interval = window.setInterval(() => {
				words += 2;
				const done = words >= REPLY.length;
				setTurns((list) => list.map((turn, index) => (index === list.length - 1 ? { ...turn, words, done } : turn)));
				if (done) setStreaming(false);
			}, 40);
		}, 800);
		return () => {
			window.clearTimeout(timeout);
			window.clearInterval(interval);
		};
	}, [streaming]);

	// Drop the prompt from history, so a reload shows the chat rather than sending it again.
	useEffect(() => {
		if (pending) navigate(".", { replace: true, state: null });
	}, [pending, navigate]);

	const send = (prompt: string) => {
		setDraft("");
		setTurns((list) => [...list, { prompt, words: 0, done: false }]);
		setStreaming(true);
	};

	const stop = () => {
		setStreaming(false);
		// A reply stopped before its first words is dropped; one stopped midway stays as it is.
		setTurns((list) => list.map((turn, index) => (index === list.length - 1 && turn.words === 0 ? { ...turn, words: -1 } : turn)));
	};

	useEffect(() => {
		if (turns.length) thread.current?.lastElementChild?.scrollIntoView({ block: "end", behavior: "smooth" });
	}, [turns]);

	const title = pending ? (pending.length > 40 ? `${pending.slice(0, 40)}...` : pending) : "";

	return (
		<AiAgentLayout chatId={pending ? undefined : 1} actions={<ChatHeaderActions title={title} />}>
			<div ref={thread} className="mx-auto w-full max-w-200 flex-1 px-4 pt-8 pb-4 sm:px-6">
				{!pending && <SampleThread />}

				{turns.map((turn, index) => (
					<Fragment key={index}>
						<UserMessage>{turn.prompt}</UserMessage>
						{turn.words >= 0 && (
							<AssistantMessage done={turn.done}>
								{turn.words === 0 ? <TypingIndicator /> : <ReplyBody text={REPLY.slice(0, turn.words).join(" ")} />}
							</AssistantMessage>
						)}
					</Fragment>
				))}
			</div>

			{/* The composer stays in view at the bottom of the window while the thread scrolls. */}
			<div className="sticky bottom-14 z-2 bg-background pb-4 sm:bottom-0">
				<div className="rounded-b-2xl bg-card px-4 pb-4">
					<Composer value={draft} onChange={setDraft} onSend={send} onStop={stop} streaming={streaming} placeholder="Reply to Materia..." />
				</div>
			</div>
		</AiAgentLayout>
	);
}
