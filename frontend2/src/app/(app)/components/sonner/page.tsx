"use client";

import { toast } from "sonner";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";

const POSITIONS = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const;

/** Resolves after two seconds, to show a toast that follows a promise. */
function createEvent() {
	return new Promise<{ name: string }>((resolve) => window.setTimeout(() => resolve({ name: "Event" }), 2000));
}

export default function SonnerPage() {
	return (
		<>
			<ContentHeader title="Sonner" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A toast with a description and an Undo action.">
					<Button
						variant="outline"
						onClick={() =>
							toast("Event has been created", {
								description: "Sunday, December 03, 2023 at 9:00 AM",
								action: { label: "Undo", onClick: () => toast("Event removed") },
							})
						}
					>
						Show Toast
					</Button>
				</ExampleCard>

				<ExampleCard title="Types" description="Success, info, warning and error each get an icon. A promise toast shows loading, then the result.">
					<div className="flex flex-wrap gap-2">
						<Button variant="outline" onClick={() => toast("Event has been created")}>
							Default
						</Button>
						<Button variant="outline" onClick={() => toast.success("Event has been created")}>
							Success
						</Button>
						<Button variant="outline" onClick={() => toast.info("Be at the area 10 minutes before the event time")}>
							Info
						</Button>
						<Button variant="outline" onClick={() => toast.warning("Event start time cannot be earlier than 8am")}>
							Warning
						</Button>
						<Button variant="outline" onClick={() => toast.error("Event has not been created")}>
							Error
						</Button>
						<Button
							variant="outline"
							onClick={() =>
								toast.promise(createEvent, {
									loading: "Loading...",
									success: (data) => `${data.name} has been created`,
									error: "Error",
								})
							}
						>
							Promise
						</Button>
					</div>
				</ExampleCard>

				<ExampleCard title="Description" description="A second line under the title.">
					<Button variant="outline" onClick={() => toast("Event has been created", { description: "Monday, January 3rd at 6:00pm" })}>
						Show Toast
					</Button>
				</ExampleCard>

				<ExampleCard title="Position" description="Show a toast in any corner, or centred at the top or bottom.">
					<div className="flex flex-wrap gap-2">
						{POSITIONS.map((position) => (
							<Button key={position} variant="outline" className="capitalize" onClick={() => toast("Event has been created", { position })}>
								{position.replace("-", " ")}
							</Button>
						))}
					</div>
				</ExampleCard>
			</div>
		</>
	);
}
