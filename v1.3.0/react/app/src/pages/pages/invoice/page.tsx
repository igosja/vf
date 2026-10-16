import { Info, PencilLine, Printer } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { INVOICE, type InvoiceParty } from "@/data/invoice";
import { cn } from "@/lib/utils";

function Party({ label, party, className }: { label: string; party: InvoiceParty; className?: string }) {
	return (
		<div className={cn("flex-1", className)}>
			<div className="mb-2 text-xs text-muted-foreground uppercase">{label}</div>
			<address className="not-italic">
				<span className="mb-1 block text-emphasis-foreground">{party.name}</span>
				{party.address}
				<br />
				{party.phone}
				<br />
				{party.email}
			</address>
		</div>
	);
}

export default function Invoice() {
	return (
		<div className="mx-auto w-full max-w-250 pb-4">
			<ContentHeader title="Invoice">
				<div className="ml-auto flex items-center gap-1.5">
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<Button variant="ghost" size="sm" className="rounded-lg px-2.5 text-emphasis-foreground">
						<PencilLine />
						Edit
					</Button>
				</div>
			</ContentHeader>

			<Card className="p-8 print:p-0">
				<div className="mb-8 grid h-12 w-32 place-content-center rounded-sm border-2 border-current text-base">Company Logo</div>

				<div className="mb-5 flex items-start border-b border-input/50 pb-5">
					<Party label="Bill to" party={INVOICE.billTo} />
					<Party label="Bill from" party={INVOICE.billFrom} className="text-right" />
				</div>

				<div className="mb-10 flex items-center border-b border-input/50 pb-5 text-emphasis-foreground">
					<div className="flex-1">
						<div className="mb-1">
							<span className="inline-block w-20">Invoice:</span> {INVOICE.number}
						</div>
						<div>
							<span className="inline-block w-20">Date:</span> {INVOICE.date}
						</div>
					</div>
					<div className="text-lg">{INVOICE.total}</div>
				</div>

				<Table className="mb-12">
					<TableHeader>
						<TableRow>
							<TableHead className="font-normal uppercase">Description</TableHead>
							<TableHead className="text-right font-normal uppercase">Qty</TableHead>
							<TableHead className="text-right font-normal uppercase">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{INVOICE.lines.map((line) => (
							<TableRow key={line.description}>
								<TableCell className="py-3">{line.description}</TableCell>
								<TableCell className="text-right">{line.quantity}</TableCell>
								<TableCell className="text-right">{line.amount}</TableCell>
							</TableRow>
						))}
						{INVOICE.summary.map((row) => (
							<TableRow key={row.label}>
								<TableCell />
								<TableCell className="py-3 text-right">{row.label}</TableCell>
								<TableCell className="text-right">{row.amount}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell />
							<TableCell className="py-3 text-right font-medium text-emphasis-foreground">Total</TableCell>
							<TableCell className="text-right font-medium text-emphasis-foreground">{INVOICE.total}</TableCell>
						</TableRow>
					</TableBody>
				</Table>

				<div className="mb-3 text-emphasis-foreground">Terms & Conditions</div>
				<p>{INVOICE.terms}</p>
			</Card>

			<ActionButton floating className="xl:inline-flex" onClick={() => window.print()}>
				<Printer />
				<span className="hidden md:inline">Print Invoice</span>
			</ActionButton>
		</div>
	);
}
