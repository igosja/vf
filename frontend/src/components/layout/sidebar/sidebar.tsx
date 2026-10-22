import React from "react";

import SidebarDrawer from "./sidebar-drawer";
import SidebarRail from "./sidebar-rail";

const Sidebar: React.FunctionComponent = () => {
    return (
        <>
            <SidebarRail/>
            <SidebarDrawer/>
        </>
    );
};

export default Sidebar;
