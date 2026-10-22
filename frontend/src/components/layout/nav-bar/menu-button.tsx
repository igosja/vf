"use client";

import React from "react";

import MenuIcon from "@/components/ui/menu-icon";
import {useSidebar} from "@/providers/sidebar-provider";

import NavButton from "./nav-button";

/** Below sm: opens the page's own sidebar when it has one, else the site menu. */
const MenuButton: React.FunctionComponent = () => {
    const {openDrawer} = useSidebar();

    return (
        <NavButton onClick={openDrawer}>
            <MenuIcon/>
            <span className="sr-only">Open sidebar</span>
        </NavButton>
    );
};

export default MenuButton;
