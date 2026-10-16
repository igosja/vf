import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

/** Every form on this page reports what it would have sent. */
function showSubmitted(data: unknown) {
	toast("You submitted the following values:", {
		description: (
			<pre className="mt-1 max-w-80 overflow-x-auto rounded-lg bg-white/10 p-3 font-mono">
				<code className="text-inherit">{JSON.stringify(data, null, 2)}</code>
			</pre>
		),
	});
}

export default function FormValidation() {
	return (
		<>
			<ContentHeader title="Form Validation" breadcrumb={["Miscellaneous", "Forms"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<div className="grid gap-4 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Bug report</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">Length rules on a text field and a textarea, with a live character count.</p>
						<BugReportForm />
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Create account</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">An email format check, a rule across two fields, and a box that has to be ticked.</p>
						<SignUpForm />
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Subscription</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">Radio cards, a select, a checkbox list with a minimum and a switch, all in one schema.</p>
						<SubscriptionForm />
					</Card>

					<div className="flex flex-col gap-4">
						<Card>
							<CardHeader>
								<CardTitle>Password strength</CardTitle>
							</CardHeader>
							<p className="mt-1.5 mb-6">The rules are listed under the field and tick off as they are met.</p>
							<PasswordForm />
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Contact emails</CardTitle>
							</CardHeader>
							<p className="mt-1.5 mb-6">A list the user can grow and shrink, with each entry checked on its own.</p>
							<EmailListForm />
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}

const bugReportSchema = z.object({
	title: z.string().min(5, "Bug title must be at least 5 characters.").max(32, "Bug title must be at most 32 characters."),
	description: z.string().min(20, "Description must be at least 20 characters.").max(100, "Description must be at most 100 characters."),
});

function BugReportForm() {
	const form = useForm({
		resolver: zodResolver(bugReportSchema),
		defaultValues: { title: "", description: "" },
	});

	return (
		<form onSubmit={form.handleSubmit(showSubmitted)}>
			<FieldGroup>
				<Controller
					name="title"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="bug-title">Bug Title</FieldLabel>
							<Input
								{...field}
								id="bug-title"
								aria-invalid={fieldState.invalid}
								placeholder="Login button not working on mobile"
								autoComplete="off"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="description"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="bug-description">Description</FieldLabel>
							<InputGroup>
								<InputGroupTextarea
									{...field}
									id="bug-description"
									placeholder="I'm having an issue with the login button on mobile."
									rows={5}
									className="min-h-24"
									aria-invalid={fieldState.invalid}
								/>
								<InputGroupAddon align="block-end">
									<InputGroupText className="text-xs tabular-nums">{field.value.length}/100 characters</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
							<FieldDescription>Include steps to reproduce, expected behavior, and what actually happened.</FieldDescription>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Field orientation="horizontal">
					<Button type="submit">Submit</Button>
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

const signUpSchema = z
	.object({
		name: z.string().min(2, "Enter your full name."),
		email: z.email("Enter a valid email address."),
		password: z.string().min(8, "Password must be at least 8 characters."),
		confirm: z.string(),
		terms: z.boolean().refine((accepted) => accepted, "You must accept the terms to continue."),
	})
	.refine((values) => values.password === values.confirm, {
		message: "Passwords do not match.",
		path: ["confirm"],
	});

function SignUpForm() {
	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: { name: "", email: "", password: "", confirm: "", terms: false },
	});

	return (
		<form onSubmit={form.handleSubmit(({ password: _password, confirm: _confirm, ...values }) => showSubmitted(values))}>
			<FieldGroup>
				<Controller
					name="name"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="signup-name">Full Name</FieldLabel>
							<Input {...field} id="signup-name" aria-invalid={fieldState.invalid} placeholder="Lina Black" autoComplete="name" />
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="email"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="signup-email">Email</FieldLabel>
							<Input
								{...field}
								id="signup-email"
								type="email"
								aria-invalid={fieldState.invalid}
								placeholder="admin@materia.app"
								autoComplete="email"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<div className="grid gap-5 sm:grid-cols-2">
					<Controller
						name="password"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="signup-password">Password</FieldLabel>
								<Input {...field} id="signup-password" type="password" aria-invalid={fieldState.invalid} autoComplete="new-password" />
								{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
							</Field>
						)}
					/>
					<Controller
						name="confirm"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="signup-confirm">Confirm Password</FieldLabel>
								<Input {...field} id="signup-confirm" type="password" aria-invalid={fieldState.invalid} autoComplete="new-password" />
								{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
							</Field>
						)}
					/>
				</div>
				<Controller
					name="terms"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field orientation="horizontal" data-invalid={fieldState.invalid}>
							<Checkbox
								id="signup-terms"
								name={field.name}
								checked={field.value}
								onCheckedChange={(checked) => field.onChange(checked === true)}
								aria-invalid={fieldState.invalid}
							/>
							<FieldContent>
								<FieldLabel htmlFor="signup-terms">I accept the terms and conditions</FieldLabel>
								{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
							</FieldContent>
						</Field>
					)}
				/>
				<Field orientation="horizontal">
					<Button type="submit">Create Account</Button>
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

const ADDONS = [
	{ id: "analytics", title: "Analytics", description: "Advanced analytics and reporting" },
	{ id: "backup", title: "Backup", description: "Automated daily backups" },
	{ id: "support", title: "Priority Support", description: "24/7 premium customer support" },
] as const;

const subscriptionSchema = z.object({
	plan: z.enum(["basic", "pro"], { error: "Please select a subscription plan." }),
	billingPeriod: z.string().min(1, "Please select a billing period."),
	addons: z.array(z.string()).min(1, "Please select at least one add-on."),
	emailNotifications: z.boolean(),
});

function SubscriptionForm() {
	const form = useForm({
		resolver: zodResolver(subscriptionSchema),
		defaultValues: { plan: "basic", billingPeriod: "", addons: [], emailNotifications: false },
	});

	return (
		<form onSubmit={form.handleSubmit(showSubmitted)}>
			<FieldGroup>
				<Controller
					name="plan"
					control={form.control}
					render={({ field, fieldState }) => (
						<FieldSet data-invalid={fieldState.invalid}>
							<FieldLegend variant="label">Subscription Plan</FieldLegend>
							<FieldDescription>Choose your subscription plan.</FieldDescription>
							<RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} aria-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="subscription-basic">
									<Field orientation="horizontal">
										<FieldContent>
											<FieldTitle>Basic</FieldTitle>
											<FieldDescription>For individuals and small teams</FieldDescription>
										</FieldContent>
										<RadioGroupItem value="basic" id="subscription-basic" />
									</Field>
								</FieldLabel>
								<FieldLabel htmlFor="subscription-pro">
									<Field orientation="horizontal">
										<FieldContent>
											<FieldTitle>Pro</FieldTitle>
											<FieldDescription>For businesses with higher demands</FieldDescription>
										</FieldContent>
										<RadioGroupItem value="pro" id="subscription-pro" />
									</Field>
								</FieldLabel>
							</RadioGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</FieldSet>
					)}
				/>
				<FieldSeparator />
				<Controller
					name="billingPeriod"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="subscription-billing">Billing Period</FieldLabel>
							<Select name={field.name} value={field.value} onValueChange={field.onChange}>
								<SelectTrigger id="subscription-billing" aria-invalid={fieldState.invalid} className="w-full">
									<SelectValue placeholder="Select" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="monthly">Monthly</SelectItem>
									<SelectItem value="yearly">Yearly</SelectItem>
								</SelectContent>
							</Select>
							<FieldDescription>Choose how often you want to be billed.</FieldDescription>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<FieldSeparator />
				<Controller
					name="addons"
					control={form.control}
					render={({ field, fieldState }) => (
						<FieldSet>
							<FieldLegend variant="label">Add-ons</FieldLegend>
							<FieldDescription>Select additional features you'd like to include.</FieldDescription>
							<FieldGroup data-slot="checkbox-group">
								{ADDONS.map((addon) => (
									<Field key={addon.id} orientation="horizontal" data-invalid={fieldState.invalid}>
										<Checkbox
											id={`subscription-${addon.id}`}
											name={field.name}
											aria-invalid={fieldState.invalid}
											checked={field.value.includes(addon.id)}
											onCheckedChange={(checked) => {
												field.onChange(checked ? [...field.value, addon.id] : field.value.filter((value) => value !== addon.id));
												field.onBlur();
											}}
										/>
										<FieldContent>
											<FieldLabel htmlFor={`subscription-${addon.id}`}>{addon.title}</FieldLabel>
											<FieldDescription>{addon.description}</FieldDescription>
										</FieldContent>
									</Field>
								))}
							</FieldGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</FieldSet>
					)}
				/>
				<FieldSeparator />
				<Controller
					name="emailNotifications"
					control={form.control}
					render={({ field }) => (
						<Field orientation="horizontal">
							<FieldContent>
								<FieldLabel htmlFor="subscription-notifications">Email Notifications</FieldLabel>
								<FieldDescription>Receive email updates about your subscription</FieldDescription>
							</FieldContent>
							<Switch id="subscription-notifications" name={field.name} checked={field.value} onCheckedChange={field.onChange} />
						</Field>
					)}
				/>
				<Field orientation="horizontal">
					<Button type="submit">Save Preferences</Button>
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

const PASSWORD_RULES = [
	{ id: "length", label: "At least 8 characters", test: (value: string) => value.length >= 8 },
	{ id: "lowercase", label: "One lowercase letter", test: (value: string) => /[a-z]/.test(value) },
	{ id: "uppercase", label: "One uppercase letter", test: (value: string) => /[A-Z]/.test(value) },
	{ id: "number", label: "One number", test: (value: string) => /\d/.test(value) },
	{ id: "special", label: "One special character", test: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value) },
];

const passwordSchema = z.object({
	password: z
		.string()
		.min(8, "Password must be at least 8 characters.")
		.refine((value) => /[a-z]/.test(value), "Password must contain at least one lowercase letter.")
		.refine((value) => /[A-Z]/.test(value), "Password must contain at least one uppercase letter.")
		.refine((value) => /\d/.test(value), "Password must contain at least one number.")
		.refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), "Password must contain at least one special character."),
});

