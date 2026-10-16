import { AppWindow, Info, UserPlus } from "lucide-react";
import type { ComponentProps } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RECENT_SUBSCRIPTIONS, type Subscription } from "@/data/saas";

const STATUS_VARIANT: Record<Subscription["status"], ComponentProps<typeof Badge>["variant"]> = {
	Active: "positive",
	Trial: "default",
	"Past due": "caution",
	Canceled: "destructive",
};

export function RecentSubscriptions() {
	return (
		<Card>
			<CardHeader className="mb-3">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
						<UserPlus />
					</span>
					Recent Subscriptions
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton>
						<AppWindow />
						<span className="sr-only">Open</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="-mx-2 -mb-2">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="font-normal">Customer</TableHead>
							<TableHead className="font-normal">Plan</TableHead>
							<TableHead className="font-normal">Billing</TableHead>
							<TableHead className="font-normal">Status</TableHead>
							<TableHead className="text-right font-normal">MRR</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{RECENT_SUBSCRIPTIONS.map((item) => (
							<TableRow key={item.name}>
								<TableCell className="py-3">
									<div className="flex items-center gap-3">
										<img className="avatar-mask size-9" src={item.avatar} alt="" />
										<div className="leading-tight">
											<div className="mb-0.5 text-emphasis-foreground">{item.name}</div>
											<div className="text-xs text-muted-foreground">{item.company}</div>
										</div>
									</div>
								</TableCell>
								<TableCell>{item.plan}</TableCell>
								<TableCell>{item.billing}</TableCell>
								<TableCell>
									<Badge variant={STATUS_VARIANT[item.status]}>{item.status}</Badge>
								</TableCell>
								<TableCell className="text-right text-emphasis-foreground">${item.mrr.toLocaleString()}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Card>
	);
}
