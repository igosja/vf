import { CreditCard, Landmark, ShieldCheck, Wallet } from "lucide-react";
import type { ReactNode } from "react";

import { DialogFoot, DialogHead, DismissButton } from "@/components/common/dialog-parts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BILLING_ACCOUNT } from "@/data/billing";

/** Adds a card, a PayPal account or a bank account. `children` opens it. */
export function AddPaymentDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0">
				<DialogHead>Add Payment Method</DialogHead>
				<DialogDescription className="sr-only">Pay by card, PayPal or bank account</DialogDescription>

				<ScrollArea className="min-h-0 flex-1">
					<div className="px-6">
						<Tabs defaultValue="card" className="mb-5">
							<TabsList className="mb-6">
								<TabsTrigger value="card">
									<CreditCard className="size-5" />
									Card
								</TabsTrigger>
								<TabsTrigger value="paypal">
									<Wallet className="size-5" />
									PayPal
								</TabsTrigger>
								<TabsTrigger value="bank">
									<Landmark className="size-5" />
									Bank account
								</TabsTrigger>
							</TabsList>

							<TabsContent value="card" className="grid grid-cols-12 gap-4">
								<Field className="col-span-12">
									<FieldLabel htmlFor="add-card-name">Name on card</FieldLabel>
									<Input id="add-card-name" placeholder="Catherine Williams" autoComplete="cc-name" />
								</Field>
								<Field className="col-span-12">
									<FieldLabel htmlFor="add-card-number">Card number</FieldLabel>
									<InputGroup>
										<InputGroupAddon>
											<CreditCard />
										</InputGroupAddon>
										<InputGroupInput id="add-card-number" placeholder="1234 5678 9012 3456" inputMode="numeric" autoComplete="cc-number" />
									</InputGroup>
								</Field>
								<Field className="col-span-7">
									<FieldLabel htmlFor="add-card-expiry">Expiry date</FieldLabel>
									<Input id="add-card-expiry" placeholder="MM / YY" inputMode="numeric" autoComplete="cc-exp" />
								</Field>
								<Field className="col-span-5">
									<FieldLabel htmlFor="add-card-cvc">CVC</FieldLabel>
									<Input id="add-card-cvc" placeholder="123" inputMode="numeric" autoComplete="cc-csc" />
								</Field>
								<Field className="col-span-7">
									<FieldLabel htmlFor="add-card-country">Country</FieldLabel>
									<NativeSelect id="add-card-country" autoComplete="country-name">
										<NativeSelectOption>United States</NativeSelectOption>
										<NativeSelectOption>Canada</NativeSelectOption>
										<NativeSelectOption>United Kingdom</NativeSelectOption>
										<NativeSelectOption>Germany</NativeSelectOption>
										<NativeSelectOption>Australia</NativeSelectOption>
									</NativeSelect>
								</Field>
								<Field className="col-span-5">
									<FieldLabel htmlFor="add-card-zip">ZIP code</FieldLabel>
									<Input id="add-card-zip" placeholder="48015" autoComplete="postal-code" />
								</Field>
							</TabsContent>

							<TabsContent value="paypal" className="rounded-xl bg-muted px-4 py-6 text-center">
								<div className="mx-auto mb-4 grid avatar-mask size-10.5 place-items-center bg-sky-500/15 text-sky-500">
									<Wallet className="size-6" />
								</div>
								<div className="mb-1 font-medium text-emphasis-foreground">Connect your PayPal account</div>
								<p className="text-muted-foreground">
									You'll be redirected to PayPal to sign in and approve future payments. You can disconnect it at any time.
								</p>
							</TabsContent>

							<TabsContent value="bank" className="grid grid-cols-2 gap-4">
								<Field className="col-span-2">
									<FieldLabel htmlFor="add-bank-holder">Account holder</FieldLabel>
									<Input id="add-bank-holder" placeholder={BILLING_ACCOUNT.company} autoComplete="name" />
								</Field>
								<Field>
									<FieldLabel htmlFor="add-bank-routing">Routing number</FieldLabel>
									<Input id="add-bank-routing" placeholder="110000000" inputMode="numeric" />
								</Field>
								<Field>
									<FieldLabel htmlFor="add-bank-type">Account type</FieldLabel>
									<NativeSelect id="add-bank-type">
										<NativeSelectOption>Checking</NativeSelectOption>
										<NativeSelectOption>Savings</NativeSelectOption>
									</NativeSelect>
								</Field>
								<Field className="col-span-2">
									<FieldLabel htmlFor="add-bank-account">Account number</FieldLabel>
									<InputGroup>
										<InputGroupAddon>
											<Landmark />
										</InputGroupAddon>
										<InputGroupInput id="add-bank-account" placeholder="000123456789" inputMode="numeric" />
									</InputGroup>
								</Field>
							</TabsContent>
						</Tabs>

						<Field orientation="horizontal" className="mb-5">
							<Switch id="add-payment-default" defaultChecked />
							<FieldLabel htmlFor="add-payment-default">Set as default payment method</FieldLabel>
						</Field>

						<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
							<ShieldCheck className="size-4.5" />
							Payments are encrypted and processed securely.
						</div>
					</div>
				</ScrollArea>

				<DialogFoot>
					<DismissButton />
					<DialogClose asChild>
						<Button>Add payment method</Button>
					</DialogClose>
				</DialogFoot>
			</DialogContent>
		</Dialog>
	);
}