function PasswordForm() {
	const form = useForm({
		resolver: zodResolver(passwordSchema),
		defaultValues: { password: "" },
	});
	const password = useWatch({ control: form.control, name: "password" });

	const met = PASSWORD_RULES.filter((rule) => rule.test(password)).length;
	const strength = (met / PASSWORD_RULES.length) * 100;

	return (
		<form onSubmit={form.handleSubmit(() => showSubmitted({ password: "••••••••" }))}>
			<FieldGroup>
				<Controller
					name="password"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="strength-password">Password</FieldLabel>
							<InputGroup>
								<InputGroupInput
									{...field}
									id="strength-password"
									type="password"
									placeholder="Enter your password"
									aria-invalid={fieldState.invalid}
									autoComplete="new-password"
								/>
								<InputGroupAddon align="inline-end">
									<Check className={met === PASSWORD_RULES.length ? "text-emerald-500" : "text-muted-foreground"} />
								</InputGroupAddon>
							</InputGroup>
							<Progress
								value={strength}
								aria-label="Password strength"
								className={cn("mt-1 h-2", strength <= 40 ? "text-red-400" : strength <= 80 ? "text-amber-500" : "text-emerald-500")}
							/>
							<ul className="grid gap-1.5">
								{PASSWORD_RULES.map((rule) => {
									const passed = rule.test(password);
									return (
										<li
											key={rule.id}
											className={cn("flex items-center gap-2 text-xs", passed ? "text-foreground" : "text-muted-foreground")}
										>
											<Check className={cn("size-4", passed ? "text-emerald-500" : "text-muted-foreground")} />
											{rule.label}
										</li>
									);
								})}
							</ul>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Field orientation="horizontal">
					<Button type="submit">Set Password</Button>
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

const emailListSchema = z.object({
	emails: z
		.array(z.object({ address: z.email("Enter a valid email address.") }))
		.min(1, "Add at least one email address.")
		.max(5, "You can add up to 5 email addresses."),
});

function EmailListForm() {
	const form = useForm({
		resolver: zodResolver(emailListSchema),
		defaultValues: { emails: [{ address: "" }, { address: "" }] },
	});
	const { fields, append, remove } = useFieldArray({ control: form.control, name: "emails" });

	return (
		<form onSubmit={form.handleSubmit(showSubmitted)}>
			<FieldGroup>
				<FieldSet>
					<FieldLegend variant="label">Email Addresses</FieldLegend>
					<FieldDescription>Add up to 5 email addresses where we can contact you.</FieldDescription>
					<FieldGroup className="gap-3">
						{fields.map((item, index) => (
							<Controller
								key={item.id}
								name={`emails.${index}.address`}
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<InputGroup>
											<InputGroupInput
												{...field}
												aria-label={`Email ${index + 1}`}
												aria-invalid={fieldState.invalid}
												placeholder="name@example.com"
												type="email"
												autoComplete="email"
											/>
											{fields.length > 1 && (
												<InputGroupAddon align="inline-end">
													<InputGroupButton size="icon-xs" onClick={() => remove(index)} aria-label={`Remove email ${index + 1}`}>
														<X />
													</InputGroupButton>
												</InputGroupAddon>
											)}
										</InputGroup>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						))}
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="self-start"
							onClick={() => append({ address: "" })}
							disabled={fields.length >= 5}
						>
							Add Email Address
						</Button>
					</FieldGroup>
					{form.formState.errors.emails?.root && <FieldError errors={[form.formState.errors.emails.root]} />}
				</FieldSet>
				<Field orientation="horizontal">
					<Button type="submit">Save</Button>
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
