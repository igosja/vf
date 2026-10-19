import type { LucideIcon } from "lucide-react";
import { Bug, CircleDollarSign, CircleUser, Crosshair, LifeBuoy, MessageSquareText, PhoneCall, ShoppingBasket } from "lucide-react";

export type Notification = {
	id: string;
	title: string;
	read: boolean;
	time: string;
	icon: LucideIcon;
	/** Background utility for the icon tile. */
	color: string;
};

export const NOTIFICATIONS: Notification[] = [
	{ id: "#204", title: "New sales order received", read: false, time: "10 minutes ago", icon: CircleDollarSign, color: "bg-emerald-500" },
	{ id: "#3102", title: "New user account registered", read: false, time: "23 minutes ago", icon: CircleUser, color: "bg-emerald-500" },
	{ id: "#8973", title: "New product review received", read: false, time: "48 minutes ago", icon: PhoneCall, color: "bg-primary" },
	{ id: "#8972", title: "New product review received", read: false, time: "50 minutes ago", icon: PhoneCall, color: "bg-primary" },
	{ id: "#203", title: "New sales order received", read: false, time: "55 minutes ago", icon: CircleDollarSign, color: "bg-emerald-500" },
	{ id: "#765", title: "Review unpaid orders", read: true, time: "2 hours ago", icon: ShoppingBasket, color: "bg-amber-400" },
	{ id: "#721", title: "New issue filed by customer", read: false, time: "2 hours ago", icon: Bug, color: "bg-red-400" },
	{ id: "#976", title: "New comment received", read: true, time: "3 hours ago", icon: MessageSquareText, color: "bg-cyan-500" },
	{ id: "#45", title: "Thread responded and closed", read: false, time: "5 hours ago", icon: Crosshair, color: "bg-cyan-500" },
	{ id: "#8972", title: "Thread re-opened by administrator", read: true, time: "6 hours ago", icon: Crosshair, color: "bg-cyan-500" },
	{ id: "#432", title: "New support request received", read: true, time: "8 hours ago", icon: LifeBuoy, color: "bg-amber-400" },
	{ id: "#720", title: "New issue filed by customer", read: true, time: "2 days ago", icon: Bug, color: "bg-red-400" },
];
