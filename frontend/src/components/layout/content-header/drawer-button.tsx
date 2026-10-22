"use client";

import React from "react";

import MenuIcon from "@/components/ui/menu-icon";
import {useSidebar} from "@/providers/sidebar-provider";

/** From sm to xl: opens the page's own sidebar when it has one, else the site menu. */
const DrawerButton: React.FunctionComponent = () => {
    const {openDrawer} = useSidebar();

    return (
        <button
            type="button"
            onClick={openDrawer}
            className="hidden avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-accent sm:grid xl:hidden"
        >
            <MenuIcon/>
            <span className="sr-only">Open sidebar</span>
        </button>
    );
};

export default DrawerButton;
