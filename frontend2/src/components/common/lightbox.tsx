import { X } from "lucide-react";
import { useCallback, useState, type ReactNode } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

/**
 * A full-window photo viewer: one photo at a time on a dark backdrop, with
 * arrows, arrow keys and swipe to move between them. `index` is the photo it
 * opens on; `actions` are buttons for the top bar, styled for the dark backdrop
 * with `lightboxAction`.
 */
export function Lightbox({
	photos,
	open,
	index,
	onOpenChange,
	actions,
}: {
	photos: string[];
	open: boolean;
	index: number;
	onOpenChange: (open: boolean) => void;
	actions?: ReactNode;
}) {
	const [current, setCurrent] = useState(index);

	// The counter follows the carousel, which mounts afresh each time the viewer opens.
	const track = useCallback((api: CarouselApi) => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, []);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				showCloseButton={false}
				overlayClassName="bg-black/90"
				className="inset-0 top-0 left-0 flex h-dvh w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none bg-transparent p-0 sm:max-w-none"
			>
				<DialogTitle className="sr-only">Photo viewer</DialogTitle>
				<DialogDescription className="sr-only">Use the arrow keys to move between photos</DialogDescription>

				<Carousel opts={{ startIndex: index }} setApi={track} className="flex min-h-0 flex-1 flex-col">
					<div className="flex h-16 shrink-0 items-center gap-2 px-4 text-white">
						<div className="text-sm text-white/75" aria-live="polite">
							{current + 1} / {photos.length}
						</div>
						<div className="ml-auto flex gap-1">
							{actions}
							<DialogClose asChild>
								<IconButton className={lightboxAction}>
									<X />
									<span className="sr-only">Close</span>
								</IconButton>
							</DialogClose>
						</div>
					</div>

					<CarouselContent viewportClassName="min-h-0 flex-1" className="h-full">
						{photos.map((photo, position) => (
							<CarouselItem key={position} className="h-full">
								<div className="flex h-full items-center justify-center px-4 pb-4 sm:px-20 sm:pb-8">
									<img
										src={photo}
										alt={`Photo ${position + 1} of ${photos.length}`}
										className="max-h-full max-w-full rounded-xl object-contain"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className="left-4 hidden bg-white/10 text-white hover:bg-white/20 sm:grid" />
					<CarouselNext className="right-4 hidden bg-white/10 text-white hover:bg-white/20 sm:grid" />
				</Carousel>
			</DialogContent>
		</Dialog>
	);
}

/** White icon buttons for the lightbox's dark top bar. */
export const lightboxAction = "text-white hover:bg-white/10 focus-visible:bg-white/10";
