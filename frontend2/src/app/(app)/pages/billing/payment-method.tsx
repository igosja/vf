import { CirclePlus, Nfc, PencilLine } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { BILLING_ACCOUNT } from "@/data/billing";

import { AddPaymentDialog, EditPaymentDialog } from "./payment-dialogs";

export function PaymentMethod() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle>Payment Method</CardTitle>
				<CardAction>
					<EditPaymentDialog>
						<IconButton>
							<PencilLine />
							<span className="sr-only">Edit payment method</span>
						</IconButton>
					</EditPaymentDialog>
					<AddPaymentDialog>
						<IconButton>
							<CirclePlus />
							<span className="sr-only">Add payment method</span>
						</IconButton>
					</AddPaymentDialog>
				</CardAction>
			</CardHeader>

			<div className="relative mb-5 flex h-36 flex-col justify-between overflow-hidden rounded-2xl p-5 text-white shadow-md">
				<img src="/img/misc/credit-card-bg.svg" className="absolute inset-0 size-full object-cover" alt="" />

				<div className="relative flex items-center justify-between">
					<Nfc className="size-7" />
					<span className="text-base font-bold italic">VISA</span>
				</div>

				<div className="relative">
					<div className="mb-3 font-mono text-base">•••• •••• •••• {BILLING_ACCOUNT.card}</div>
					<div className="flex justify-between text-xs opacity-75">
						<span>{BILLING_ACCOUNT.cardholder}</span>
						<span>Exp {BILLING_ACCOUNT.expiry}</span>
					</div>
				</div>
			</div>

			<dl>
				<dt className="mb-1 text-muted-foreground">Billing email</dt>
				<dd className="mb-3 text-emphasis-foreground">{BILLING_ACCOUNT.email}</dd>
				<dt className="mb-1 text-muted-foreground">Billing address</dt>
				<dd className="mb-3 text-emphasis-foreground">{BILLING_ACCOUNT.address}</dd>
				<dt className="mb-1 text-muted-foreground">Tax ID</dt>
				<dd className="text-emphasis-foreground">{BILLING_ACCOUNT.taxId}</dd>
			</dl>
		</Card>
	);
}
