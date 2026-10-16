import { useEffect, useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const SLIDES = Array.from({ length: 5 }, (_, index) => index + 1);

/** A numbered square slide. */
function Slide({ number, className }: { number: number; className?: string }) {
	return (
		<div className={cn("flex aspect-square items-center justify-center rounded-xl bg-muted text-4xl font-semibold text-emphasis-foreground", className)}>
			{number}
		</div>
	);
}

/** Reads the current slide and the slide count from the carousel's API. */
function ApiCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);
		api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
	}, [api]);

	return (
		<div className="mx-auto max-w-xs">
			<Carousel setApi={setApi}>
				<CarouselContent>
					{SLIDES.map((number) => (
						<CarouselItem key={number}>
							<Slide number={number} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
}

export default function CarouselPage() {
	return (
		<>
			<ContentHeader title="Carousel" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="Arrows, the arrow keys and a swipe all move between slides.">
					<Carousel className="mx-auto max-w-xs">
						<CarouselContent>
							{SLIDES.map((number) => (
								<CarouselItem key={number}>
									<Slide number={number} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</ExampleCard>

				<ExampleCard title="Sizes" description="Set a basis on each item to show several at once.">
					<Carousel opts={{ align: "start" }} className="mx-auto max-w-sm">
						<CarouselContent>
							{SLIDES.map((number) => (
								<CarouselItem key={number} className="basis-1/2 lg:basis-1/3">
									<Slide number={number} className="text-3xl" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</ExampleCard>

				<ExampleCard title="Spacing" description="Set the gap with a negative margin on the content and a padding on each item.">
					<Carousel className="mx-auto max-w-sm">
						<CarouselContent className="-ml-1">
							{SLIDES.map((number) => (
								<CarouselItem key={number} className="basis-1/2 pl-1 lg:basis-1/3">
									<Slide number={number} className="text-2xl" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</ExampleCard>

				<ExampleCard title="Orientation" description="A vertical carousel slides up and down.">
					<Carousel opts={{ align: "start" }} orientation="vertical" className="mx-auto my-12 max-w-xs">
						<CarouselContent className="-mt-1 h-68">
							{SLIDES.map((number) => (
								<CarouselItem key={number} className="basis-1/2 pt-1">
									<Slide number={number} className="aspect-auto h-full text-3xl" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</ExampleCard>

				<ExampleCard title="API" description="setApi hands over the carousel's API, here to show the current slide.">
					<ApiCarousel />
				</ExampleCard>
			</div>
		</>
	);
}
