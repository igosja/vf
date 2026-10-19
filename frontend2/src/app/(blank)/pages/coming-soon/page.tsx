"use client";

import { Card } from "@/components/ui/card";
import { Link } from "@/lib/router";

export default function ComingSoon() {
	return (
		<div className="flex h-screen p-5">
			<Card className="m-auto max-w-100 p-10 text-center">
				<img className="mx-auto mb-8 w-20" src="/img/misc/coming-soon.svg" alt="Coming Soon!" />
				<h2 className="mb-3 text-lg leading-tight font-medium">Coming Soon!</h2>
				<p className="mb-4">
					We are currently working on this page and plan to launch it soon with an exciting version update. Stay tuned for the latest developments!
				</p>
				<Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
					Back to home page
				</Link>
			</Card>
		</div>
	);
}
