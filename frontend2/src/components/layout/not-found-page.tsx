"use client";

import { ContentHeader } from "@/components/layout/content-header";
import { Link } from "@/lib/router";

export function NotFoundPage() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Page not found" />
			<div className="rounded-2xl bg-card p-6">
				<p className="mb-4">This page does not exist yet.</p>
				<Link to="/">Back to the dashboard</Link>
			</div>
		</div>
	);
}
