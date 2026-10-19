import { Ticket, Wallet } from "lucide-react";
import type { ReactNode } from "react";

import { DialogFoot, DialogHead, DismissButton } from "@/components/common/dialog-parts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

/** Takes a promo or gift code for account credit. `children` opens it. */
export function RedeemDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent showCloseButton={false} className="gap-0 p-0 sm:max-w-sm">
				<DialogHead>Redeem Code</DialogHead>

				<div className="px-6">
					<DialogDescription className="mb-5 text-sm text-muted-foreground">
						Enter a promo or gift code. Its value is added to your account credit and applied to your next invoice.
					</DialogDescription>

					<Field className="mb-4">
						<FieldLabel htmlFor="redeem-code">Code</FieldLabel>
						<InputGroup>
							<InputGroupAddon>
								<Ticket />
							</InputGroupAddon>
							<InputGroupInput id="redeem-code" className="uppercase placeholder:normal-case" placeholder="e.g. SAVE20" autoComplete="off" />
						</InputGroup>
					</Field>

					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<Wallet className="size-4.5" />
						Current credit: <span className="font-medium text-emphasis-foreground">$12.00</span>
					</div>
				</div>

				<DialogFoot>
					<DismissButton />
					<DialogClose asChild>
						<Button>Redeem</Button>
					</DialogClose>
				</DialogFoot>
			</DialogContent>
		</Dialog>
	);
}
