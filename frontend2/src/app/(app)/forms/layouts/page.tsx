"use client";

import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function FormLayouts() {
	return (
		<>
			<ContentHeader title="Form Layouts" breadcrumb={["Miscellaneous", "Forms"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<Card>
					<CardHeader>
						<CardTitle>Field</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						<code>Field</code> stacks a label, a control and its hint. <code>FieldGroup</code> spaces a run of fields evenly, and a hint can sit
						above the control as well as below it.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="layout-username">Username</FieldLabel>
								<Input id="layout-username" type="text" placeholder="admin" />
								<FieldDescription>Choose a unique username for your account.</FieldDescription>
							</Field>
							<Field>
								<FieldLabel htmlFor="layout-password">Password</FieldLabel>
								<FieldDescription>Must be at least 8 characters long.</FieldDescription>
								<Input id="layout-password" type="password" placeholder="••••••••" />
							</Field>
						</FieldGroup>

						<FieldSet>
							<FieldLegend>Address Information</FieldLegend>
							<FieldDescription>We need your address to deliver your order.</FieldDescription>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="layout-street">Street Address</FieldLabel>
									<Input id="layout-street" type="text" placeholder="123 Main St" />
								</Field>
								<div className="grid grid-cols-2 gap-4">
									<Field>
										<FieldLabel htmlFor="layout-city">City</FieldLabel>
										<Input id="layout-city" type="text" placeholder="New York" />
									</Field>
									<Field>
										<FieldLabel htmlFor="layout-zip">Postal Code</FieldLabel>
										<Input id="layout-zip" type="text" placeholder="90502" />
									</Field>
								</div>
							</FieldGroup>
						</FieldSet>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Field group</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						Group related settings into fieldsets and divide them with <code>FieldSeparator</code>. Horizontal fields put the control beside its
						label.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<FieldGroup>
							<FieldSet>
								<FieldLegend variant="label">Responses</FieldLegend>
								<FieldDescription>Get notified when requests that take time, like exports or reports, are ready.</FieldDescription>
								<FieldGroup data-slot="checkbox-group">
									<Field orientation="horizontal" data-disabled>
										<Checkbox id="layout-push" defaultChecked disabled />
										<FieldLabel htmlFor="layout-push">Push notifications</FieldLabel>
									</Field>
								</FieldGroup>
							</FieldSet>
							<FieldSeparator />
							<FieldSet>
								<FieldLegend variant="label">Tasks</FieldLegend>
								<FieldDescription>
									Get notified when tasks you've created have updates. <a href="#">Manage tasks</a>
								</FieldDescription>
								<FieldGroup data-slot="checkbox-group">
									<Field orientation="horizontal">
										<Checkbox id="layout-push-tasks" />
										<FieldLabel htmlFor="layout-push-tasks">Push notifications</FieldLabel>
									</Field>
									<Field orientation="horizontal">
										<Checkbox id="layout-email-tasks" />
										<FieldLabel htmlFor="layout-email-tasks">Email notifications</FieldLabel>
									</Field>
								</FieldGroup>
							</FieldSet>
						</FieldGroup>

						<FieldGroup>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="layout-mfa">Multi-factor authentication</FieldLabel>
									<FieldDescription>Ask for a one-time code from your phone every time you sign in on a new device.</FieldDescription>
								</FieldContent>
								<Switch id="layout-mfa" defaultChecked />
							</Field>
							<FieldSeparator />
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="layout-sync">Sync Desktop & Documents folders</FieldLabel>
									<FieldDescription>Keep these folders available on every device you sign in to.</FieldDescription>
								</FieldContent>
								<Switch id="layout-sync" />
							</Field>
						</FieldGroup>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Responsive layout</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						With <code>orientation="responsive"</code>, a field stacks in a narrow container and puts the label beside the control once the group
						has room.
					</p>

					<form onSubmit={(event) => event.preventDefault()}>
						<FieldSet>
							<FieldLegend>Profile</FieldLegend>
							<FieldDescription>Fill in your profile information.</FieldDescription>
							<FieldSeparator />
							<FieldGroup>
								<Field orientation="responsive">
									<FieldContent>
										<FieldLabel htmlFor="layout-name">Name</FieldLabel>
										<FieldDescription>Provide your full name for identification.</FieldDescription>
									</FieldContent>
									<Input id="layout-name" placeholder="Lina Black" required className="@md/field-group:min-w-80" />
								</Field>
								<FieldSeparator />
								<Field orientation="responsive">
									<FieldContent>
										<FieldLabel htmlFor="layout-message">Message</FieldLabel>
										<FieldDescription>You can write your message here. Keep it short, preferably under 100 characters.</FieldDescription>
									</FieldContent>
									<Textarea id="layout-message" placeholder="Hello, world!" required className="min-h-24 @md/field-group:min-w-80" />
								</Field>
								<FieldSeparator />
								<Field orientation="responsive">
									<Button type="submit">Submit</Button>
									<Button type="button" variant="outline">
										Cancel
									</Button>
								</Field>
							</FieldGroup>
						</FieldSet>
					</form>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Choice cards</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						Wrap a whole horizontal field in a <code>FieldLabel</code> and the field becomes a card the user can click anywhere on.
					</p>

					<FieldSet className="md:w-1/2">
						<FieldLegend variant="label">Compute Environment</FieldLegend>
						<FieldDescription>Select the compute environment for your cluster.</FieldDescription>
						<RadioGroup defaultValue="kubernetes">
							<FieldLabel htmlFor="layout-kubernetes">
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle>Kubernetes</FieldTitle>
										<FieldDescription>Run GPU workloads on a K8s configured cluster.</FieldDescription>
									</FieldContent>
									<RadioGroupItem value="kubernetes" id="layout-kubernetes" />
								</Field>
							</FieldLabel>
							<FieldLabel htmlFor="layout-vm">
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle>Virtual Machine</FieldTitle>
										<FieldDescription>Access a VM configured cluster to run GPU workloads.</FieldDescription>
									</FieldContent>
									<RadioGroupItem value="vm" id="layout-vm" />
								</Field>
							</FieldLabel>
						</RadioGroup>
					</FieldSet>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Complete form</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">Fieldsets, a grid row of fields, a checkbox, a textarea and the actions, put together into one form.</p>

					<form className="md:w-1/2" onSubmit={(event) => event.preventDefault()}>
						<FieldGroup>
							<FieldSet>
								<FieldLegend>Payment Method</FieldLegend>
								<FieldDescription>All transactions are secure and encrypted.</FieldDescription>
								<FieldGroup>
									<Field>
										<FieldLabel htmlFor="layout-card-name">Name on Card</FieldLabel>
										<Input id="layout-card-name" placeholder="Lina Black" required />
									</Field>
									<Field>
										<FieldLabel htmlFor="layout-card-number">Card Number</FieldLabel>
										<Input id="layout-card-number" placeholder="1234 5678 9012 3456" required />
										<FieldDescription>Enter your 16-digit card number.</FieldDescription>
									</Field>
									<div className="grid grid-cols-3 gap-4">
										<Field>
											<FieldLabel htmlFor="layout-exp-month">Month</FieldLabel>
											<Select>
												<SelectTrigger id="layout-exp-month">
													<SelectValue placeholder="MM" />
												</SelectTrigger>
												<SelectContent>
													{["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((month) => (
														<SelectItem key={month} value={month}>
															{month}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</Field>
										<Field>
											<FieldLabel htmlFor="layout-exp-year">Year</FieldLabel>
											<Select>
												<SelectTrigger id="layout-exp-year">
													<SelectValue placeholder="YYYY" />
												</SelectTrigger>
												<SelectContent>
													{["2026", "2027", "2028", "2029", "2030", "2031"].map((year) => (
														<SelectItem key={year} value={year}>
															{year}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</Field>
										<Field>
											<FieldLabel htmlFor="layout-cvv">CVV</FieldLabel>
											<Input id="layout-cvv" placeholder="123" required />
										</Field>
									</div>
								</FieldGroup>
							</FieldSet>
							<FieldSeparator />
							<FieldSet>
								<FieldLegend>Billing Address</FieldLegend>
								<FieldDescription>The billing address associated with your payment method.</FieldDescription>
								<Field orientation="horizontal">
									<Checkbox id="layout-same-address" defaultChecked />
									<FieldLabel htmlFor="layout-same-address">Same as shipping address</FieldLabel>
								</Field>
							</FieldSet>
							<Field>
								<FieldLabel htmlFor="layout-comments">Comments</FieldLabel>
								<Textarea id="layout-comments" placeholder="Add any additional comments" />
							</Field>
							<Field orientation="horizontal">
								<Button type="submit">Submit</Button>
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</Field>
						</FieldGroup>
					</form>
				</Card>
			</div>
		</>
	);
}
