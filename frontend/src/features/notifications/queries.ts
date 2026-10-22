import {NOTIFICATIONS} from "./mock-data";

/** Notifications, unread first. Swap the mock for a backend request later. */
export const getNotifications = () => [
    ...NOTIFICATIONS.filter((item) => !item.read),
    ...NOTIFICATIONS.filter((item) => item.read),
];
