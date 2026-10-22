import React from "react";

import SidebarDrawer from "./sidebar-drawer";
import SidebarRail from "./sidebar-rail";

/** Site navigation: an icon rail with flyouts on desktop, a drawer below xl. Needs SidebarProvider. */
const Sidebar: React.FunctionComponent = () => {
    return (
        <>
            <SidebarRail/>
            <SidebarDrawer/>
        </>
    );
};

export default Sidebar;
