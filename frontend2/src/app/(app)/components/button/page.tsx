"use client";

import {
	Archive,
	ArrowLeft,
	ArrowUp,
	CalendarPlus,
	CircleFadingArrowUp,
	Clock,
	GitBranch,
	ListFilter,
	MailCheck,
	MoreHorizontal,
	Tag,
	Trash2,
} from "lucide-react";
import { useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { Link } from "@/lib/router";

function MailActions() {
	const [label, setLabel] = useState("personal");

	return (
		<ButtonGroup>
			<ButtonGroup className="hidden sm:flex">
				<Button variant="outline" size="icon" aria-label="Go Back">
					<ArrowLeft />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">Archive</Button>
				<Button variant="outline">Report</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">Snooze</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" aria-label="More Options">
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-48">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<MailCheck />
								Mark as Read
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Archive />
								Archive
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Clock />
								Snooze
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CalendarPlus />
								Add to Calendar
							</DropdownMenuItem>
							<DropdownMenuItem>
								<ListFilter />
								Add to List
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Tag />
									Label As...
								</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									<DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
										<DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem variant="destructive">
								<Trash2 />
								Trash
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</ButtonGroup>
		</ButtonGroup>
	);
}

export default function ButtonPage() {
	return (
		<>
			<ContentHeader title="Button" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Variants" description="Default, outline, secondary, ghost, destructive and link.">
					<div className="flex flex-wrap gap-2">
						<Button>Button</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="link">Link</Button>
					</div>
				</ExampleCard>

				<ExampleCard title="Size" description="Small, default and large, each with its icon size.">
					<div className="flex flex-col items-start gap-2 sm:flex-row">
						<div className="flex items-start gap-2">
							<Button size="sm" variant="outline">
								Small
							</Button>
						</div>
						<div className="flex items-start gap-2">
							<Button variant="outline">Default</Button>
						</div>
						<div className="flex items-start gap-2">
							<Button variant="outline" size="lg">
								Large
							</Button>
						</div>
					</div>
				</ExampleCard>

				<ExampleCard title="Icon" description="Name an icon-only button for screen readers.">
					<div className="flex gap-2">
						<Button variant="outline" size="icon" aria-label="Upgrade">
							<CircleFadingArrowUp />
						</Button>
						<Button variant="outline" size="icon" aria-label="Submit">
							<ArrowUp />
						</Button>
					</div>
				</ExampleCard>

				<ExampleCard title="With icon" description="An icon beside the label.">
					<Button variant="outline" size="sm">
						<GitBranch /> New Branch
					</Button>
				</ExampleCard>

				<ExampleCard title="Spinner" description="A spinner on a disabled button while work runs.">
					<div className="flex flex-wrap gap-2">
						<Button variant="outline" disabled>
							<Spinner />
							Generating
						</Button>
						<Button variant="secondary" disabled>
							Downloading
							<Spinner />
						</Button>
					</div>
				</ExampleCard>

				<ExampleCard title="Button group" description="ButtonGroup joins related buttons. Groups nest, with a gap between them.">
					<MailActions />
				</ExampleCard>

				<ExampleCard title="Link component" description="With asChild, a router link takes the button's look.">
					<Button asChild>
						<Link to="/pages/login">Login</Link>
					</Button>
				</ExampleCard>
			</div>
		</>
	);
}
