import { CircleX, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

import { DialogFoot, DismissButton } from "@/components/common/dialog-parts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

const LOSSES = ["Seats drop from 10 to 2 members", "Storage limit drops to 5 GB", "API access and priority support removed"];

/** Confirms cancelling the plan: what the workspace loses, and why it is leaving. `children` opens it. */
export function CancelDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent showCloseButton={false} className="gap-0 p-0">
				<div className="px-6 pt-8 text-center">
					<div className="mx-auto mb-5 grid avatar-mask size-10.5 place-items-center bg-red-400/15 text-red-400">
						<TriangleAlert className="size-6" />
					</div>
					<DialogTitle className="mb-2 text-base leading-tight font-medium text-emphasis-foreground">Cancel your subscription?</DialogTitle>
					<DialogDescription className="mb-6 text-sm text-muted-foreground">
						Your Pro Plan stays active until <span className="text-emphasis-foreground">Nov 12, 2026</span>. After that, your workspace moves to the
						Free plan.
					</DialogDescription>

					<ul className="mb-6 grid gap-2.5 rounded-xl bg-red-500/10 p-4 text-left text-red-400">
						{LOSSES.map((item) => (
							<li key={item} className="flex items-center gap-2">
								<CircleX className="size-5" />
								{item}
							</li>
						))}
					</ul>

					<Field className="text-left">
						<FieldLabel htmlFor="cancel-reason">Why are you cancelling?</FieldLabel>
						<NativeSelect id="cancel-reason" defaultValue="">
							<NativeSelectOption value="" disabled>
								Select a reason
							</NativeSelectOption>
							<NativeSelectOption>Too expensive</NativeSelectOption>
							<NativeSelectOption>Missing features I need</NativeSelectOption>
							<NativeSelectOption>Switching to another product</NativeSelectOption>
							<NativeSelectOption>No longer needed</NativeSelectOption>
							<NativeSelectOption>Other</NativeSelectOption>
						</NativeSelect>
					</Field>
				</div>

				<DialogFoot>
					<DismissButton>Keep subscription</DismissButton>
					<DialogClose asChild>
						<Button variant="destructive">Cancel subscription</Button>
					</DialogClose>
				</DialogFoot>
			</DialogContent>
		</Dialog>
	);
}
