import { CircleDollarSign, Gift } from "lucide-react";
import type { ReactNode } from "react";

import { DialogFoot, DismissButton } from "@/components/common/dialog-parts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

/** Offers the yearly plan: the saving, monthly against yearly, and what is due today. `children` opens it. */
export function YearlyDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0">
				<ScrollArea className="min-h-0 flex-1">
					<div className="p-2">
						<div className="relative overflow-hidden rounded-xl px-6 py-8 text-center text-white">
							<img src="/img/misc/yearly-plan-bg.svg" className="absolute inset-0 size-full object-cover" alt="" />
							<div className="relative">
								<span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 text-xs font-medium">
									<Gift className="size-4" />2 months free
								</span>
								<DialogTitle className="mb-2 text-xl font-semibold text-white">Save $118 a year</DialogTitle>
								<DialogDescription className="text-sm text-white/75">Same Pro plan, lower price. Billed once a year.</DialogDescription>
							</div>
						</div>
					</div>

					<div className="p-6 pb-0">
						<div className="mb-6 grid grid-cols-2 gap-3">
							<div className="rounded-xl border-2 p-4">
								<div className="mb-2 text-xs">Monthly</div>
								<div className="mb-1 flex items-baseline gap-1">
									<span className="text-xl font-semibold">$49</span>
									<span className="text-xs">/month</span>
								</div>
								<div className="text-xs line-through">$588 / year</div>
							</div>

							<div className="relative rounded-xl border-2 border-primary p-4">
								<Badge className="absolute top-0 right-3 -translate-y-1/2 bg-primary text-primary-foreground">Best value</Badge>
								<div className="mb-2 text-xs text-sky-500">Yearly</div>
								<div className="mb-1 flex items-baseline gap-1">
									<span className="text-xl font-semibold text-emphasis-foreground">$39</span>
									<span className="text-xs text-muted-foreground">/month</span>
								</div>
								<div className="text-xs text-muted-foreground">$470 / year</div>
							</div>
						</div>

						<div className="mb-2 flex justify-between text-xs">
							<span className="text-muted-foreground">
								You pay <span className="font-medium text-emphasis-foreground">$470</span>
							</span>
							<span className="font-medium text-emerald-500">You save $118</span>
						</div>
						<div className="mb-6 flex h-2 gap-0.75" role="img" aria-label="$470 paid, $118 saved">
							<div className="w-4/5 rounded-lg bg-primary" />
							<div className="flex-1 rounded-lg bg-emerald-500" />
						</div>

						<div className="rounded-xl bg-muted p-4">
							<div className="mb-2 flex justify-between gap-4">
								<span>Pro Plan · Yearly</span>
								<span className="text-emphasis-foreground">$470.00</span>
							</div>
							<div className="mb-2 flex justify-between gap-4">
								<span>Unused time on monthly plan</span>
								<span className="whitespace-nowrap text-emerald-500">-$5.23</span>
							</div>
							<div className="mb-3 flex justify-between gap-4 border-b border-input/50 pb-3">
								<span>Account credit</span>
								<span className="whitespace-nowrap text-emerald-500">-$12.00</span>
							</div>
							<div className="flex items-baseline justify-between">
								<span className="font-medium text-emphasis-foreground">Due today</span>
								<span className="text-base font-semibold text-emphasis-foreground">$452.77</span>
							</div>
						</div>

						<p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
							<CircleDollarSign className="size-4.5" />
							Charged to Visa •••• 4242. Renews Oct 10, 2027.
						</p>
					</div>
				</ScrollArea>

				<DialogFoot>
					<DismissButton>Maybe later</DismissButton>
					<DialogClose asChild>
						<Button>Switch &amp; save $118</Button>
					</DialogClose>
				</DialogFoot>
			</DialogContent>
		</Dialog>
	);
}
