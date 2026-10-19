import { AppWindow, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BROWSER_BOUNCE_RATE } from "@/data/analytics";
import { cn } from "@/lib/utils";

export function BrowserBounceRate() {
	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-red-400/15 text-red-400 sm:grid">
						<AppWindow />
					</span>
					Browser Bounce Rate
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			{BROWSER_BOUNCE_RATE.map((item) => (
				<div key={item.browser} className="flex flex-wrap items-center">
					<img className="mr-4 size-5" src={item.icon} alt="" />
					<div className="flex-1">{item.browser}</div>
					<div className="w-16 text-right text-base font-medium">{item.rate}</div>
					<Trend up={item.up} iconEnd className="ml-4 hidden w-14 justify-end sm:flex">
						{item.percentage}
					</Trend>
					<Progress value={item.percentage} aria-label={item.browser} className={cn("my-3 h-0.5", item.color)} />
				</div>
			))}
		</Card>
	);
}
