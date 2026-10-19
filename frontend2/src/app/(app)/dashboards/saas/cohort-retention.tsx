import { Grid3x3, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { COHORT_RETENTION } from "@/data/saas";
import { cn } from "@/lib/utils";

const MONTHS = 6;

/** Maps 65 to 100% retention onto the strength of the teal fill. */
const strength = (value: number) => Math.max(0.12, (value - 65) / 35);

export function CohortRetention() {
	return (
		<Card>
			<CardHeader className="mb-2">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-teal-500/15 text-teal-500 sm:grid">
						<Grid3x3 />
					</span>
					Cohort Retention
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<Table>
				<TableHeader className="[&_tr]:border-0">
					<TableRow>
						<TableHead className="pl-0 font-normal">Cohort</TableHead>
						<TableHead className="pr-4 text-right font-normal">Customers</TableHead>
						{Array.from({ length: MONTHS }, (_, i) => (
							<TableHead key={i} className="text-center font-normal">
								M{i}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{COHORT_RETENTION.map((item) => (
						<TableRow key={item.cohort} className="border-0">
							<TableCell className="pl-0 text-emphasis-foreground">{item.cohort}</TableCell>
							<TableCell className="pr-4 text-right text-muted-foreground">{item.customers}</TableCell>
							{Array.from({ length: MONTHS }, (_, i) => {
								const value = item.retention[i];
								return (
									<TableCell key={i} className="p-1">
										{value === undefined ? (
											<div className="h-10 rounded-lg bg-muted" />
										) : (
											<div
												className={cn(
													"h-10 rounded-lg p-2.5 text-center",
													strength(value) > 0.6 ? "text-white" : "text-emphasis-foreground"
												)}
												style={{
													backgroundColor: `color-mix(in oklab, var(--color-teal-500) ${Math.round(strength(value) * 100)}%, transparent)`,
												}}
											>
												{value}%
											</div>
										)}
									</TableCell>
								);
							})}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
