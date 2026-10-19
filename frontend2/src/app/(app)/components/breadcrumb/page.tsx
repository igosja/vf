"use client";

import { ChevronDown, Dot } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@/lib/router";

export default function BreadcrumbPageExamples() {
	return (
		<>
			<ContentHeader title="Breadcrumb" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Basic" description="Links to each level, ending on the current page.">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ExampleCard>

				<ExampleCard title="Custom separator" description="Pass your own icon to BreadcrumbSeparator.">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<Dot />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<Dot />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ExampleCard>

				<ExampleCard title="Dropdown" description="An item can open a dropdown menu of its siblings.">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<Dot />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<DropdownMenu>
									<DropdownMenuTrigger className="flex items-center gap-1 hover:text-emphasis-foreground">
										Components
										<ChevronDown className="size-3.5" />
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start">
										<DropdownMenuGroup>
											<DropdownMenuItem>Documentation</DropdownMenuItem>
											<DropdownMenuItem>Themes</DropdownMenuItem>
											<DropdownMenuItem>GitHub</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<Dot />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ExampleCard>

				<ExampleCard title="Collapsed" description="BreadcrumbEllipsis stands in for the levels in between on a long path.">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbEllipsis />
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ExampleCard>

				<ExampleCard title="Link component" description="With asChild, the router's Link renders each level.">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/">Home</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/components/accordion">Components</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ExampleCard>
			</div>
		</>
	);
}
