import { CircleArrowDown, CircleArrowUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EMAIL_STATS } from "@/data/email-marketing";
import { cn } from "@/lib/utils";

export function Overview() {
	return (
		<div className="mb-4 grid grid-cols-1 gap-4 leading-none sm:grid-cols-2 lg:grid-cols-4">
			{EMAIL_STATS.map((item) => (
				<Card key={item.label} className="flex-row gap-4 p-5">
					<span className={cn("hidden avatar-mask size-10.5 shrink-0 place-items-center bg-current/15 sm:grid", item.color)}>
						<item.icon className="size-5.5" />
					</span>
					<div className="flex-1 text-emphasis-foreground">
						<div className="mb-1 flex items-center">
							<div className={cn("mr-2 mb-1 text-lg leading-none font-medium", item.color)}>{item.value}</div>
							<Badge variant={item.up ? "positive" : "destructive"} className="-mt-1 ml-auto">
								{item.up ? <CircleArrowUp /> : <CircleArrowDown />}
								{item.change}%
							</Badge>
						</div>
						{item.label}
						{item.progress !== undefined && <Progress value={item.progress} aria-label={item.label} className={cn("mt-3", item.color)} />}
					</div>
				</Card>
			))}
		</div>
	);
}
