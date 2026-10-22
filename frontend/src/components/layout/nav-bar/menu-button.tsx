"use client";

import React from "react";

import {useSidebar} from "@/providers/sidebar-provider";

import NavButton from "./nav-button";

/** Below sm: opens the page's own sidebar when it has one, else the site menu. */
const MenuButton: React.FunctionComponent = () => {
    const {openDrawer} = useSidebar();

    return (
        <NavButton onClick={openDrawer}>
            <svg width="15" height="12" viewBox="0 0 16 13" fill="none" className="pointer-events-none">
                <path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="sr-only">Open sidebar</span>
        </NavButton>
    );
};

export default MenuButton;
