import { AppWindow, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { TOP_PRODUCTS } from "@/data/e-commerce";

export function TopProducts() {
	return (
		<Card>
			<CardHeader className="mb-2">
				<CardTitle>Top Products</CardTitle>
				<Trend positive={false} className="hidden sm:flex">
					8.07%
				</Trend>
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

			<div className="-mb-3">
				{TOP_PRODUCTS.map((item) => (
					<a key={item.name} href="#" className="-mx-3 flex items-start rounded-lg p-3 text-foreground hover:bg-accent">
						<img alt="" src={item.image} className="mr-4 size-12 shrink-0 rounded-lg object-cover md:w-20" />
						<div className="min-w-0 flex-1 pr-5">
							<div className="mb-1 truncate text-emphasis-foreground">{item.name}</div>
							<div className="text-sm text-muted-foreground">{item.orders} items sold</div>
						</div>
						<Trend up={item.up} className="ml-auto w-16 justify-end">
							{item.percentage}%
						</Trend>
					</a>
				))}
			</div>
		</Card>
	);
}
