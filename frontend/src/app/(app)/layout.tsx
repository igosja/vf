import React from "react";

import AppScrollArea from "@/components/layout/app-scroll-area";
import NavBar from "@/components/layout/nav-bar/nav-bar";
import Sidebar from "@/components/layout/sidebar/sidebar";
import {MessagesPanel} from "@/features/messages";
import {NotificationsPanel} from "@/features/notifications";
import {SearchPanel} from "@/features/search";
import {TasksPanel} from "@/features/todo";
import SidebarProvider from "@/providers/sidebar-provider";

const AppLayout = ({children}: LayoutProps<"/">) => {
    return (
        <SidebarProvider>
            <Sidebar/>
            <AppScrollArea>{children}</AppScrollArea>
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
