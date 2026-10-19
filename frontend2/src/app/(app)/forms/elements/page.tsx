"use client";

import { AlignCenter, AlignLeft, AlignRight, Bold, Bookmark, Heart, Italic, Star, Underline } from "lucide-react";

import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function FormElements() {
	return (
		<>
			<ContentHeader title="Form Elements" breadcrumb={["Miscellaneous", "Forms"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<Card>
					<CardHeader>
						<CardTitle>Input</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A text field, on its own or with a label, a hint, a button or an error under it.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Default</h4>
							<Input type="email" placeholder="Email" aria-label="Email" />
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Disabled</h4>
							<Input type="email" placeholder="Email" aria-label="Email" disabled />
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With label</h4>
							<Field>
								<FieldLabel htmlFor="input-label-email">Email</FieldLabel>
								<Input type="email" id="input-label-email" placeholder="Email" />
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With description</h4>
							<Field>
								<FieldLabel htmlFor="input-username">Username</FieldLabel>
								<Input type="text" id="input-username" placeholder="admin" />
								<FieldDescription>Choose a unique username for your account.</FieldDescription>
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With button</h4>
							<div className="flex items-center gap-2">
								<Input type="email" placeholder="Email" aria-label="Email" />
								<Button type="submit" variant="outline">
									Subscribe
								</Button>
							</div>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">File</h4>
							<Field>
								<FieldLabel htmlFor="input-picture">Picture</FieldLabel>
								<Input type="file" id="input-picture" />
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Invalid</h4>
							<Field data-invalid>
								<FieldLabel htmlFor="input-invalid">Email</FieldLabel>
								<Input type="email" id="input-invalid" defaultValue="admin@" aria-invalid />
								<FieldError>Enter a valid email address.</FieldError>
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Read only</h4>
							<Field>
								<FieldLabel htmlFor="input-readonly">Account ID</FieldLabel>
								<Input type="text" id="input-readonly" defaultValue="MAT-20394" readOnly />
								<FieldDescription>Read-only fields can still be focused and copied.</FieldDescription>
							</Field>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Textarea</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A multi-line text field that grows with its content.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Default</h4>
							<Textarea placeholder="Type your message here." aria-label="Message" />
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Disabled</h4>
							<Textarea placeholder="Type your message here." aria-label="Message" disabled />
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With label and description</h4>
							<Field>
								<FieldLabel htmlFor="textarea-message">Your Message</FieldLabel>
								<Textarea id="textarea-message" placeholder="Type your message here." />
								<FieldDescription>Your message will be copied to the support team.</FieldDescription>
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With button</h4>
							<div className="grid gap-2">
								<Textarea placeholder="Type your message here." aria-label="Message" />
								<Button>Send message</Button>
							</div>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Select</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						<code>Select</code> opens a styled list of options. <code>NativeSelect</code> keeps the browser's own picker, which suits long lists and
						touch screens.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Select</h4>
							<Select>
								<SelectTrigger className="w-48" aria-label="Fruit">
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Fruits</SelectLabel>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With label and description</h4>
							<Field>
								<FieldLabel htmlFor="select-department">Department</FieldLabel>
								<Select>
									<SelectTrigger id="select-department" className="w-full">
										<SelectValue placeholder="Choose department" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="engineering">Engineering</SelectItem>
										<SelectItem value="design">Design</SelectItem>
										<SelectItem value="marketing">Marketing</SelectItem>
										<SelectItem value="sales">Sales</SelectItem>
										<SelectItem value="support">Customer Support</SelectItem>
										<SelectItem value="finance">Finance</SelectItem>
									</SelectContent>
								</Select>
								<FieldDescription>Select your department or area of work.</FieldDescription>
							</Field>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Native select with groups</h4>
							<NativeSelect aria-label="Role">
								<NativeSelectOption value="">Select role</NativeSelectOption>
								<NativeSelectOptGroup label="Engineering">
									<NativeSelectOption value="frontend">Frontend</NativeSelectOption>
									<NativeSelectOption value="backend">Backend</NativeSelectOption>
									<NativeSelectOption value="devops">DevOps</NativeSelectOption>
								</NativeSelectOptGroup>
								<NativeSelectOptGroup label="Sales">
									<NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
									<NativeSelectOption value="account-manager">Account Manager</NativeSelectOption>
								</NativeSelectOptGroup>
							</NativeSelect>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Disabled and invalid</h4>
							<div className="grid gap-3">
								<NativeSelect aria-label="Priority" disabled>
									<NativeSelectOption value="">Select priority</NativeSelectOption>
									<NativeSelectOption value="low">Low</NativeSelectOption>
									<NativeSelectOption value="high">High</NativeSelectOption>
								</NativeSelect>
								<NativeSelect aria-label="Status" aria-invalid>
									<NativeSelectOption value="">Select status</NativeSelectOption>
									<NativeSelectOption value="todo">Todo</NativeSelectOption>
									<NativeSelectOption value="done">Done</NativeSelectOption>
								</NativeSelect>
							</div>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Checkbox</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A control that toggles between checked and unchecked, alone or as one of a set.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div className="flex flex-col gap-6">
							<Field orientation="horizontal">
								<Checkbox id="check-terms" />
								<FieldLabel htmlFor="check-terms">Accept terms and conditions</FieldLabel>
							</Field>
							<Field orientation="horizontal">
								<Checkbox id="check-terms-description" defaultChecked />
								<FieldContent>
									<FieldLabel htmlFor="check-terms-description">Accept terms and conditions</FieldLabel>
									<FieldDescription>By clicking this checkbox, you agree to the terms and conditions.</FieldDescription>
								</FieldContent>
							</Field>
							<Field orientation="horizontal" data-disabled>
								<Checkbox id="check-disabled" disabled />
								<FieldLabel htmlFor="check-disabled">Enable notifications</FieldLabel>
							</Field>
							<FieldLabel htmlFor="check-card">
								<Field orientation="horizontal">
									<Checkbox id="check-card" defaultChecked />
									<FieldContent>
										<FieldTitle>Enable notifications</FieldTitle>
										<FieldDescription>You can enable or disable notifications at any time.</FieldDescription>
									</FieldContent>
								</Field>
							</FieldLabel>
						</div>

						<FieldSet>
							<FieldLegend variant="label">Show these items on the desktop</FieldLegend>
							<FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
							<FieldGroup data-slot="checkbox-group">
								<Field orientation="horizontal">
									<Checkbox id="desktop-hard-disks" defaultChecked />
									<FieldLabel htmlFor="desktop-hard-disks">Hard disks</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<Checkbox id="desktop-external-disks" />
									<FieldLabel htmlFor="desktop-external-disks">External disks</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<Checkbox id="desktop-media" />
									<FieldLabel htmlFor="desktop-media">CDs, DVDs, and iPods</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<Checkbox id="desktop-servers" />
									<FieldLabel htmlFor="desktop-servers">Connected servers</FieldLabel>
								</Field>
							</FieldGroup>
						</FieldSet>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Radio Group</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A set of options where only one can be chosen at a time.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<FieldSet>
							<FieldLegend variant="label">Density</FieldLegend>
							<RadioGroup defaultValue="comfortable">
								<Field orientation="horizontal">
									<RadioGroupItem value="default" id="density-default" />
									<FieldLabel htmlFor="density-default">Default</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<RadioGroupItem value="comfortable" id="density-comfortable" />
									<FieldLabel htmlFor="density-comfortable">Comfortable</FieldLabel>
								</Field>
								<Field orientation="horizontal" data-disabled>
									<RadioGroupItem value="compact" id="density-compact" disabled />
									<FieldLabel htmlFor="density-compact">Compact</FieldLabel>
								</Field>
							</RadioGroup>
						</FieldSet>

						<FieldSet>
							<FieldLegend variant="label">Subscription Plan</FieldLegend>
							<FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
							<RadioGroup defaultValue="monthly">
								<Field orientation="horizontal">
									<RadioGroupItem value="monthly" id="plan-monthly" />
									<FieldLabel htmlFor="plan-monthly">Monthly ($9.99/month)</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<RadioGroupItem value="yearly" id="plan-yearly" />
									<FieldLabel htmlFor="plan-yearly">Yearly ($99.99/year)</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<RadioGroupItem value="lifetime" id="plan-lifetime" />
									<FieldLabel htmlFor="plan-lifetime">Lifetime ($299.99)</FieldLabel>
								</Field>
							</RadioGroup>
						</FieldSet>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Switch</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A control that turns a setting on or off straight away.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div className="flex flex-col gap-5">
							<Field orientation="horizontal">
								<Switch id="switch-airplane" />
								<FieldLabel htmlFor="switch-airplane">Airplane Mode</FieldLabel>
							</Field>
							<Field orientation="horizontal">
								<Switch id="switch-wifi" defaultChecked />
								<FieldLabel htmlFor="switch-wifi">Wi-Fi</FieldLabel>
							</Field>
							<Field orientation="horizontal" data-disabled>
								<Switch id="switch-bluetooth" disabled />
								<FieldLabel htmlFor="switch-bluetooth">Bluetooth</FieldLabel>
							</Field>
						</div>

						<Field orientation="horizontal">
							<FieldContent>
								<FieldLabel htmlFor="switch-mfa">Multi-factor authentication</FieldLabel>
								<FieldDescription>
									Enable multi-factor authentication. If you do not have a two-factor device, you can use a one-time code sent to your email.
								</FieldDescription>
							</FieldContent>
							<Switch id="switch-mfa" />
						</Field>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Toggle</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A two-state button that stays pressed until it is clicked again.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Default and outline</h4>
							<div className="flex flex-wrap items-center gap-2">
								<Toggle aria-label="Toggle bold">
									<Bold />
								</Toggle>
								<Toggle variant="outline" aria-label="Toggle italic">
									<Italic />
								</Toggle>
								<Toggle aria-label="Toggle underline" disabled>
									<Underline />
								</Toggle>
							</div>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With text</h4>
							<div className="flex flex-wrap items-center gap-2">
								<Toggle aria-label="Toggle italic">
									<Italic />
									Italic
								</Toggle>
								<Toggle
									variant="outline"
									size="sm"
									aria-label="Toggle bookmark"
									className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-primary data-[state=on]:*:[svg]:stroke-primary"
								>
									<Bookmark />
									Bookmark
								</Toggle>
							</div>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Sizes</h4>
							<div className="flex flex-wrap items-center gap-2">
								<Toggle size="sm" aria-label="Small toggle">
									<Italic />
								</Toggle>
								<Toggle aria-label="Default toggle">
									<Italic />
								</Toggle>
								<Toggle size="lg" aria-label="Large toggle">
									<Italic />
								</Toggle>
							</div>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Toggle Group</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">A set of toggles. Let any number be on together, or exactly one at a time.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Multiple</h4>
							<ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]}>
								<ToggleGroupItem value="bold" aria-label="Toggle bold">
									<Bold />
								</ToggleGroupItem>
								<ToggleGroupItem value="italic" aria-label="Toggle italic">
									<Italic />
								</ToggleGroupItem>
								<ToggleGroupItem value="underline" aria-label="Toggle underline">
									<Underline />
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">Single</h4>
							<ToggleGroup type="single" defaultValue="left">
								<ToggleGroupItem value="left" aria-label="Align left">
									<AlignLeft />
								</ToggleGroupItem>
								<ToggleGroupItem value="center" aria-label="Align center">
									<AlignCenter />
								</ToggleGroupItem>
								<ToggleGroupItem value="right" aria-label="Align right">
									<AlignRight />
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div>
							<h4 className="mb-3 text-sm font-medium">With spacing</h4>
							<ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
								<ToggleGroupItem
									value="star"
									aria-label="Toggle star"
									className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-amber-400 data-[state=on]:*:[svg]:stroke-amber-400"
								>
									<Star />
									Star
								</ToggleGroupItem>
								<ToggleGroupItem
									value="heart"
									aria-label="Toggle heart"
									className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-400 data-[state=on]:*:[svg]:stroke-red-400"
								>
									<Heart />
									Heart
								</ToggleGroupItem>
								<ToggleGroupItem
									value="bookmark"
									aria-label="Toggle bookmark"
									className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-primary data-[state=on]:*:[svg]:stroke-primary"
								>
									<Bookmark />
									Bookmark
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
