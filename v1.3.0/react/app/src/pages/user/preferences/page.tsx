import { Bitcoin, CircleUser, CreditCard, OctagonAlert, PhoneCall, Trash2, UserCog, Wallet } from "lucide-react";
import type { ReactNode } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";

import { UserHeader } from "../user-header";

const SOCIAL_ACCOUNTS = [
	{ id: "twitter", domain: "twitter.com/" },
	{ id: "linkedin", domain: "linkedin.com/" },
	{ id: "facebook", domain: "facebook.com/" },
	{ id: "github", domain: "github.com/" },
	{ id: "instagram", domain: "instagram.com/" },
	{ id: "tiktok", domain: "tiktok.com/" },
];

const NOTIFICATIONS = [
	{ id: "promotions", label: "Promotional Offers", description: "Receive notifications about special discounts, promotions, and offers.", checked: true },
	{ id: "subscriptions", label: "Subscription Updates", description: "Stay up-to-date with changes to your subscribed content or services.", checked: true },
	{ id: "feedback", label: "Feedback and Surveys", description: "Participate in surveys and provide feedback through notifications.", checked: false },
];

/** One preference: its label and hint on the left, the control on the right from md up. */
function Setting({
	label,
	htmlFor,
	description,
	align = "center",
	children,
}: {
	label: ReactNode;
	htmlFor?: string;
	description?: string;
	align?: "center" | "start";
	children: ReactNode;
}) {
	return (
		<div className={cn("grid gap-x-10 gap-y-4 md:grid-cols-12", align === "center" && "md:items-center")}>
			<div className="md:col-span-5">
				{htmlFor ? (
					<Label htmlFor={htmlFor} className="mb-1 font-medium text-emphasis-foreground">
						{label}
					</Label>
				) : (
					<div className="mb-1 font-medium text-emphasis-foreground">{label}</div>
				)}
				{description && <div className="text-sm text-muted-foreground">{description}</div>}
			</div>
			<div className="md:col-span-7">{children}</div>
		</div>
	);
}

function Submit({ children }: { children: ReactNode }) {
	return (
		<div className="text-right">
			<Button type="button">{children}</Button>
		</div>
	);
}

