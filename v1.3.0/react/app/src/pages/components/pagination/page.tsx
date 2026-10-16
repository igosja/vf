import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PaginationPage() {
	return (
		<>
			<ContentHeader title="Pagination" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="Previous and next, the pages around the current one, and an ellipsis for the rest.">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</ExampleCard>

				<ExampleCard title="Simple" description="Page numbers only.">
					<Pagination>
						<PaginationContent>
							{[1, 2, 3, 4, 5].map((page) => (
								<PaginationItem key={page}>
									<PaginationLink href="#" isActive={page === 2}>
										{page}
									</PaginationLink>
								</PaginationItem>
							))}
						</PaginationContent>
					</Pagination>
				</ExampleCard>

				<ExampleCard title="Icons only" description="Previous and next beside a rows per page picker, as under a table.">
					<div className="flex items-center justify-between gap-4">
						<Field orientation="horizontal" className="w-fit">
							<FieldLabel htmlFor="rows-per-page">Rows per page</FieldLabel>
							<Select defaultValue="25">
								<SelectTrigger id="rows-per-page" className="w-24">
									<SelectValue />
								</SelectTrigger>
								<SelectContent align="start">
									<SelectGroup>
										{["10", "25", "50", "100"].map((rows) => (
											<SelectItem key={rows} value={rows}>
												{rows}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href="#" />
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href="#" />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</ExampleCard>
			</div>
		</>
	);
}
