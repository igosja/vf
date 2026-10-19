"use client";

import { Printer, RotateCw, Settings } from "lucide-react";

import { DateRangePicker } from "@/components/common/date-range-picker";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

import { ActiveUsers } from "./active-users";
import { AverageVisitDuration } from "./average-visit-duration";
import { BrowserBounceRate } from "./browser-bounce-rate";
import { DeviceSessions } from "./device-sessions";
import { Engagements } from "./engagements";
import { SessionsByCountry } from "./sessions-by-country";
import { UserAcquisition } from "./user-acquisition";
import { VisitsBySource } from "./visits-by-source";

export default function Analytics() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Website Analytics">
				<DateRangePicker className="ml-auto hidden md:flex" defaultValue={{ from: new Date(2023, 6, 10), to: new Date(2023, 6, 13) }} />

				<div className="ml-auto flex gap-1.5 md:ml-4">
					<IconButton>
						<RotateCw />
						<span className="sr-only">Refresh</span>
					</IconButton>
					<IconButton>
						<Printer />
						<span className="sr-only">Print</span>
					</IconButton>
					<IconButton>
						<Settings />
						<span className="sr-only">Settings</span>
					</IconButton>
				</div>
			</ContentHeader>

			<div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UserAcquisition />
				<ActiveUsers />
			</div>

			<div className="columns-1 gap-4 *:mb-4 *:break-inside-avoid lg:columns-2 2xl:columns-3">
				<SessionsByCountry />
				<DeviceSessions />
				<AverageVisitDuration />
				<BrowserBounceRate />
				<Engagements />
				<VisitsBySource />
			</div>
		</div>
	);
}
