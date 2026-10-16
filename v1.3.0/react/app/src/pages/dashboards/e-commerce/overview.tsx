import { CircleArrowDown, CircleArrowUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Overview() {
	return (
		<div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<Card className="p-5 leading-none font-medium text-emphasis-foreground">
				<div className="flex items-start">
					<div className="mr-2 flex-1 text-lg leading-none text-sky-500">43283</div>
					<Badge variant="positive">
						<CircleArrowUp />
						2.23%
					</Badge>
				</div>
				Orders Completed
			</Card>

			<Card className="p-5 leading-none font-medium text-emphasis-foreground">
				<div className="flex items-start">
					<div className="mr-2 flex-1 text-lg leading-none text-emerald-500">$324,091</div>
					<Badge variant="positive">
						<CircleArrowUp />
						3.47%
					</Badge>
				</div>
				Total in Revenue
			</Card>

			<Card className="p-5 leading-none font-medium text-emphasis-foreground">
				<div className="flex items-start">
					<div className="mr-2 flex-1 text-lg leading-none text-amber-500">4532</div>
					<Badge variant="positive">
						<CircleArrowUp />
						5.32%
					</Badge>
				</div>
				Completed Purchases
			</Card>

			<Card className="p-5 leading-none font-medium text-emphasis-foreground">
				<div className="flex items-start">
					<div className="mr-2 flex-1 text-lg leading-none text-red-400">2091</div>
					<Badge variant="destructive">
						<CircleArrowDown />
						0.98%
					</Badge>
				</div>
				Return Requests
			</Card>
		</div>
	);
}
