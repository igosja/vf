import { Calculator, CalendarDays, ChartPie, CircleDollarSign, Heart, Info, Percent, Timer } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export function UnitEconomics() {
	return (
		<Card>
			<CardHeader className="mb-3">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
						<Calculator />
					</span>
					Unit Economics
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="-mb-2">
				<div className="flex items-start gap-3 border-b py-3.5">
					<Heart className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">Customer lifetime value</div>
					<Trend iconEnd className="hidden sm:flex">
						8.2%
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">$1,840</div>
				</div>

				<div className="flex items-start gap-3 border-b py-3.5">
					<CircleDollarSign className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">Customer acquisition cost</div>
					<Trend up={false} iconEnd className="hidden sm:flex">
						3.5%
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">$412</div>
				</div>

				<div className="flex items-start gap-3 border-b py-3.5">
					<Percent className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">LTV : CAC ratio</div>
					<Trend iconEnd className="hidden sm:flex">
						0.4x
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">4.5x</div>
				</div>

				<div className="flex items-start gap-3 border-b py-3.5">
					<CalendarDays className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">CAC payback period</div>
					<Trend up={false} iconEnd className="hidden sm:flex">
						0.8 mo
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">6.2 mo</div>
				</div>

				<div className="flex items-start gap-3 border-b py-3.5">
					<Timer className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">Net revenue retention</div>
					<Trend iconEnd className="hidden sm:flex">
						2.1%
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">112%</div>
				</div>

				<div className="flex items-start gap-3 py-3.5">
					<ChartPie className="mt-0.5" />
					<div className="flex-1 text-emphasis-foreground">SaaS quick ratio</div>
					<Trend iconEnd className="hidden sm:flex">
						0.3
					</Trend>
					<div className="w-16 text-right text-base text-emphasis-foreground">3.8</div>
				</div>
			</div>
		</Card>
	);
}
