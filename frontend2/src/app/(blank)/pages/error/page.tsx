"use client";

import { Card } from "@/components/ui/card";
import { Link } from "@/lib/router";

export default function ErrorPage() {
	return (
		<div className="flex h-screen p-5">
			<Card className="m-auto max-w-100 p-10 text-center">
				<img className="mx-auto mb-8 w-20" src="/img/misc/coming-soon.svg" alt="404" />
				<h2 className="mb-1 text-lg leading-tight font-medium">404</h2>
				<p className="mb-4">We're sorry that the page you're looking for does not exist. Please check the URL and try again.</p>
				<Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
					Back to home page
				</Link>
			</Card>
		</div>
	);
}
