"use client";

import { ArrowRight, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { Card } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FAQ_ANSWER, FAQ_CATEGORIES } from "@/data/faq";

export default function Faq() {
	// The question stays set while the dialog closes, so its title does not blank out mid-animation.
	const [question, setQuestion] = useState("");
	const [open, setOpen] = useState(false);

	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<div className="pt-12 pb-8 text-center">
				<h2 className="mb-3 text-lg font-medium">How can we help you?</h2>
				<p className="mb-6">Find all the support-related questions and answers here. Type a keyword below to get started!</p>
				<SearchField className="mx-auto max-w-200" placeholder="Type keywords to find answers..." aria-label="Search questions" shortcut />
			</div>

			<div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
				{FAQ_CATEGORIES.map((category) => (
					<Card key={category.title} className="px-7 py-6">
						<h3 className="mb-5 flex items-center">
							<span className="flex-1 text-base">{category.title}</span>
							<category.icon className="-mr-1 size-5" />
						</h3>

						{category.questions.map((item) => (
							<button
								key={item}
								type="button"
								onClick={() => {
									setQuestion(item);
									setOpen(true);
								}}
								className="block w-full border-b py-2 text-left text-foreground transition-colors hover:text-emphasis-foreground"
							>
								{item}
							</button>
						))}

						<a href="#" className="mt-5 flex items-center">
							Browse all questions
							<ArrowRight className="ml-auto size-4" />
						</a>
					</Card>
				))}
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0">
					<div className="flex shrink-0 items-start gap-4 p-6 pb-4">
						<DialogTitle className="flex-1 text-base leading-tight font-medium text-emphasis-foreground">{question}</DialogTitle>
						<DialogClose asChild>
							<IconButton className="-my-2 -mr-2">
								<X />
								<span className="sr-only">Close</span>
							</IconButton>
						</DialogClose>
					</div>

					<ScrollArea className="min-h-0 flex-1">
						<div className="px-6 pb-6">
							<DialogDescription className="mb-5 text-sm text-foreground">{FAQ_ANSWER.intro}</DialogDescription>
							<ul className="mb-5 flex list-disc flex-col gap-1 pl-5">
								{FAQ_ANSWER.steps.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ul>
							<p className="mb-5">{FAQ_ANSWER.outro}</p>

							<div className="flex items-center gap-1 text-xs text-muted-foreground">
								<span className="mr-2">Was this section helpful?</span>
								<IconButton>
									<ThumbsUp />
									<span className="sr-only">Yes</span>
								</IconButton>
								<IconButton>
									<ThumbsDown />
									<span className="sr-only">No</span>
								</IconButton>
							</div>
						</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</div>
	);
}
