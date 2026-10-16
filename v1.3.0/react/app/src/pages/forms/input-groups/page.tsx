import {
	Archive,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	CalendarPlus,
	Check,
	ChevronDown,
	Clock,
	Copy,
	CornerDownLeft,
	CreditCard,
	FileCode,
	Info,
	ListFilter,
	LoaderCircle,
	Mail,
	MailCheck,
	MoreHorizontal,
	Plus,
	RefreshCw,
	Search,
	Star,
	Trash2,
} from "lucide-react";
import { useState } from "react";

import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const CURRENCIES = [
	{ value: "$", label: "US Dollar" },
	{ value: "€", label: "Euro" },
	{ value: "£", label: "British Pound" },
];

export default function InputGroups() {
	const [copied, setCopied] = useState(false);
	const [favorite, setFavorite] = useState(false);
	const [currency, setCurrency] = useState("$");
	const [message, setMessage] = useState("");

	const copy = () => {
		navigator.clipboard?.writeText("https://materia.app/invite/8XK2").catch(() => {});
		setCopied(true);
		window.setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<ContentHeader title="Input Groups" breadcrumb={["Miscellaneous", "Forms"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<Card>
					<CardHeader>
						<CardTitle>Icons and text</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						<code>InputGroup</code> puts icons, text and buttons inside the field's border. <code>align</code> places an addon before or after the
						control.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Icons</h4>
							<InputGroup>
								<InputGroupInput placeholder="Search..." aria-label="Search" />
								<InputGroupAddon>
									<Search />
								</InputGroupAddon>
								<InputGroupAddon align="inline-end">
									<Kbd>⌘K</Kbd>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput type="email" placeholder="Enter your email" aria-label="Email" />
								<InputGroupAddon>
									<Mail />
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput placeholder="Card number" aria-label="Card number" />
								<InputGroupAddon>
									<CreditCard />
								</InputGroupAddon>
								<InputGroupAddon align="inline-end">
									<Check className="text-emerald-500" />
								</InputGroupAddon>
							</InputGroup>
						</div>

						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Text</h4>
							<InputGroup>
								<InputGroupAddon>
									<InputGroupText>$</InputGroupText>
								</InputGroupAddon>
								<InputGroupInput placeholder="0.00" aria-label="Amount" />
								<InputGroupAddon align="inline-end">
									<InputGroupText>USD</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupAddon>
									<InputGroupText>https://</InputGroupText>
								</InputGroupAddon>
								<InputGroupInput placeholder="example" aria-label="Website" className="pl-0.5" />
								<InputGroupAddon align="inline-end">
									<InputGroupText>.com</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput placeholder="Enter your username" aria-label="Username" />
								<InputGroupAddon align="inline-end">
									<InputGroupText>@materia.app</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Buttons and menus</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						<code>InputGroupButton</code> is a compact button that sits inside the field. It can open a menu or a tooltip like any other button.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Buttons</h4>
							<InputGroup>
								<InputGroupInput defaultValue="https://materia.app/invite/8XK2" readOnly aria-label="Invite link" />
								<InputGroupAddon align="inline-end">
									<InputGroupButton size="icon-xs" aria-label="Copy" title="Copy" onClick={copy}>
										{copied ? <Check /> : <Copy />}
									</InputGroupButton>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupAddon>
									<InputGroupText>https://</InputGroupText>
								</InputGroupAddon>
								<InputGroupInput aria-label="Bookmark address" className="pl-0.5" />
								<InputGroupAddon align="inline-end">
									<InputGroupButton size="icon-xs" aria-label="Favorite" aria-pressed={favorite} onClick={() => setFavorite(!favorite)}>
										<Star data-favorite={favorite} className="data-[favorite=true]:fill-amber-400 data-[favorite=true]:stroke-amber-400" />
									</InputGroupButton>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput placeholder="Type to search..." aria-label="Search" />
								<InputGroupAddon align="inline-end">
									<InputGroupButton variant="secondary">Search</InputGroupButton>
								</InputGroupAddon>
							</InputGroup>
						</div>

						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Menus and tooltips</h4>
							<InputGroup>
								<InputGroupInput placeholder="Enter file name" aria-label="File name" />
								<InputGroupAddon align="inline-end">
									<DropdownMenu modal={false}>
										<DropdownMenuTrigger asChild>
											<InputGroupButton size="icon-xs" aria-label="More">
												<MoreHorizontal />
											</InputGroupButton>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>Settings</DropdownMenuItem>
											<DropdownMenuItem>Copy path</DropdownMenuItem>
											<DropdownMenuItem>Open location</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput placeholder="Enter search query" aria-label="Search query" />
								<InputGroupAddon align="inline-end">
									<DropdownMenu modal={false}>
										<DropdownMenuTrigger asChild>
											<InputGroupButton className="pr-1.5 text-xs">
												Search in... <ChevronDown className="size-3" />
											</InputGroupButton>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>Documentation</DropdownMenuItem>
											<DropdownMenuItem>Blog Posts</DropdownMenuItem>
											<DropdownMenuItem>Changelog</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput type="password" placeholder="Enter password" aria-label="Password" />
								<InputGroupAddon align="inline-end">
									<Tooltip>
										<TooltipTrigger asChild>
											<InputGroupButton size="icon-xs" aria-label="Password rules">
												<Info />
											</InputGroupButton>
										</TooltipTrigger>
										<TooltipContent>Password must be at least 8 characters</TooltipContent>
									</Tooltip>
								</InputGroupAddon>
							</InputGroup>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Labels and loading</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">An addon can hold the field's label, and a spinner shows the field is busy while it stays disabled.</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Labels</h4>
							<InputGroup>
								<InputGroupInput id="group-handle" placeholder="materia" />
								<InputGroupAddon>
									<Label htmlFor="group-handle">@</Label>
								</InputGroupAddon>
							</InputGroup>
							<InputGroup>
								<InputGroupInput id="group-email" placeholder="admin@materia.app" />
								<InputGroupAddon align="block-start">
									<Label htmlFor="group-email" className="text-foreground">
										Email
									</Label>
									<Tooltip>
										<TooltipTrigger asChild>
											<InputGroupButton size="icon-xs" aria-label="Help" className="ml-auto">
												<Info />
											</InputGroupButton>
										</TooltipTrigger>
										<TooltipContent>We'll use this to send you notifications</TooltipContent>
									</Tooltip>
								</InputGroupAddon>
							</InputGroup>
						</div>

						<div className="grid gap-4">
							<h4 className="text-sm font-medium">Loading</h4>
							<InputGroup data-disabled>
								<InputGroupInput placeholder="Searching..." aria-label="Search" disabled />
								<InputGroupAddon align="inline-end">
									<Spinner />
								</InputGroupAddon>
							</InputGroup>
							<InputGroup data-disabled>
								<InputGroupInput placeholder="Saving changes..." aria-label="Changes" disabled />
								<InputGroupAddon align="inline-end">
									<InputGroupText>Saving...</InputGroupText>
									<Spinner />
								</InputGroupAddon>
							</InputGroup>
							<InputGroup data-disabled>
								<InputGroupInput placeholder="Refreshing data..." aria-label="Data" disabled />
								<InputGroupAddon>
									<LoaderCircle className="animate-spin" />
								</InputGroupAddon>
								<InputGroupAddon align="inline-end">
									<InputGroupText>Please wait...</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
						</div>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Textarea</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						With a textarea, addons can sit above or below the text as toolbars, using the <code>block-start</code> and <code>block-end</code>{" "}
						alignments.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<InputGroup>
							<InputGroupTextarea
								value={message}
								onChange={(event) => setMessage(event.target.value)}
								placeholder="Ask, search or chat..."
								aria-label="Message"
								className="min-h-24"
							/>
							<InputGroupAddon align="block-end">
								<InputGroupButton variant="outline" size="icon-xs" aria-label="Attach">
									<Plus />
								</InputGroupButton>
								<DropdownMenu modal={false}>
									<DropdownMenuTrigger asChild>
										<InputGroupButton>Auto</InputGroupButton>
									</DropdownMenuTrigger>
									<DropdownMenuContent side="top" align="start">
										<DropdownMenuItem>Auto</DropdownMenuItem>
										<DropdownMenuItem>Agent</DropdownMenuItem>
										<DropdownMenuItem>Manual</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								<InputGroupText className="ml-auto text-xs tabular-nums">{message.length}/280</InputGroupText>
								<InputGroupButton variant="default" size="icon-xs" aria-label="Send" disabled={!message}>
									<ArrowUp />
								</InputGroupButton>
							</InputGroupAddon>
						</InputGroup>

						<InputGroup>
							<InputGroupTextarea placeholder="console.log('Hello, world!');" aria-label="Script" className="min-h-32 font-mono" />
							<InputGroupAddon align="block-start" className="border-b">
								<InputGroupText className="font-mono text-foreground">
									<FileCode />
									script.js
								</InputGroupText>
								<InputGroupButton size="icon-xs" aria-label="Refresh" className="ml-auto">
									<RefreshCw />
								</InputGroupButton>
								<InputGroupButton size="icon-xs" aria-label="Copy">
									<Copy />
								</InputGroupButton>
							</InputGroupAddon>
							<InputGroupAddon align="block-end" className="border-t">
								<InputGroupText className="text-xs">Line 1, Column 1</InputGroupText>
								<InputGroupButton size="sm" variant="default" className="ml-auto">
									Run <CornerDownLeft />
								</InputGroupButton>
							</InputGroupAddon>
						</InputGroup>
					</div>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Button Group</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">
						<code>ButtonGroup</code> joins buttons, fields and selects edge to edge. Nest groups to keep a little space between sets.
					</p>

					<div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
						<div>
							<h4 className="mb-3 text-sm font-medium">Actions</h4>
							<ButtonGroup>
								<ButtonGroup className="hidden sm:flex">
									<Button variant="outline" size="icon" aria-label="Go back">
										<ArrowLeft />
									</Button>
								</ButtonGroup>
								<ButtonGroup>
									<Button variant="outline">Archive</Button>
									<Button variant="outline">Report</Button>
								</ButtonGroup>
								<ButtonGroup>
									<Button variant="outline">Snooze</Button>
									<DropdownMenu modal={false}>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" size="icon" aria-label="More options">
												<MoreHorizontal />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="w-52">
											<DropdownMenuItem>
												<MailCheck />
												Mark as Read
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Archive />
												Archive
											</DropdownMenuItem>
											<DropdownMenuSeparator />
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
											<DropdownMenuSeparator />
											<DropdownMenuItem variant="destructive">
												<Trash2 />
												Trash
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</ButtonGroup>
							</ButtonGroup>
						</div>

						<div>
							<h4 className="mb-3 text-sm font-medium">Split button</h4>
							<div className="flex flex-wrap gap-4">
								<ButtonGroup>
									<Button variant="secondary">Button</Button>
									<ButtonGroupSeparator />
									<Button size="icon" variant="secondary" aria-label="Add">
										<Plus />
									</Button>
								</ButtonGroup>
								<ButtonGroup>
									<Button variant="outline">Follow</Button>
									<DropdownMenu modal={false}>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" size="icon" aria-label="Follow options">
												<ChevronDown />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>Mute Conversation</DropdownMenuItem>
											<DropdownMenuItem>Mark as Read</DropdownMenuItem>
											<DropdownMenuItem>Block User</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</ButtonGroup>
							</div>
						</div>

						<div>
							<h4 className="mb-3 text-sm font-medium">With fields</h4>
							<div className="grid gap-4">
								<ButtonGroup className="w-full">
									<Input placeholder="Search..." aria-label="Search" />
									<Button variant="outline" size="icon" aria-label="Search">
										<Search />
									</Button>
								</ButtonGroup>
								<ButtonGroup className="w-full">
									<ButtonGroup className="flex-1">
										<Select value={currency} onValueChange={setCurrency}>
											<SelectTrigger className="font-mono" aria-label="Currency">
												{currency}
											</SelectTrigger>
											<SelectContent className="min-w-36">
												{CURRENCIES.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.value} <span className="text-muted-foreground">{item.label}</span>
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<Input placeholder="10.00" inputMode="decimal" aria-label="Amount" />
									</ButtonGroup>
									<ButtonGroup>
										<Button variant="outline" size="icon" aria-label="Send">
											<ArrowRight />
										</Button>
									</ButtonGroup>
								</ButtonGroup>
								<ButtonGroup className="w-full">
									<ButtonGroupText>https://</ButtonGroupText>
									<Input placeholder="materia.app" aria-label="Website" />
								</ButtonGroup>
							</div>
						</div>

						<div>
							<h4 className="mb-3 text-sm font-medium">Sizes and nesting</h4>
							<div className="flex flex-col items-start gap-4">
								<ButtonGroup>
									<Button variant="outline" size="sm">
										Small
									</Button>
									<Button variant="outline" size="sm">
										Button
									</Button>
									<Button variant="outline" size="sm">
										Group
									</Button>
									<Button variant="outline" size="icon-sm" aria-label="Add">
										<Plus />
									</Button>
								</ButtonGroup>
								<ButtonGroup>
									<Button variant="outline">Default</Button>
									<Button variant="outline">Button</Button>
									<Button variant="outline">Group</Button>
									<Button variant="outline" size="icon" aria-label="Add">
										<Plus />
									</Button>
								</ButtonGroup>
								<ButtonGroup>
									<ButtonGroup>
										<Button variant="outline" size="sm">
											1
										</Button>
										<Button variant="outline" size="sm">
											2
										</Button>
										<Button variant="outline" size="sm">
											3
										</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button variant="outline" size="icon-sm" aria-label="Previous">
											<ArrowLeft />
										</Button>
										<Button variant="outline" size="icon-sm" aria-label="Next">
											<ArrowRight />
										</Button>
									</ButtonGroup>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
