import { Download } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BILLING_ACCOUNT, BILLING_HISTORY, type InvoiceStatus } from "@/data/billing";

const STATUS_VARIANT: Record<InvoiceStatus, ComponentProps<typeof Badge>["variant"]> = {
	Paid: "positive",
	Pending: "caution",
	Failed: "destructive",
};

const usd = (amount: number) => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

/**
 * The invoices, filtered by status. Export prints the filtered list: the
 * filters and buttons drop out and an account header and a total take their place.
 */
export function History() {
	const [status, setStatus] = useState<InvoiceStatus | "all">("all");

	const invoices = BILLING_HISTORY.filter((item) => status === "all" || item.status === status);
	const total = invoices.reduce((sum, item) => sum + item.amount, 0);

	return (
		<Card className="print:bg-transparent print:p-0">
			<div className="hidden print:block">
				<div className="mb-8 flex items-start justify-between">
					<div className="grid h-12 w-32 place-content-center rounded-sm border-2 border-current text-base">Company Logo</div>
					<div className="text-right">
						<div className="mb-1 text-xl text-emphasis-foreground">Billing History</div>
						<div className="text-muted-foreground">{status === "all" ? "All invoices" : `${status} invoices`}</div>
					</div>
				</div>

				<div className="mb-5 flex items-start border-b border-input/50 pb-5">
					<div className="flex-1">
						<div className="mb-2 text-xs text-muted-foreground uppercase">Account</div>
						<address className="not-italic">
							<span className="mb-1 block text-emphasis-foreground">{BILLING_ACCOUNT.company}</span>
							{BILLING_ACCOUNT.address}
							<br />
							{BILLING_ACCOUNT.email}
							<br />
							{BILLING_ACCOUNT.taxId}
						</address>
					</div>
					<div className="flex-1 text-right">
						<div className="mb-2 text-xs text-muted-foreground uppercase">Subscription</div>
						<div className="mb-1 text-emphasis-foreground">Pro Plan · Monthly</div>
						<div>Visa ending in {BILLING_ACCOUNT.card}</div>
						<div>Generated on {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
					</div>
				</div>
			</div>

			<div className="mb-4 flex flex-wrap items-start gap-x-6 gap-y-4 print:hidden">
				<CardTitle className="mt-0 basis-full md:basis-auto">Billing History</CardTitle>

				<Tabs value={status} onValueChange={(value) => setStatus(value as InvoiceStatus | "all")} className="-mx-6 min-w-0 px-4 md:mx-0 md:px-0">
					<TabsList>
						<TabsTrigger value="all">All Invoices</TabsTrigger>
						<TabsTrigger value="Paid">Paid</TabsTrigger>
						<TabsTrigger value="Pending">Pending</TabsTrigger>
						<TabsTrigger value="Failed">Failed</TabsTrigger>
					</TabsList>
				</Tabs>

				<i className="-mr-5 hidden h-7 w-px bg-muted md:block" />

				<Button variant="theme" className="hidden md:inline-flex" onClick={() => window.print()}>
					<Download />
					Export
				</Button>
			</div>

			<div className="-mx-2 -mb-2 print:mx-0">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="font-normal">Invoice</TableHead>
							<TableHead className="font-normal">Date</TableHead>
							<TableHead className="font-normal">Description</TableHead>
							<TableHead className="font-normal">Status</TableHead>
							<TableHead className="text-right font-normal">Amount</TableHead>
							<TableHead className="print:hidden">
								<span className="sr-only">Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{invoices.map((item) => (
							<TableRow key={item.id}>
								<TableCell className="py-3">
									<Link to="/pages/invoice" className="font-medium text-emphasis-foreground">
										{item.id}
									</Link>
								</TableCell>
								<TableCell>{item.date}</TableCell>
								<TableCell>{item.description}</TableCell>
								<TableCell>
									<Badge variant={STATUS_VARIANT[item.status]}>{item.status}</Badge>
								</TableCell>
								<TableCell className="text-right text-emphasis-foreground">{usd(item.amount)}</TableCell>
								<TableCell className="w-px py-0 text-right print:hidden">
									<Link
										to="/pages/invoice"
										className="ml-auto grid avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-accent"
									>
										<Download />
										<span className="sr-only">Download {item.id}</span>
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				<div className="hidden justify-between pt-2 text-emphasis-foreground print:flex">
					<span>{invoices.length} invoices</span>
					<span className="text-lg">{usd(total)}</span>
				</div>
			</div>
		</Card>
	);
}
