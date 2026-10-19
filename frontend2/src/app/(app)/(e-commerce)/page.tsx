"use client";

import { CirclePlus, Grid2x2, Info } from "lucide-react";

import { DateRangePicker } from "@/components/common/date-range-picker";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

import { Overview } from "./overview";
import { RecentOrders } from "./recent-orders";
import { SalesHistory } from "./sales-history";
import { StoreSessions } from "./store-sessions";
import { TopProducts } from "./top-products";

export default function ECommerce() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="E-Commerce">
				<DateRangePicker className="ml-auto hidden md:flex" defaultValue={{ from: new Date(2023, 6, 10), to: new Date(2023, 6, 13) }} />

				<div className="ml-auto flex gap-1.5 md:ml-4">
					<IconButton>
						<CirclePlus />
						<span className="sr-only">Add</span>
					</IconButton>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton>
						<Grid2x2 />
						<span className="sr-only">Customize</span>
					</IconButton>
				</div>
			</ContentHeader>

			<Overview />

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<SalesHistory />
				<StoreSessions />
				<RecentOrders />
				<TopProducts />
			</div>
		</div>
	);
}
