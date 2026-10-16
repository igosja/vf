import {
	BadgeCheck,
	Bell,
	Building2,
	CreditCard,
	Download,
	Eye,
	File,
	FileCode,
	FileText,
	Folder,
	FolderOpen,
	FolderSearch,
	CircleHelp,
	Keyboard,
	Languages,
	Layout,
	LogOut,
	Mail,
	MessageSquare,
	Monitor,
	Moon,
	MoreHorizontal,
	Palette,
	Pencil,
	Save,
	Settings,
	Share,
	Shield,
	Sun,
	Trash,
	User,
	Wallet,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Avatar } from "@/components/common/avatar";
import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/** An outline button that opens `children` as its menu. */
function Menu({ label = "Open", className, children }: { label?: string; className?: string; children: ReactNode }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{label}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className={className}>
				{children}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function Checkboxes() {
	const [statusBar, setStatusBar] = useState(true);
	const [activityBar, setActivityBar] = useState(false);
	const [panel, setPanel] = useState(false);

	return (
		<Menu className="w-44">
			<DropdownMenuGroup>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
					Status Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={activityBar} onCheckedChange={setActivityBar} disabled>
					Activity Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
					Panel
				</DropdownMenuCheckboxItem>
			</DropdownMenuGroup>
		</Menu>
	);
}

function CheckboxIcons() {
	const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });

	return (
		<Menu label="Notifications" className="w-56">
			<DropdownMenuGroup>
				<DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
				<DropdownMenuCheckboxItem checked={notifications.email} onCheckedChange={(email) => setNotifications({ ...notifications, email })}>
					<Mail />
					Email notifications
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={notifications.sms} onCheckedChange={(sms) => setNotifications({ ...notifications, sms })}>
					<MessageSquare />
					SMS notifications
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={notifications.push} onCheckedChange={(push) => setNotifications({ ...notifications, push })}>
					<Bell />
					Push notifications
				</DropdownMenuCheckboxItem>
			</DropdownMenuGroup>
		</Menu>
	);
}

function RadioGroup() {
	const [position, setPosition] = useState("bottom");

	return (
		<Menu className="w-40">
			<DropdownMenuGroup>
				<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</Menu>
	);
}

function RadioIcons() {
	const [method, setMethod] = useState("card");

	return (
		<Menu label="Payment Method" className="w-56">
			<DropdownMenuGroup>
				<DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
				<DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
					<DropdownMenuRadioItem value="card">
						<CreditCard />
						Credit Card
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="paypal">
						<Wallet />
						PayPal
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="bank">
						<Building2 />
						Bank Transfer
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</Menu>
	);
}

function Complex() {
	const [view, setView] = useState({ sidebar: true, statusBar: false, push: true, email: true });
	const [theme, setTheme] = useState("light");

	return (
		<Menu label="Complex Menu" className="w-52">
			<DropdownMenuGroup>
				<DropdownMenuLabel>File</DropdownMenuLabel>
				<DropdownMenuItem>
					<File />
					New File
					<DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Folder />
					New Folder
					<DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<FolderOpen />
						Open Recent
					</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuGroup>
							<DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
							<DropdownMenuItem>
								<FileCode />
								Project Alpha
							</DropdownMenuItem>
							<DropdownMenuItem>
								<FileCode />
								Project Beta
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<MoreHorizontal />
									More Projects
								</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									<DropdownMenuItem>
										<FileCode />
										Project Gamma
									</DropdownMenuItem>
									<DropdownMenuItem>
										<FileCode />
										Project Delta
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<FolderSearch />
							Browse...
						</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Save />
					Save
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Download />
					Export
					<DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuLabel>View</DropdownMenuLabel>
				<DropdownMenuCheckboxItem checked={view.sidebar} onCheckedChange={(sidebar) => setView({ ...view, sidebar })}>
					<Eye />
					Show Sidebar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={view.statusBar} onCheckedChange={(statusBar) => setView({ ...view, statusBar })}>
					<Layout />
					Show Status Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<Palette />
						Theme
					</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuLabel>Appearance</DropdownMenuLabel>
						<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
							<DropdownMenuRadioItem value="light">
								<Sun />
								Light
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">
								<Moon />
								Dark
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">
								<Monitor />
								System
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuLabel>Account</DropdownMenuLabel>
				<DropdownMenuItem>
					<User />
					Profile
					<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCard />
					Billing
				</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<Settings />
						Settings
					</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuGroup>
							<DropdownMenuLabel>Preferences</DropdownMenuLabel>
							<DropdownMenuItem>
								<Keyboard />
								Keyboard Shortcuts
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Languages />
								Language
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Bell />
									Notifications
								</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									<DropdownMenuLabel>Notification Types</DropdownMenuLabel>
									<DropdownMenuCheckboxItem checked={view.push} onCheckedChange={(push) => setView({ ...view, push })}>
										<Bell />
										Push Notifications
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem checked={view.email} onCheckedChange={(email) => setView({ ...view, email })}>
										<Mail />
										Email Notifications
									</DropdownMenuCheckboxItem>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Shield />
							Privacy & Security
						</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<CircleHelp />
					Help & Support
				</DropdownMenuItem>
				<DropdownMenuItem>
					<FileText />
					Documentation
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuItem variant="destructive">
				<LogOut />
				Sign Out
				<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
			</DropdownMenuItem>
		</Menu>
	);
}

