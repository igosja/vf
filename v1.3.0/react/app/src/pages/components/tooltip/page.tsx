import { Save } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipPage() {
	return (
		<>
			<ContentHeader title="Tooltip" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="Hover or focus the trigger to see its tooltip.">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline">Hover</Button>
						</TooltipTrigger>
						<TooltipContent>Add to library</TooltipContent>
					</Tooltip>
				</ExampleCard>

				<ExampleCard title="Side" description="Show the tooltip on any side. It flips when there's no room.">
					<div className="flex flex-wrap gap-2">
						{(["left", "top", "bottom", "right"] as const).map((side) => (
							<Tooltip key={side}>
								<TooltipTrigger asChild>
									<Button variant="outline" className="capitalize">
										{side}
									</Button>
								</TooltipTrigger>
								<TooltipContent side={side}>Add to library</TooltipContent>
							</Tooltip>
						))}
					</div>
				</ExampleCard>

				<ExampleCard title="With keyboard shortcut" description="Name an icon button and show its shortcut.">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline" size="icon-sm" aria-label="Save Changes">
								<Save />
							</Button>
						</TooltipTrigger>
						<TooltipContent className="flex items-center gap-2">
							Save Changes <Kbd>S</Kbd>
						</TooltipContent>
					</Tooltip>
				</ExampleCard>

				<ExampleCard title="Disabled button" description="A disabled button fires no pointer events, so wrap it in a span and put the trigger on that.">
					<Tooltip>
						<TooltipTrigger asChild>
							<span tabIndex={0} className="inline-block w-fit">
								<Button variant="outline" disabled>
									Disabled
								</Button>
							</span>
						</TooltipTrigger>
						<TooltipContent>This feature is currently unavailable</TooltipContent>
					</Tooltip>
				</ExampleCard>
			</div>
		</>
	);
}
