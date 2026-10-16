import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BASIC = [
	{
		value: "item-1",
		trigger: "How do I reset my password?",
		content:
			"Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
	},
	{
		value: "item-2",
		trigger: "Can I change my subscription plan?",
		content: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
	},
	{
		value: "item-3",
		trigger: "What payment methods do you accept?",
		content: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
	},
];

const SETTINGS = [
	{
		value: "notifications",
		trigger: "Notification Settings",
		content: "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
	},
	{
		value: "privacy",
		trigger: "Privacy & Security",
		content:
			"Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences.",
	},
	{
		value: "billing",
		trigger: "Billing & Subscription",
		content:
			"View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
	},
];

const PRODUCT = [
	{
		value: "billing",
		trigger: "How does billing work?",
		content: "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
	},
	{
		value: "security",
		trigger: "Is my data secure?",
		content: "Yes. We use end-to-end encryption and regular third-party security audits. All data is encrypted at rest and in transit.",
	},
	{
		value: "integration",
		trigger: "What integrations do you support?",
		content:
			"We integrate with popular tools including Slack, Zapier, Salesforce and HubSpot. You can also build your own using our REST API and webhooks.",
	},
];

const SUBSCRIPTION = [
	{
		value: "plans",
		trigger: "What subscription plans do you offer?",
		content:
			"We offer three tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month), each with more storage, API access and support.",
	},
	{
		value: "billing",
		trigger: "How does billing work?",
		content: "Billing occurs automatically at the start of each billing cycle. You'll receive an invoice via email after each payment.",
	},
	{
		value: "cancel",
		trigger: "How do I cancel my subscription?",
		content: "You can cancel anytime from your account settings. Your access will continue until the end of your current billing period.",
	},
];

export default function AccordionPage() {
	return (
		<>
			<ContentHeader title="Accordion" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Basic" description="One item open at a time. Clicking the open item closes it again.">
					<Accordion type="single" collapsible defaultValue="item-1">
						{BASIC.map((item) => (
							<AccordionItem key={item.value} value={item.value}>
								<AccordionTrigger>{item.trigger}</AccordionTrigger>
								<AccordionContent>{item.content}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</ExampleCard>

				<ExampleCard title="Multiple" description="Set type to multiple to let several items stay open together.">
					<Accordion type="multiple" defaultValue={["notifications"]}>
						{SETTINGS.map((item) => (
							<AccordionItem key={item.value} value={item.value}>
								<AccordionTrigger>{item.trigger}</AccordionTrigger>
								<AccordionContent>{item.content}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</ExampleCard>

				<ExampleCard title="Disabled" description="A disabled item can't be opened.">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>Can I access my account history?</AccordionTrigger>
							<AccordionContent>
								Yes, you can view your complete account history including all transactions, plan changes, and support tickets in the Account
								History section of your dashboard.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2" disabled>
							<AccordionTrigger>Premium feature information</AccordionTrigger>
							<AccordionContent>
								This section contains information about premium features. Upgrade your plan to access this content.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>How do I update my email address?</AccordionTrigger>
							<AccordionContent>
								You can update your email address in your account settings. You&apos;ll receive a verification email at your new address to
								confirm the change.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</ExampleCard>

				<ExampleCard title="Borders" description="Draw a border round the accordion and pad each item.">
					<Accordion type="single" collapsible defaultValue="billing" className="rounded-xl border border-input/50">
						{PRODUCT.map((item) => (
							<AccordionItem key={item.value} value={item.value} className="px-4">
								<AccordionTrigger>{item.trigger}</AccordionTrigger>
								<AccordionContent>{item.content}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</ExampleCard>

				<ExampleCard title="Card" description="Place an accordion inside a card under its header.">
					<Card className="max-w-sm bg-muted">
						<CardHeader className="mb-2 flex-col gap-1">
							<CardTitle>Subscription & Billing</CardTitle>
							<CardDescription>Common questions about your account, plans, payments and cancellations.</CardDescription>
						</CardHeader>
						<Accordion type="single" collapsible defaultValue="plans">
							{SUBSCRIPTION.map((item) => (
								<AccordionItem key={item.value} value={item.value}>
									<AccordionTrigger>{item.trigger}</AccordionTrigger>
									<AccordionContent>{item.content}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</Card>
				</ExampleCard>
			</div>
		</>
	);
}
