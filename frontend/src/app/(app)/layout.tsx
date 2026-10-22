import React from "react";

import Sidebar from "@/components/layout/sidebar/sidebar";
import SidebarProvider from "@/providers/sidebar-provider";

const AppLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar/>
            App layout
            {children}
        </SidebarProvider>
    );
};

export default AppLayout;
