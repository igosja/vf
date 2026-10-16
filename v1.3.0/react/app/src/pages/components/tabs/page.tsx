import { AppWindow, Code } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PANELS = [
	{
		value: "overview",
		title: "Overview",
		description: "View your key metrics and recent project activity. Track progress across all your active projects.",
		content: "You have 12 active projects and 3 pending tasks.",
	},
	{
		value: "analytics",
		title: "Analytics",
		description: "Track performance and user engagement metrics. Monitor trends and identify growth opportunities.",
		content: "Page views are up 25% compared to last month.",
	},
	{
		value: "reports",
		title: "Reports",
		description: "Generate and download your detailed reports. Export data in multiple formats for analysis.",
		content: "You have 5 reports ready and available to export.",
	},
	{
		value: "settings",
		title: "Settings",
		description: "Manage your account preferences and options. Customize your experience to fit your needs.",
		content: "Configure notifications, security, and themes.",
	},
];

export default function TabsPage() {
	return (
		<>
			<ContentHeader title="Tabs" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="Each tab shows its own panel.">
					<Tabs defaultValue="overview" className="max-w-lg gap-4">
						<TabsList>
							{PANELS.map((panel) => (
								<TabsTrigger key={panel.value} value={panel.value}>
									{panel.title}
								</TabsTrigger>
							))}
						</TabsList>
						{PANELS.map((panel) => (
							<TabsContent key={panel.value} value={panel.value}>
								<Card className="bg-muted">
									<CardHeader className="mb-4 flex-col gap-1">
										<CardTitle className="mt-0">{panel.title}</CardTitle>
										<CardDescription>{panel.description}</CardDescription>
									</CardHeader>
									<p className="text-sm text-muted-foreground">{panel.content}</p>
								</Card>
							</TabsContent>
						))}
					</Tabs>
				</ExampleCard>

				<ExampleCard title="Vertical" description="Set orientation to vertical and stack the list.">
					<Tabs defaultValue="account" orientation="vertical">
						<TabsList className="flex-col items-start">
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>
							<TabsTrigger value="notifications">Notifications</TabsTrigger>
						</TabsList>
					</Tabs>
				</ExampleCard>

				<ExampleCard title="Disabled" description="A disabled tab can't be picked.">
					<Tabs defaultValue="home">
						<TabsList>
							<TabsTrigger value="home">Home</TabsTrigger>
							<TabsTrigger value="settings" disabled className="disabled:pointer-events-none disabled:opacity-50">
								Disabled
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</ExampleCard>

				<ExampleCard title="Icons" description="An icon before each label.">
					<Tabs defaultValue="preview">
						<TabsList>
							<TabsTrigger value="preview">
								<AppWindow className="size-4" />
								Preview
							</TabsTrigger>
							<TabsTrigger value="code">
								<Code className="size-4" />
								Code
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</ExampleCard>
			</div>
		</>
	);
}
