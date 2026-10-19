"use client";

import { CircleEllipsis, Ticket } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";

import { History } from "./history";
import { PaymentMethod } from "./payment-method";
import { Plan } from "./plan";
import { RedeemDialog } from "./redeem-dialog";

export default function Billing() {
	return (
		<div className="mx-auto w-full max-w-300 pb-4">
			<ContentHeader title="Billing" breadcrumb={["Miscellaneous", "Samples Pages"]}>
				<div className="mr-3 ml-auto flex items-center gap-1.5">
					<RedeemDialog>
						<Button variant="theme" className="hidden sm:inline-flex">
							<Ticket />
							Redeem Code
						</Button>
					</RedeemDialog>
					<IconButton>
						<CircleEllipsis />
						<span className="sr-only">More options</span>
					</IconButton>
				</div>
			</ContentHeader>

			<div className="mb-4 grid gap-4 lg:grid-cols-3 print:hidden">
				<Plan />
				<PaymentMethod />
			</div>

			<History />
		</div>
	);
}
