"use client";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
	return (
		<>
			<ContentHeader title="Skeleton" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Avatar" description="A round avatar beside two lines of text.">
					<div className="flex w-fit items-center gap-4">
						<Skeleton className="size-10 shrink-0 rounded-full" />
						<div className="grid gap-2">
							<Skeleton className="h-4 w-36" />
							<Skeleton className="h-4 w-24" />
						</div>
					</div>
				</ExampleCard>

				<ExampleCard title="Card" description="A card's title lines and its image.">
					<Card className="max-w-xs bg-muted">
						<div className="mb-6 grid gap-2">
							<Skeleton className="h-4 w-2/3" />
							<Skeleton className="h-4 w-1/2" />
						</div>
						<Skeleton className="aspect-video w-full" />
					</Card>
				</ExampleCard>

				<ExampleCard title="Text" description="A paragraph, ending on a shorter line.">
					<div className="flex max-w-xs flex-col gap-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-3/4" />
					</div>
				</ExampleCard>

				<ExampleCard title="Form" description="Labels, fields and a button.">
					<div className="flex max-w-xs flex-col gap-7">
						<div className="flex flex-col gap-3">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-10 w-full" />
						</div>
						<div className="flex flex-col gap-3">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-10 w-full" />
						</div>
						<Skeleton className="h-10 w-24 rounded-full" />
					</div>
				</ExampleCard>

				<ExampleCard title="Table" description="Rows of cells.">
					<div className="flex max-w-sm flex-col gap-2">
						{Array.from({ length: 5 }, (_, index) => (
							<div key={index} className="flex gap-4">
								<Skeleton className="h-4 flex-1" />
								<Skeleton className="h-4 w-24" />
								<Skeleton className="h-4 w-20" />
							</div>
						))}
					</div>
				</ExampleCard>
			</div>
		</>
	);
}
