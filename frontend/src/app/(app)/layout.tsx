import React from "react";

import NavBar from "@/components/layout/nav-bar/nav-bar";
import Sidebar from "@/components/layout/sidebar/sidebar";
import {MessagesPanel} from "@/features/messages";
import {NotificationsPanel} from "@/features/notifications";
import {SearchPanel} from "@/features/search";
import {TasksPanel} from "@/features/todo";
import SidebarProvider from "@/providers/sidebar-provider";

const AppLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar/>
            App layout
            {children}
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
