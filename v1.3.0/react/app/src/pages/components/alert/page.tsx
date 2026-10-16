import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertPage() {
	return (
		<>
			<ContentHeader title="Alert" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Basic" description="An icon, a title and a description. The icon takes its own column.">
					<div className="grid gap-4">
						<Alert>
							<CircleCheck />
							<AlertTitle>Payment successful</AlertTitle>
							<AlertDescription>Your payment of $29.99 has been processed. A receipt has been sent to your email address.</AlertDescription>
						</Alert>
						<Alert>
							<Info />
							<AlertTitle>New feature available</AlertTitle>
							<AlertDescription>We&apos;ve added dark mode support. You can enable it in your account settings.</AlertDescription>
						</Alert>
					</div>
				</ExampleCard>

				<ExampleCard title="Destructive" description="The destructive variant flags an error.">
					<Alert variant="destructive">
						<CircleAlert />
						<AlertTitle>Payment failed</AlertTitle>
						<AlertDescription>Your payment could not be processed. Please check your payment method and try again.</AlertDescription>
					</Alert>
				</ExampleCard>

				<ExampleCard title="Action" description="AlertAction pins a button to the top right corner.">
					<Alert>
						<AlertTitle>Dark mode is now available</AlertTitle>
						<AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
						<AlertAction>
							<Button size="sm">Enable</Button>
						</AlertAction>
					</Alert>
				</ExampleCard>

				<ExampleCard title="Custom colors" description="Pass a background and text colour through className.">
					<Alert className="bg-amber-400/15 text-amber-500">
						<TriangleAlert />
						<AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
						<AlertDescription>Renew now to avoid service interruption or upgrade to a paid plan to continue using the service.</AlertDescription>
					</Alert>
				</ExampleCard>
			</div>
		</>
	);
}
