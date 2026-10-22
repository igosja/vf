"use client";

import React, {useEffect, useRef} from "react";

import NavBar from "@/components/layout/nav-bar/nav-bar";
import Sidebar from "@/components/layout/sidebar/sidebar";
import {MessagesPanel} from "@/features/messages";
import {NotificationsPanel} from "@/features/notifications";
import {SearchPanel} from "@/features/search";
import {TasksPanel} from "@/features/todo";
import SidebarProvider from "@/providers/sidebar-provider";
import {ScrollArea} from "@/components/ui/scroll-area";
import {usePathname} from "next/navigation";

const AppLayout = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const viewport = useRef<HTMLDivElement>(null);
    useEffect(() => {
        viewport.current?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <SidebarProvider>
            <Sidebar/>
            App layout
            <ScrollArea viewportRef={viewport} className="h-screen print:h-auto" scrollbarClassName="z-9 print:hidden">
                {/* A page with its own sidebar sits that sidebar flush against the rail. Printed, the page fills the sheet. */}
                <main className="px-4 pb-14 sm:pe-17 sm:pb-0 xl:pl-28.5 xl:has-data-[slot=secondary-sidebar]:pl-24 print:p-0">{children}</main>
            </ScrollArea>
            <NavBar
                panels={
                    <>
                        <SearchPanel/>
                        <NotificationsPanel/>
                        <MessagesPanel/>
                        <TasksPanel/>
                    </>
                }
            />
        </SidebarProvider>
    );
};

export default AppLayout;