/** Edits the default card and the billing details printed on invoices. `children` opens it. */
export function EditPaymentDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0">
				<DialogHead>Edit Payment Method</DialogHead>
				<DialogDescription className="sr-only">Update the card and the billing details</DialogDescription>

				<ScrollArea className="min-h-0 flex-1">
					<div className="px-6">
						<div className="mb-6 flex items-center gap-3 rounded-xl bg-muted p-4">
							<span className="grid avatar-mask size-9 place-items-center bg-sky-500/15 text-sky-500">
								<CreditCard className="size-5" />
							</span>
							<div className="flex-1 leading-tight">
								<div className="mb-1 font-medium text-emphasis-foreground">Visa ending in {BILLING_ACCOUNT.card}</div>
								<div className="text-xs text-muted-foreground">Added on March 12, 2026</div>
							</div>
							<Badge className="bg-emerald-500 text-white dark:text-black">Default</Badge>
						</div>

						<div className="grid grid-cols-12 gap-4">
							<Field className="col-span-8">
								<FieldLabel htmlFor="edit-card-name">Name on card</FieldLabel>
								<Input id="edit-card-name" defaultValue={BILLING_ACCOUNT.cardholder} autoComplete="cc-name" />
							</Field>
							<Field className="col-span-4">
								<FieldLabel htmlFor="edit-card-expiry">Expiry date</FieldLabel>
								<Input id="edit-card-expiry" defaultValue="08 / 28" inputMode="numeric" autoComplete="cc-exp" />
							</Field>
							<Field className="col-span-12">
								<FieldLabel htmlFor="edit-billing-email">Billing email</FieldLabel>
								<Input id="edit-billing-email" type="email" defaultValue={BILLING_ACCOUNT.email} autoComplete="email" />
							</Field>
							<Field className="col-span-12">
								<FieldLabel htmlFor="edit-billing-address">Billing address</FieldLabel>
								<Input id="edit-billing-address" defaultValue="2810 D Street" autoComplete="street-address" />
							</Field>
							<Field className="col-span-5">
								<FieldLabel htmlFor="edit-billing-city">City</FieldLabel>
								<Input id="edit-billing-city" defaultValue="Center Line" autoComplete="address-level2" />
							</Field>
							<Field className="col-span-4">
								<FieldLabel htmlFor="edit-billing-state">State</FieldLabel>
								<Input id="edit-billing-state" defaultValue="Michigan" autoComplete="address-level1" />
							</Field>
							<Field className="col-span-3">
								<FieldLabel htmlFor="edit-billing-zip">ZIP</FieldLabel>
								<Input id="edit-billing-zip" defaultValue="48015" autoComplete="postal-code" />
							</Field>
							<Field className="col-span-12">
								<FieldLabel htmlFor="edit-tax-id">Tax ID</FieldLabel>
								<Input id="edit-tax-id" defaultValue={BILLING_ACCOUNT.taxId} />
							</Field>
						</div>
					</div>
				</ScrollArea>

				<DialogFoot>
					<DialogClose asChild>
						<button type="button" className="mr-auto px-1 text-red-400 hover:underline">
							Remove card
						</button>
					</DialogClose>
					<DismissButton />
					<DialogClose asChild>
						<Button>Save changes</Button>
					</DialogClose>
				</DialogFoot>
			</DialogContent>
		</Dialog>
	);
}