export default function UserPreferences() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<UserHeader title="User Preferences" page="Preferences" actions={false} />

			<Card className="p-0">
				<Tabs defaultValue="account">
					<TabsList className="p-4">
						<TabsTrigger value="account">
							<UserCog className="size-5" />
							Account Details
						</TabsTrigger>
						<TabsTrigger value="personal">
							<CircleUser className="size-5" />
							Personal Information
						</TabsTrigger>
						<TabsTrigger value="contact">
							<PhoneCall className="size-5" />
							Contact Details
						</TabsTrigger>
						<TabsTrigger value="payment">
							<CreditCard className="size-5" />
							Payment
						</TabsTrigger>
					</TabsList>

					<TabsContent value="account" asChild>
						<form className="p-7">
							<Setting
								label="Username"
								htmlFor="username"
								description="Your username must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
							>
								<Input id="username" defaultValue="malinda-hollaway" />
							</Setting>
							<Separator className="my-7" />
							<Setting
								label="Email Address"
								htmlFor="email"
								description="This will be used to sign in, provide reports and notify you about any product updates."
							>
								<Input id="email" type="email" defaultValue="malinda-h@xmail.xh" />
							</Setting>
							<Separator className="my-7" />
							<Setting
								label="Change Password"
								htmlFor="current-password"
								align="start"
								description="Your password must be 8-20 characters long, contain letters, numbers and symbols, and must not contain spaces or emoji."
							>
								<div className="flex flex-col gap-4">
									<Input id="current-password" type="password" placeholder="Current password" />
									<Input type="password" placeholder="New password" aria-label="New password" />
									<Input type="password" placeholder="Confirm new password" aria-label="Confirm new password" />
								</div>
							</Setting>
							<Separator className="my-7" />
							<Setting
								label="Notifications"
								align="start"
								description="Customize your notification preferences to ensure you receive only the updates and details that matter most to you."
							>
								<div className="flex flex-col gap-5">
									{NOTIFICATIONS.map((item) => (
										<div key={item.id}>
											<div className="mb-1 flex items-center gap-4">
												<Switch id={`notifications-${item.id}`} defaultChecked={item.checked} />
												<Label htmlFor={`notifications-${item.id}`} className="font-medium text-emphasis-foreground">
													{item.label}
												</Label>
											</div>
											<div className="ml-14 text-sm text-muted-foreground">{item.description}</div>
										</div>
									))}
								</div>
							</Setting>
							<Separator className="my-7" />
							<Setting
								label={
									<span className="flex items-center gap-2 text-red-400">
										<OctagonAlert className="size-6" />
										Delete Account
									</span>
								}
								align="start"
							>
								Extreme caution advised: Irreversible account deletion ahead! All your data will be permanently erased. This action is final,
								and you won't be able to recover your account or information. Think twice before proceeding!
								<Button type="button" variant="destructive" className="mt-5 flex">
									Delete Account
								</Button>
							</Setting>
							<Separator className="my-7" />
							<Submit>Update Account Details</Submit>
						</form>
					</TabsContent>

					<TabsContent value="personal" asChild>
						<form className="p-7">
							<Setting
								label="Profile Picture"
								htmlFor="profile-picture"
								description="Profile must be a square jpg or png image with the size of not more than 2mb."
								align="start"
							>
								<div className="flex items-center gap-2">
									<img className="avatar-mask size-10.5" src={USER.avatar} alt="Profile Picture" />
									<Button variant="outline" asChild>
										<label htmlFor="profile-picture">Choose</label>
									</Button>
									<input type="file" className="hidden" id="profile-picture" />
									<IconButton>
										<Trash2 />
										<span className="sr-only">Remove</span>
									</IconButton>
								</div>
							</Setting>
							<Separator className="my-7" />
							<Setting label="First Name" htmlFor="firstname" description="This will be displayed on your personal and team profile.">
								<Input id="firstname" defaultValue="Malinda" />
							</Setting>
							<Separator className="my-7" />
							<Setting label="Last Name" htmlFor="lastname">
								<Input id="lastname" defaultValue="Hollaway" />
							</Setting>
							<Separator className="my-7" />
							<Setting label="About" htmlFor="about" description="Provide a brief description of yourself in no more than 100 words.">
								<Textarea
									id="about"
									className="h-24"
									defaultValue="I'm a passionate software engineer merging technical prowess with user-centric solutions. Armed with solid computer science knowledge and practical experience, I excel in diverse challenges, delivering reliable software that surpasses expectations and integrates the latest trends."
								/>
							</Setting>
							<Separator className="my-7" />
							<Submit>Update Personal Information</Submit>
						</form>
					</TabsContent>

					<TabsContent value="contact" asChild>
						<form className="p-7">
							<Setting label="Mobile Phone" htmlFor="mobile" description="Help us stay in touch by providing your mobile number." align="start">
								<Input id="mobile" type="tel" defaultValue="(511) 522-7151" />
							</Setting>
							<Separator className="my-7" />
							<Setting label="Home Phone" htmlFor="home-phone">
								<Input id="home-phone" type="tel" defaultValue="(557) 332-1098" />
							</Setting>
							<Separator className="my-7" />
							<Setting label="Address" htmlFor="address" description="Assist us in finding your address for postal correspondence." align="start">
								<Textarea id="address" defaultValue={"123 Main Street\nAnytown, CA 12345, USA"} />
							</Setting>
							<Separator className="my-7" />
							<Setting
								label="Social Media Accounts"
								align="start"
								description="Expand your online presence and connect with our community by adding links to your social media profiles. Let others discover more about you and your interests across various social networks."
							>
								<div className="flex flex-col gap-5">
									{SOCIAL_ACCOUNTS.map((account) => (
										<InputGroup key={account.id}>
											<InputGroupAddon>
												<InputGroupText>{account.domain}</InputGroupText>
											</InputGroupAddon>
											<InputGroupInput id={account.id} defaultValue="malinda-hollaway" aria-label={account.domain} />
										</InputGroup>
									))}
								</div>
							</Setting>
							<Separator className="my-7" />
							<Submit>Update Contacts Details</Submit>
						</form>
					</TabsContent>

					<TabsContent value="payment" asChild>
						<form className="p-7">
							<Setting
								label="Credit/Debit Card"
								align="start"
								description="This will be used to process payments for subscription and future purchases from your account. All valid providers including Visa, Mastercard, American Express etc. are accepted."
							>
								<div className="flex flex-col gap-5">
									<div>
										<Label htmlFor="name-card" className="mb-1">
											Name on Card
										</Label>
										<Input id="name-card" placeholder="e.g John Doe" />
									</div>
									<div>
										<Label htmlFor="billing-address" className="mb-1">
											Billing Address
										</Label>
										<Textarea id="billing-address" />
									</div>
									<div>
										<Label htmlFor="card-number" className="mb-1">
											Card Number
										</Label>
										<Input id="card-number" inputMode="numeric" placeholder="xxxx-xxxx-xxxx-xxxx" />
									</div>
									<div className="grid grid-cols-2 gap-3">
										<div>
											<Label htmlFor="ex-date" className="mb-1">
												Expiry Date
											</Label>
											<Input id="ex-date" placeholder="MM/YY" />
										</div>
										<div>
											<Label htmlFor="cvv" className="mb-1">
												CVV
											</Label>
											<Input id="cvv" placeholder="xxx" />
										</div>
									</div>
								</div>
							</Setting>
							<Separator className="my-7" />
							<Setting label="PayPal" description="Link your PayPal account to enable an alternative method for credit/debit card payments.">
								<Button type="button" className="border-transparent bg-cyan-500">
									<Wallet className="size-5" />
									Connect PayPal Account
								</Button>
							</Setting>
							<Separator className="my-7" />
							<Setting
								label="Bitcoin Wallet"
								description="Alternatively, you have the option to link your Bitcoin wallet, allowing you to manage cryptocurrencies and utilize it as an alternative payment method for all your transactions."
							>
								<Button type="button" className="border-transparent bg-amber-400">
									<Bitcoin className="size-5" />
									Link Bitcoin Wallet
								</Button>
							</Setting>
							<Separator className="my-7" />
							<Submit>Update Payment Details</Submit>
						</form>
					</TabsContent>
				</Tabs>
			</Card>
		</div>
	);
}
