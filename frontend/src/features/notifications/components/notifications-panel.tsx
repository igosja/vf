import React from "react";
import {AppWindow, Bell, CheckCheck} from "lucide-react";

import NavButton from "@/components/layout/nav-bar/nav-button";
import NavCount from "@/components/layout/nav-bar/nav-count";
import NavPanel from "@/components/layout/nav-bar/nav-panel";
import IconButton from "@/components/ui/icon-button";
import {cn} from "@/lib/utils";

import {getNotifications} from "../queries";

/** Nav bar notifications panel. */
const NotificationsPanel: React.FunctionComponent = () => {
    const notifications = getNotifications();

    return (
        <li className="relative">
            <NavPanel
                title="Notifications"
                trigger={
                    <NavButton className="relative overflow-visible">
                        <Bell/>
                        <span className="sr-only">Notifications</span>
                    </NavButton>
                }
                actions={
                    <>
                        <IconButton>
                            <CheckCheck/>
                            <span className="sr-only">Mark all as read</span>
                        </IconButton>
                        <IconButton>
                            <AppWindow/>
                            <span className="sr-only">Open notifications</span>
                        </IconButton>
                    </>
                }
            >
                <div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
                    {notifications.map((item, index) => (
                        <a key={index} href="#" className="flex items-center gap-4 px-6 py-2.5 text-foreground hover:bg-accent">
                            <span className={cn("grid avatar-mask size-8 shrink-0 place-items-center text-white dark:text-black", item.color)}>
                                <item.icon className="size-4.5"/>
                            </span>
                            <span className="flex-1">
                                <span className={cn("block text-sm", item.read ? "text-foreground" : "font-medium text-emphasis-foreground")}>
                                    {item.title}
                                </span>
                                <span className="block text-xs text-muted-foreground">{item.time}</span>
                            </span>
                            {!item.read && <i className="mb-5 size-1.5 rounded-full bg-primary"/>}
                        </a>
                    ))}
                </div>
            </NavPanel>
            <NavCount value="99+"/>
        </li>
    );
};

export default NotificationsPanel;
