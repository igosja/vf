import { ExampleCard, Preview } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";

export default function Images() {
	return (
		<>
			<ContentHeader title="Images" breadcrumb={["Miscellaneous", "Content"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<ExampleCard
					title="Responsive images"
					description={
						<>
							Tailwind's base styles already make images responsive: <code>max-width: 100%</code> and <code>height: auto</code>, so an image
							scales down with its parent.
						</>
					}
				>
					<img className="rounded-sm" src="/img/misc/images/fluid.svg" alt="Responsive images" />
				</ExampleCard>

				<ExampleCard title="Image thumbnails" description="A border, a little padding and rounded corners frame an image as a thumbnail.">
					<img className="rounded-lg border border-input/50 p-1" src="/img/misc/images/thumbnail.svg" alt="Image thumbnails" />
				</ExampleCard>

				<ExampleCard
					title="Aligning images"
					description={
						<>
							Push an image to one side with <code>ml-auto</code>, or center it with <code>mx-auto</code>. Images are block level, so the auto
							margins work on their own.
						</>
					}
				>
					<Preview className="flex flex-col gap-5">
						<img className="ml-auto rounded-sm" src="/img/misc/images/thumbnail.svg" alt="Image aligned to the right" />
						<img className="mx-auto rounded-sm" src="/img/misc/images/thumbnail.svg" alt="Image centered" />
					</Preview>
				</ExampleCard>

				<ExampleCard
					title="Aspect ratio"
					description={
						<>
							Fix an image's shape with <code>aspect-*</code> and crop it to fit with <code>object-cover</code>, whatever its own size.
						</>
					}
				>
					<div className="grid gap-4 sm:grid-cols-3">
						<figure>
							<img className="mb-2 aspect-square w-full rounded-lg object-cover" src="/img/gallery/4.jpg" alt="" />
							<figcaption className="text-muted-foreground">aspect-square</figcaption>
						</figure>
						<figure>
							<img className="mb-2 aspect-4/3 w-full rounded-lg object-cover" src="/img/gallery/5.jpg" alt="" />
							<figcaption className="text-muted-foreground">aspect-4/3</figcaption>
						</figure>
						<figure>
							<img className="mb-2 aspect-video w-full rounded-lg object-cover" src="/img/gallery/6.jpg" alt="" />
							<figcaption className="text-muted-foreground">aspect-video</figcaption>
						</figure>
					</div>
				</ExampleCard>

				<ExampleCard
					title="Picture"
					description={
						<>
							When a <code>&lt;picture&gt;</code> offers several <code>&lt;source&gt;</code> elements, put the classes on the inner{" "}
							<code>&lt;img&gt;</code>, not on the <code>&lt;picture&gt;</code>.
						</>
					}
				>
					<pre className="overflow-x-auto rounded-xl bg-muted p-5 text-xs">
						<code className="text-foreground">{`<picture>
	<source srcset="..." type="image/svg+xml" />
	<img src="..." class="rounded-lg border p-1" alt="..." />
</picture>`}</code>
					</pre>
				</ExampleCard>
			</div>
		</>
	);
}
