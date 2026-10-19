"use client";

import { Download, Grid2x2, Info } from "lucide-react";

import { DateRangePicker } from "@/components/common/date-range-picker";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

import { ChurnReasons } from "./churn-reasons";
import { CohortRetention } from "./cohort-retention";
import { MrrMovement } from "./mrr-movement";
import { Overview } from "./overview";
import { PlanMix } from "./plan-mix";
import { ProductEngagement } from "./product-engagement";
import { RecentSubscriptions } from "./recent-subscriptions";
import { TrialFunnel } from "./trial-funnel";
import { UnitEconomics } from "./unit-economics";

export default function Saas() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="SaaS Dashboard">
				<DateRangePicker className="ml-auto hidden md:flex" defaultValue={{ from: new Date(2025, 10, 1), to: new Date(2026, 9, 31) }} />

				<div className="ml-auto flex gap-1.5 md:ml-4">
					<IconButton>
						<Download />
						<span className="sr-only">Download</span>
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

			<div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
				<div className="flex min-w-0 flex-col gap-4 xl:col-span-2">
					<MrrMovement />
					<ProductEngagement />
					<CohortRetention />
					<RecentSubscriptions />
				</div>

				<div className="flex min-w-0 flex-col gap-4">
					<PlanMix />
					<TrialFunnel />
					<UnitEconomics />
					<ChurnReasons />
				</div>
			</div>
		</div>
	);
}
