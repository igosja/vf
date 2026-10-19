"use client";

import { ChevronDown, ChevronRight, ChevronsUpDown, File, Folder, Maximize, Minimize } from "lucide-react";
import { useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FileTreeItem = { name: string; items?: FileTreeItem[] };

const FILE_TREE: FileTreeItem[] = [
	{
		name: "components",
		items: [
			{ name: "ui", items: [{ name: "button.tsx" }, { name: "card.tsx" }, { name: "dialog.tsx" }, { name: "input.tsx" }, { name: "select.tsx" }] },
			{ name: "login-form.tsx" },
			{ name: "register-form.tsx" },
		],
	},
	{ name: "lib", items: [{ name: "utils.ts" }, { name: "api.ts" }] },
	{ name: "hooks", items: [{ name: "use-media-query.ts" }, { name: "use-debounce.ts" }] },
	{ name: "app.tsx" },
	{ name: "package.json" },
	{ name: "README.md" },
];

/** A folder opens to show its children; a file is a plain row. */
function TreeItem({ item }: { item: FileTreeItem }) {
	if (!item.items)
		return (
			<Button variant="ghost" size="sm" className="w-full justify-start">
				<File />
				{item.name}
			</Button>
		);

	return (
		<Collapsible>
			<CollapsibleTrigger asChild>
				<Button variant="ghost" size="sm" className="group w-full justify-start">
					<ChevronRight className="transition-transform group-data-[state=open]:rotate-90" />
					<Folder />
					{item.name}
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-1 ml-5">
				<div className="flex flex-col gap-1">
					{item.items.map((child) => (
						<TreeItem key={child.name} item={child} />
					))}
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}

function OrderDetails() {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible open={open} onOpenChange={setOpen} className="flex max-w-88 flex-col gap-2">
			<div className="flex items-center justify-between gap-4 px-4">
				<h4 className="text-sm font-medium text-emphasis-foreground">Order #4189</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="icon-sm">
						<ChevronsUpDown />
						<span className="sr-only">Toggle details</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="flex items-center justify-between rounded-xl border border-input/50 px-4 py-2 text-sm">
				<span className="text-muted-foreground">Status</span>
				<span className="font-medium">Shipped</span>
			</div>
			<CollapsibleContent className="flex flex-col gap-2">
				<div className="rounded-xl border border-input/50 px-4 py-2 text-sm">
					<p className="font-medium">Shipping address</p>
					<p className="text-muted-foreground">100 Market St, San Francisco</p>
				</div>
				<div className="rounded-xl border border-input/50 px-4 py-2 text-sm">
					<p className="font-medium">Items</p>
					<p className="text-muted-foreground">2x Studio Headphones</p>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}

function RadiusSettings() {
	const [open, setOpen] = useState(false);

	return (
		<Card className="max-w-xs bg-muted p-5">
			<CardHeader className="mb-4 flex-col gap-1">
				<CardTitle className="mt-0">Radius</CardTitle>
				<CardDescription>Set the corner radius of the element.</CardDescription>
			</CardHeader>
			<Collapsible open={open} onOpenChange={setOpen} className="flex items-start gap-2">
				<div className="grid w-full grid-cols-2 gap-2">
					{["Top left", "Top right"].map((label) => (
						<Field key={label}>
							<FieldLabel className="sr-only">{label}</FieldLabel>
							<Input placeholder="0" defaultValue={0} aria-label={label} />
						</Field>
					))}
					<CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
						{["Bottom left", "Bottom right"].map((label) => (
							<Field key={label}>
								<FieldLabel className="sr-only">{label}</FieldLabel>
								<Input placeholder="0" defaultValue={0} aria-label={label} />
							</Field>
						))}
					</CollapsibleContent>
				</div>
				<CollapsibleTrigger asChild>
					<Button variant="outline" size="icon" aria-label="Set each corner">
						{open ? <Minimize /> : <Maximize />}
					</Button>
				</CollapsibleTrigger>
			</Collapsible>
		</Card>
	);
}

export default function CollapsiblePage() {
	return (
		<>
			<ContentHeader title="Collapsible" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A trigger shows and hides the rows under the first one.">
					<OrderDetails />
				</ExampleCard>

				<ExampleCard title="Basic" description="The open state can tint the whole panel.">
					<Collapsible className="max-w-sm rounded-xl data-[state=open]:bg-muted">
						<CollapsibleTrigger asChild>
							<Button variant="ghost" className="group w-full">
								Product details
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
							</Button>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<div className="flex flex-col items-start gap-2 p-3 pt-1 text-sm">
								This panel can be expanded or collapsed to reveal additional content.
								<Button size="sm">Learn More</Button>
							</div>
						</CollapsibleContent>
					</Collapsible>
				</ExampleCard>

				<ExampleCard title="Settings panel" description="Reveal the less used fields of a setting.">
					<RadiusSettings />
				</ExampleCard>

				<ExampleCard title="File tree" description="Nest collapsibles to build a tree.">
					<Card className="max-w-64 gap-2 bg-muted p-4">
						<Tabs defaultValue="explorer" className="mb-2">
							<TabsList>
								<TabsTrigger value="explorer">Explorer</TabsTrigger>
								<TabsTrigger value="outline">Outline</TabsTrigger>
							</TabsList>
						</Tabs>
						<div className="flex flex-col gap-1">
							{FILE_TREE.map((item) => (
								<TreeItem key={item.name} item={item} />
							))}
						</div>
					</Card>
				</ExampleCard>
			</div>
		</>
	);
}
