import { Funnel, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { TRIAL_FUNNEL } from "@/data/saas";

const TOP = TRIAL_FUNNEL[0].count;

export function TrialFunnel() {
	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
						<Funnel />
					</span>
					Trial Funnel
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-6">
				{TRIAL_FUNNEL.map((item, i) => (
					<div key={item.step} className="mb-5 last:mb-0">
						<div className="mb-2 flex items-center gap-2">
							<item.icon />
							<div className="flex-1 text-emphasis-foreground">{item.step}</div>
							{i > 0 && <span className="text-xs text-muted-foreground">{((item.count / TRIAL_FUNNEL[i - 1].count) * 100).toFixed(1)}%</span>}
							<div className="w-16 text-right text-base text-emphasis-foreground">{item.count.toLocaleString()}</div>
						</div>
						<div className="rounded-full bg-muted">
							<div className="h-2 rounded-full bg-cyan-500" style={{ width: `${Math.max(8, Math.round((item.count / TOP) * 100))}%` }} />
						</div>
					</div>
				))}
			</div>

			<div className="flex items-center gap-3 rounded-xl bg-muted p-4 leading-none">
				<div className="flex-1">
					<div className="mb-2 text-sm text-muted-foreground">Visitor to paid</div>
					<div className="text-lg leading-none text-emphasis-foreground">1.9%</div>
				</div>
				<div className="text-right">
					<div className="mb-2 text-sm text-muted-foreground">Trial to paid</div>
					<div className="text-lg leading-none text-emerald-500">28.4%</div>
				</div>
			</div>
		</Card>
	);
}
