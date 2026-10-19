import type { ReactNode } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** One card on a content page: a title, what it shows, then the samples. */
export function ExampleCard({ title, description, className, children }: { title: string; description?: ReactNode; className?: string; children: ReactNode }) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			{description ? <p className="mt-1.5 mb-6">{description}</p> : <div className="mb-6" />}
			{/* A block, so a lone button keeps its own width instead of stretching across the card. */}
			<div>{children}</div>
		</Card>
	);
}

/** A sub-section inside a card, with its own heading and description. */
export function ExampleSection({
	title,
	description,
	className,
	children,
}: {
	title: string;
	description?: ReactNode;
	className?: string;
	children: ReactNode;
}) {
	return (
		<section className={cn("mt-10", className)}>
			<h4 className="mb-3 text-sm font-medium">{title}</h4>
			{description && <p className="mb-6">{description}</p>}
			{children}
		</section>
	);
}

/** The outlined box a sample sits in. */
export function Preview({ className, children }: { className?: string; children: ReactNode }) {
	return <div className={cn("rounded-xl border border-input/50 p-5", className)}>{children}</div>;
}
