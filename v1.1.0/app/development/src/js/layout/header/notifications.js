import { avatarIcon } from "../../utils";

export const notifications = () => {
	const WRAPPER = document.getElementById("top-notifications");

	if (WRAPPER) {
		let list = "";
		const DATA = [
			{
				title: "New sales order received",
				read: false,
				id: "#204",
				time: "10 minutes ago",
				icon: "ph-currency-circle-dollar",
				bg: "bg-success",
				color: "text-success",
			},
			{
				title: "New user account registered",
				read: false,
				id: "#3102",
				time: "23 minutes ago",
				icon: "ph-user-circle",
				bg: "bg-success",
				color: "text-success",
			},
			{
				title: "New product review received",
				read: false,
				id: "#8973",
				time: "48 minutes ago",
				icon: "ph-phone-call",
				bg: "bg-primary",
				color: "text-primary",
			},
			{
				title: "New product review received",
				read: false,
				id: "#8972",
				time: "50 minutes ago",
				icon: "ph-phone-call",
				bg: "bg-primary",
				color: "text-primary",
			},
			{
				title: "New sales order received",
				read: false,
				id: "#203",
				time: "55 minutes ago",
				icon: "ph-currency-circle-dollar",
				bg: "bg-success",
				color: "text-success",
			},
			{
				title: "Review unpaid orders",
				read: true,
				id: "#765",
				time: "2 hours ago",
				icon: "ph-basket",
				bg: "bg-warning",
				color: "text-warning",
			},
			{
				title: "New issue filed by customer",
				read: false,
				id: "#721",
				time: "2 hours ago",
				icon: "ph-bug",
				bg: "bg-danger",
				color: "text-danger",
			},
			{
				title: "New comment received",
				read: true,
				id: "#976",
				time: "3 hours ago",
				icon: "ph-chat-centered-text",
				bg: "bg-info",
				color: "text-info",
			},
			{
				title: "Thread responded and closed",
				read: false,
				id: "#45",
				time: "5 hours ago",
				icon: "ph-crosshair-simple",
				bg: "bg-info",
				color: "text-info",
			},
			{
				title: "Thread re-opened by administrator",
				read: true,
				id: "#8972",
				time: "6 hours ago",
				icon: "ph-crosshair-simple",
				bg: "bg-info",
				color: "text-info",
			},
			{
				title: "New support request received",
				read: true,
				id: "#432",
				time: "8 hours ago",
				icon: "ph-lifebuoy",
				bg: "bg-warning",
				color: "text-warning",
			},
			{
				title: "New issue filed by customer",
				read: true,
				id: "#720",
				time: "2 days ago",
				icon: "ph-bug",
				bg: "bg-danger",
				color: "text-danger",
			},
		];

		// Filter unread and read items
		const UNREAD_ITEMS = [];
		const READ_ITEMS = [];
		DATA.forEach((item) => {
			if (!item.read) {
				UNREAD_ITEMS.push(item);
			} else {
				READ_ITEMS.push(item);
			}
		});

		// Function to return item
		const notificationItem = (icon, bg, title, time, type = "unread") => {
			return `<a href="" class="bg-hover d-flex align-items-center py-2.5 px-6 gap-4">
						<i class="avatar avatar-md text-invert ph ${icon} ${bg}"></i>

						<div class="flex-grow-1">
							<div class="fs-7 ${type === "unread" ? "text-body-emphasis fw-medium" : "text-body"}">${title}</div>
							<div class="fs-8 text-body-secondary">${time}</div>
						</div>

						${type === "unread" ? '<i class="w-1.5 h-1.5 rounded-circle mb-5 bg-primary"></i>' : ""}
					</a>`;
		};

		// Concatenate unread items at the beginning
		UNREAD_ITEMS.forEach((item) => {
			list += `${notificationItem(item.icon, item.bg, item.title, item.time, "unread")}`;
		});

		// Concatenate read items after unread items
		READ_ITEMS.forEach((item) => {
			list += `${notificationItem(item.icon, item.bg, item.title, item.time, "read")}`;
		});

		WRAPPER.innerHTML = list;
	}
};
