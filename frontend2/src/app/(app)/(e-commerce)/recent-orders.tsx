import { AppWindow, Info } from "lucide-react";
import type { ComponentProps } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { RECENT_ORDERS, type RecentOrder } from "@/data/e-commerce";

type BadgeVariant = ComponentProps<typeof Badge>["variant"];

const STATUS_VARIANT: Record<RecentOrder["status"], BadgeVariant> = {
	Paid: "positive",
	Failed: "destructive",
	Pending: "caution",
};

const FULFILLMENT_VARIANT: Record<RecentOrder["fulfillment"], BadgeVariant> = {
	Fulfilled: "positive",
	Unfulfilled: "caution",
};

export function RecentOrders() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle>Recent Orders</CardTitle>
				<Trend className="hidden sm:flex">24.99%</Trend>
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

			<div className="flex h-10 items-center justify-between border-b text-sm text-muted-foreground">
				<div className="w-20 shrink-0">Order No.</div>
				<div className="hidden w-20 shrink-0 sm:block">Date</div>
				<div className="w-16 shrink-0">Status</div>
				<div className="hidden w-16 shrink-0 2xl:block">Delivery</div>
				<div className="w-20 shrink-0">Amount</div>
			</div>

			<div className="-mb-4">
				{RECENT_ORDERS.map((item) => (
					<div key={item.order} className="flex h-12 items-center justify-between border-b text-emphasis-foreground last:border-b-0">
						<div className="w-20 shrink-0">#{item.order}</div>
						<div className="hidden w-20 shrink-0 sm:block">{item.date}</div>
						<div className="w-16 shrink-0">
							<Badge variant={STATUS_VARIANT[item.status]}>{item.status}</Badge>
						</div>
						<div className="hidden w-16 shrink-0 2xl:block">
							<Badge variant={FULFILLMENT_VARIANT[item.fulfillment]}>{item.fulfillment}</Badge>
						</div>
						<div className="w-20 shrink-0">{item.total}</div>
					</div>
				))}
			</div>
		</Card>
	);
}
