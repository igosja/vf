"use client";

import { ExampleCard, ExampleSection } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { INVOICES, PEOPLE } from "@/data/tables";
import { cn } from "@/lib/utils";

/**
 * The three-person table each sample restyles. `row` and `cell` style every
 * body row and cell; `head` styles the header cells; `active` marks one row.
 */
function PeopleTable({ className, row, cell, head, active }: { className?: string; row?: string; cell?: string; head?: string; active?: number }) {
	return (
		<Table className={className}>
			<TableHeader>
				<TableRow>
					<TableHead className={head}>#</TableHead>
					<TableHead className={head}>First</TableHead>
					<TableHead className={head}>Last</TableHead>
					<TableHead className={head}>Handle</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{PEOPLE.map((person, index) => (
					<TableRow key={person.handle} data-state={active === index ? "selected" : undefined} className={row}>
						<TableCell className={cn("font-medium text-emphasis-foreground", cell)}>{index + 1}</TableCell>
						<TableCell className={cell}>{person.first}</TableCell>
						<TableCell className={cell}>{person.last}</TableCell>
						<TableCell className={cell}>{person.handle}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

const usd = (amount: number) => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

export default function Tables() {
	return (
		<>
			<ContentHeader title="Tables" breadcrumb={["Miscellaneous", "Content"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<ExampleCard
					title="Basic example"
					description={
						<>
							The <code>Table</code> component with its header, body, row, head and cell parts, unstyled beyond the defaults.
						</>
					}
				>
					<PeopleTable cell="py-3" />
				</ExampleCard>

				<ExampleCard title="Accented tables">
					<ExampleSection
						title="Striped rows"
						className="mt-0"
						description={
							<>
								Fill every other body row with <code>odd:bg-muted</code>.
							</>
						}
					>
						<PeopleTable row="border-0 odd:bg-muted" cell="py-3" />
					</ExampleSection>

					<ExampleSection
						title="Striped columns"
						description={
							<>
								Fill every other column with <code>even:bg-muted</code> on the cells.
							</>
						}
					>
						<PeopleTable cell="py-3 even:bg-muted" />
					</ExampleSection>

					<ExampleSection
						title="Hoverable rows"
						description={
							<>
								Give the body rows a hover fill with <code>hover:bg-accent</code>.
							</>
						}
					>
						<PeopleTable row="transition-colors hover:bg-accent" cell="py-3" />
					</ExampleSection>

					<ExampleSection
						title="Active rows"
						description={
							<>
								Mark a row with <code>data-state="selected"</code> to highlight it.
							</>
						}
					>
						<PeopleTable active={1} cell="py-3" />
					</ExampleSection>
				</ExampleCard>

				<ExampleCard title="Table borders">
					<ExampleSection title="Bordered tables" className="mt-0" description="Put a border on every side of the table and its cells.">
						<PeopleTable className="border" head="border" cell="border py-3" />
					</ExampleSection>

					<ExampleSection
						title="Borderless tables"
						description={
							<>
								Take the row borders off with <code>border-0</code>.
							</>
						}
					>
						<PeopleTable row="border-0" cell="py-3" />
					</ExampleSection>
				</ExampleCard>

				<ExampleCard title="Small tables" description="Halve the cell padding for a more compact table.">
					<PeopleTable head="h-8" cell="py-1" />
				</ExampleCard>

				<ExampleCard
					title="Caption and footer"
					description={
						<>
							<code>TableCaption</code> describes the table under it, and <code>TableFooter</code> holds the totals.
						</>
					}
				>
					<Table>
						<TableCaption>A list of your recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead>Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{INVOICES.map((item) => (
								<TableRow key={item.invoice}>
									<TableCell className="py-3 font-medium text-emphasis-foreground">{item.invoice}</TableCell>
									<TableCell>{item.status}</TableCell>
									<TableCell>{item.method}</TableCell>
									<TableCell className="text-right">{usd(item.amount)}</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3} className="py-3 text-emphasis-foreground">
									Total
								</TableCell>
								<TableCell className="text-right text-emphasis-foreground">
									{usd(INVOICES.reduce((sum, item) => sum + item.amount, 0))}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</ExampleCard>

				<ExampleCard
					title="Responsive tables"
					description="The table scrolls sideways inside its container when it is wider than the card, at every screen size."
				>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>#</TableHead>
								{Array.from({ length: 9 }, (_, index) => (
									<TableHead key={index}>Heading</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{[1, 2, 3].map((row) => (
								<TableRow key={row}>
									<TableCell className="py-3 font-medium text-emphasis-foreground">{row}</TableCell>
									{Array.from({ length: 9 }, (_, index) => (
										<TableCell key={index} className="min-w-32">
											Cell
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</ExampleCard>
			</div>
		</>
	);
}
