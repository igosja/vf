"use client";

import { ArrowUpRight, BadgeCheck, CheckCircle } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export default function BadgePage() {
	return (
		<>
			<ContentHeader title="Badge" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Variants" description="Default, secondary, destructive, positive, caution, outline and ghost.">
					<div className="flex flex-wrap gap-2">
						<Badge>Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="destructive">Destructive</Badge>
						<Badge variant="positive">Positive</Badge>
						<Badge variant="caution">Caution</Badge>
						<Badge variant="outline">Outline</Badge>
						<Badge variant="ghost">Ghost</Badge>
					</div>
				</ExampleCard>

				<ExampleCard title="With icon" description="An icon before or after the label.">
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary">
							<BadgeCheck />
							Verified
						</Badge>
						<Badge variant="outline">
							Completed
							<CheckCircle />
						</Badge>
					</div>
				</ExampleCard>

				<ExampleCard title="With spinner" description="A spinner shows work in progress.">
					<div className="flex flex-wrap gap-2">
						<Badge variant="destructive">
							<Spinner />
							Deleting
						</Badge>
						<Badge variant="secondary">
							Generating
							<Spinner />
						</Badge>
					</div>
				</ExampleCard>

				<ExampleCard title="Link" description="With asChild, a link takes the badge's look.">
					<Badge asChild>
						<a href="#">
							Open Link <ArrowUpRight />
						</a>
					</Badge>
				</ExampleCard>

				<ExampleCard title="Custom colors" description="Pass a background and text colour through className.">
					<div className="flex flex-wrap gap-2">
						<Badge className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">Indigo</Badge>
						<Badge className="bg-purple-500/15 text-purple-600 dark:text-purple-400">Purple</Badge>
						<Badge className="bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400">Fuchsia</Badge>
						<Badge className="bg-pink-500/15 text-pink-600 dark:text-pink-400">Pink</Badge>
						<Badge className="bg-orange-500/15 text-orange-600 dark:text-orange-400">Orange</Badge>
						<Badge className="bg-lime-500/15 text-lime-600 dark:text-lime-400">Lime</Badge>
						<Badge className="bg-teal-500/15 text-teal-600 dark:text-teal-400">Teal</Badge>
					</div>
				</ExampleCard>
			</div>
		</>
	);
}