export default function DropdownMenuPage() {
	return (
		<>
			<ContentHeader title="Dropdown Menu" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Basic" description="A label, a group of items, a separator and a disabled item.">
					<Menu>
						<DropdownMenuGroup>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>GitHub</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuItem disabled>API</DropdownMenuItem>
					</Menu>
				</ExampleCard>

				<ExampleCard title="Submenu" description="A sub trigger opens a nested menu, which can nest again.">
					<Menu>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Message</DropdownMenuItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
									<DropdownMenuSubContent>
										<DropdownMenuItem>Calendly</DropdownMenuItem>
										<DropdownMenuItem>Slack</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Webhook</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuSub>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Advanced...</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuSub>
						<DropdownMenuItem>
							New Team
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</Menu>
				</ExampleCard>

				<ExampleCard title="Shortcuts" description="DropdownMenuShortcut lines a key hint up on the right.">
					<Menu className="w-48">
						<DropdownMenuGroup>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuItem>
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Billing
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Settings
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							Log out
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</Menu>
				</ExampleCard>

				<ExampleCard title="Icons" description="An icon before each label.">
					<Menu>
						<DropdownMenuItem>
							<User />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CreditCard />
							Billing
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings />
							Settings
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem variant="destructive">
							<LogOut />
							Log out
						</DropdownMenuItem>
					</Menu>
				</ExampleCard>

				<ExampleCard title="Checkboxes" description="Checkbox items toggle a setting each.">
					<Checkboxes />
				</ExampleCard>

				<ExampleCard title="Checkboxes icons" description="Checkbox items with an icon.">
					<CheckboxIcons />
				</ExampleCard>

				<ExampleCard title="Radio group" description="Radio items pick one value from a set.">
					<RadioGroup />
				</ExampleCard>

				<ExampleCard title="Radio icons" description="Radio items with an icon.">
					<RadioIcons />
				</ExampleCard>

				<ExampleCard title="Destructive" description="The destructive variant marks an item that deletes something.">
					<Menu label="Actions">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Pencil />
								Edit
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Share />
								Share
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem variant="destructive">
							<Trash />
							Delete
						</DropdownMenuItem>
					</Menu>
				</ExampleCard>

				<ExampleCard title="Avatar" description="An avatar as the trigger, as in an account menu.">
					<DropdownMenu>
						<DropdownMenuTrigger className="rounded-full">
							<Avatar src="/img/team/1.jpg" alt="Account" className="size-10" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<BadgeCheck />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCard />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Bell />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut />
								Sign Out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</ExampleCard>

				<ExampleCard title="Complex" description="Groups, shortcuts, checkboxes, radios and nested submenus together.">
					<Complex />
				</ExampleCard>
			</div>
		</>
	);
}
