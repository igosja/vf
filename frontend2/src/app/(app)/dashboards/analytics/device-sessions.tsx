import { Info, Laptop, MonitorSmartphone, Smartphone, Tablet } from "lucide-react";

import { ChartLegend } from "@/components/charts/chart-legend";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { DEVICE_SESSIONS } from "@/data/analytics";
import { cn } from "@/lib/utils";

const DEVICE_ICON = { Desktop: Laptop, Mobile: Smartphone, Tablet: Tablet };

export function DeviceSessions() {
	return (
		<Card>
			<CardHeader className="mb-8">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
						<MonitorSmartphone />
					</span>
					Device Sessions
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			{DEVICE_SESSIONS.map((item) => {
				const Icon = DEVICE_ICON[item.device];
				return (
					<div key={item.device} className={cn("mb-5 flex items-center rounded-lg bg-current/20 py-1", item.color)}>
						<Icon className="mx-3" />
						<div className="flex flex-1 items-center text-xs">
							<div className="flex h-8 items-center justify-end rounded-sm bg-current" style={{ width: `${item.percentage}%` }}>
								{item.percentage > 10 && <span className="px-2 text-white dark:text-black">{item.percentage}%</span>}
							</div>
							{item.percentage <= 10 && <span className="px-2">{item.percentage}%</span>}
						</div>
						<div className="ml-auto w-14 pr-3 text-right">{item.sessions}</div>
					</div>
				);
			})}

			<ChartLegend
				items={[
					{ label: "Desktop", color: "bg-cyan-500" },
					{ label: "Mobile", color: "bg-purple-400" },
					{ label: "Tablet", color: "bg-amber-400" },
				]}
			/>
		</Card>
	);
}
