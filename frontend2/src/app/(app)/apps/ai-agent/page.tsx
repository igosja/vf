"use client";

import { Sparkle, VenetianMask } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SUGGESTIONS } from "@/data/ai-agent";
import { useNavigate } from "@/lib/router";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/utils";

import { Composer } from "./composer";
import { AiAgentLayout } from "./ai-agent-layout";

const greeting = () => {
	const hour = new Date().getHours();
	return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
};

export default function AiAgent() {
	const navigate = useNavigate();
	// The hour is the visitor's, not the build machine's, so the greeting waits for the browser.
	const hydrated = useHydrated();
	const [prompt, setPrompt] = useState("");
	const [topic, setTopic] = useState<number | null>(null);

	return (
		<AiAgentLayout
			actions={
				<Tooltip>
					<TooltipTrigger asChild>
						<IconButton>
							<VenetianMask />
							<span className="sr-only">Incognito chat</span>
						</IconButton>
					</TooltipTrigger>
					<TooltipContent>Incognito chat</TooltipContent>
				</Tooltip>
			}
		>
			<div className="m-auto w-full max-w-200 px-4 pt-8 pb-16">
				<div className="mb-4 flex items-center justify-center gap-3 text-center text-2xl text-emphasis-foreground">
					<Sparkle className="size-7 text-amber-500" />
					{hydrated ? greeting() : "Hello"}, Gloria
				</div>

				{/* The chat page picks the prompt up and starts a new thread with it. */}
				<Composer
					value={prompt}
					onChange={setPrompt}
					onSend={(text) => navigate("/apps/ai-agent/chat", { state: { prompt: text } })}
					placeholder="How can I help you today?"
				/>

				<div className="mt-5 flex flex-wrap justify-center gap-2">
					{SUGGESTIONS.map((suggestion, index) => (
						<button
							key={suggestion.label}
							type="button"
							aria-pressed={topic === index}
							onClick={() => setTopic(topic === index ? null : index)}
							className={cn(
								"inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-sm",
								topic === index ? "border-primary text-sky-500" : "text-emphasis-foreground hover:border-input/75"
							)}
						>
							<suggestion.icon className="size-4" />
							{suggestion.label}
						</button>
					))}
				</div>

				{topic !== null && (
					<div className="mt-4">
						{SUGGESTIONS[topic].prompts.map((item) => (
							<button
								key={item}
								type="button"
								onClick={() => setPrompt(item)}
								className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-accent"
							>
								{item}
							</button>
						))}
					</div>
				)}
			</div>
		</AiAgentLayout>
	);
}
