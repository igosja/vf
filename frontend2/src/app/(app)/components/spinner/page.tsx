"use client";

import { ArrowUp, LoaderCircle } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerPage() {
	return (
		<>
			<ContentHeader title="Spinner" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A spinner in an item, while a payment goes through.">
					<Item variant="muted" className="max-w-xs">
						<ItemMedia>
							<Spinner />
						</ItemMedia>
						<ItemContent>
							<ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
						</ItemContent>
						<ItemContent className="justify-end">
							<span className="tabular-nums">$100.00</span>
						</ItemContent>
					</Item>
				</ExampleCard>

				<ExampleCard title="Customization" description="Swap the icon for another; the spin and the label stay.">
					<LoaderCircle role="status" aria-label="Loading" className="size-4 animate-spin" />
				</ExampleCard>

				<ExampleCard title="Size" description="Set the size with a size utility.">
					<div className="flex items-center gap-6">
						<Spinner className="size-3" />
						<Spinner className="size-4" />
						<Spinner className="size-6" />
						<Spinner className="size-8" />
					</div>
				</ExampleCard>

				<ExampleCard title="Button" description="A spinner on a disabled button.">
					<div className="flex flex-col items-start gap-4">
						<Button disabled size="sm">
							<Spinner />
							Loading...
						</Button>
						<Button variant="outline" disabled size="sm">
							<Spinner />
							Please wait
						</Button>
						<Button variant="secondary" disabled size="sm">
							<Spinner />
							Processing
						</Button>
					</div>
				</ExampleCard>

				<ExampleCard title="Badge" description="A spinner inside a badge.">
					<div className="flex items-center gap-4">
						<Badge>
							<Spinner />
							Syncing
						</Badge>
						<Badge variant="secondary">
							<Spinner />
							Updating
						</Badge>
						<Badge variant="outline">
							<Spinner />
							Processing
						</Badge>
					</div>
				</ExampleCard>

				<ExampleCard title="Input group" description="A spinner as an input group addon.">
					<div className="flex max-w-md flex-col gap-4">
						<InputGroup>
							<InputGroupInput placeholder="Send a message..." disabled />
							<InputGroupAddon align="inline-end">
								<Spinner />
							</InputGroupAddon>
						</InputGroup>
						<InputGroup>
							<InputGroupTextarea placeholder="Send a message..." disabled />
							<InputGroupAddon align="block-end">
								<Spinner /> Validating...
								<InputGroupButton className="ml-auto" variant="default" size="icon-sm">
									<ArrowUp />
									<span className="sr-only">Send</span>
								</InputGroupButton>
							</InputGroupAddon>
						</InputGroup>
					</div>
				</ExampleCard>
			</div>
		</>
	);
}
