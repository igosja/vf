import { CalendarDays, CircleAlert, Receipt, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PLAN_USAGE } from "@/data/billing";
import { Link } from "@/lib/router";
import { cn } from "@/lib/utils";

import { CancelDialog } from "./cancel-dialog";
import { YearlyDialog } from "./yearly-dialog";

export function Plan() {
	return (
		<Card className="lg:col-span-2">
			<div className="mb-6 flex flex-wrap items-start gap-4 border-b pb-4">
				<div className="flex-1">
					<div className="flex items-center gap-2">
						<CardTitle className="mt-0 flex-none">Pro Plan</CardTitle>
						<Badge className="bg-emerald-500 text-white dark:text-black">Monthly</Badge>
					</div>
					<div className="pt-1 text-muted-foreground">
						Renews on <span className="text-emphasis-foreground">November 12, 2026</span>
					</div>
				</div>

				<div className="text-right">
					<span className="text-2xl font-medium text-emphasis-foreground">$49</span>
					<span className="text-muted-foreground"> / month</span>
				</div>
			</div>

			<div className="mb-6 grid gap-5 sm:grid-cols-3">
				{PLAN_USAGE.map((item) => (
					<div key={item.label}>
						<div className="mb-2 flex justify-between">
							<span className="text-emphasis-foreground">{item.label}</span>
							<span className="text-muted-foreground">{item.used}</span>
						</div>
						<Progress value={item.value} aria-label={`${item.label} used`} className={cn("h-1.5", item.color)} />
					</div>
				))}
			</div>

			<div className="mb-6 grid gap-3 sm:grid-cols-3">
				<div className="flex items-center gap-3 rounded-xl border p-4">
					<span className="grid avatar-mask size-9 place-items-center bg-current/15 text-sky-500">
						<CalendarDays className="size-5" />
					</span>
					<div className="leading-tight">
						<div className="mb-1 text-xs text-muted-foreground">Next invoice</div>
						<div className="font-medium text-emphasis-foreground">
							$49.00 <span className="text-xs font-normal text-muted-foreground">on Nov 12</span>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded-xl border p-4">
					<span className="grid avatar-mask size-9 place-items-center bg-current/15 text-emerald-500">
						<Receipt className="size-5" />
					</span>
					<div className="leading-tight">
						<div className="mb-1 text-xs text-muted-foreground">Spent this year</div>
						<div className="font-medium text-emphasis-foreground">
							$410.50 <span className="text-xs font-normal text-muted-foreground">10 invoices</span>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded-xl border p-4">
					<span className="grid avatar-mask size-9 place-items-center bg-current/15 text-cyan-500">
						<Wallet className="size-5" />
					</span>
					<div className="leading-tight">
						<div className="mb-1 text-xs text-muted-foreground">Account credit</div>
						<div className="font-medium text-emphasis-foreground">
							$12.00 <span className="text-xs font-normal text-muted-foreground">auto-applied</span>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-6 flex items-center gap-3 rounded-xl bg-amber-400/15 p-4 text-emphasis-foreground">
				<CircleAlert className="size-5 text-amber-500" />
				<span className="flex-1">You've used 92% of your API requests this cycle. Upgrade to avoid throttling.</span>
			</div>

			<div className="mt-auto flex flex-wrap items-center justify-center gap-2">
				<Button asChild>
					<Link to="/pages/pricing-tables" className="text-primary-foreground">
						Change Plan
					</Link>
				</Button>
				<YearlyDialog>
					<Button variant="theme">Switch to yearly · save 20%</Button>
				</YearlyDialog>
				<CancelDialog>
					<button type="button" className="mt-2 text-muted-foreground transition-colors hover:text-foreground md:mt-0 md:ml-auto">
						Cancel subscription
					</button>
				</CancelDialog>
			</div>
		</Card>
	);
}
