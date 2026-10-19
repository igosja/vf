import { Info, LogOut } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CHURN_REASONS } from "@/data/saas";

export function ChurnReasons() {
	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-red-400/15 text-red-400 sm:grid">
						<LogOut />
					</span>
					Churn Reasons
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-6 flex items-center gap-3 rounded-xl bg-muted p-4 leading-none">
				<div className="flex-1">
					<div className="mb-2 text-sm text-muted-foreground">Churned this month</div>
					<div className="text-lg leading-none text-emphasis-foreground">68 accounts</div>
				</div>
				<div className="text-right">
					<div className="mb-2 text-sm text-muted-foreground">Lost MRR</div>
					<div className="text-lg leading-none text-red-400">-$3.1K</div>
				</div>
			</div>

			{CHURN_REASONS.map((item) => (
				<div key={item.reason} className="mb-5 last:mb-0">
					<div className="mb-2.5 flex items-center">
						<div className="flex-1 text-emphasis-foreground">{item.reason}</div>
						<div className="text-base text-emphasis-foreground">{item.percentage}%</div>
					</div>
					<Progress value={item.percentage} aria-label={item.reason} className={item.color} />
				</div>
			))}
		</Card>
	);
}
