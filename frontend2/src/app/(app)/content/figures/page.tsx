"use client";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";

export default function Figures() {
	return (
		<>
			<ContentHeader title="Figures" breadcrumb={["Miscellaneous", "Content"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<ExampleCard
					title="Basic example"
					description={
						<>
							Anytime you need to display a piece of content, like an image with an optional caption, consider using a <code>&lt;figure&gt;</code>
							.
						</>
					}
				>
					<figure className="w-125 max-w-full">
						<img src="/img/gallery/1.jpg" className="mb-2 rounded-sm" alt="" />
						<figcaption className="text-muted-foreground">A caption for the above image.</figcaption>
					</figure>
				</ExampleCard>

				<ExampleCard title="Alignment" description="Align the caption with the text alignment utilities.">
					<figure className="w-125 max-w-full">
						<img src="/img/gallery/2.jpg" className="mb-2 rounded-sm" alt="" />
						<figcaption className="text-right text-muted-foreground">A caption for the above image.</figcaption>
					</figure>
				</ExampleCard>

				<ExampleCard
					title="Overlay caption"
					description="Lay the caption over the bottom of the image on a gradient, so it stays readable on any photo."
				>
					<figure className="relative w-125 max-w-full overflow-hidden rounded-sm">
						<img src="/img/gallery/3.jpg" alt="" />
						<figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pt-10 pb-3 text-white">
							A caption over the image.
						</figcaption>
					</figure>
				</ExampleCard>
			</div>
		</>
	);
}
