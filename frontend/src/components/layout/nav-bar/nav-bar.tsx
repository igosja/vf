import React from "react";

import LanguageMenu from "./language-menu";
import MenuButton from "./menu-button";
import ProfileMenu from "./profile-menu";
import ThemeMenu from "./theme-menu";

type NavBarProps = {
    /** Feature panels (search, notifications, ...), each rendered as its own <li>. */
    panels?: React.ReactNode;
};

/** Right column on desktop, bottom bar on mobile. Needs ThemeProvider and SidebarProvider. */
const NavBar: React.FunctionComponent<NavBarProps> = ({panels}) => {
    return (
        // From sm up the column is see-through and lets the pointer through to the
        // page scrollbar beneath it; only the buttons themselves catch clicks.
        <aside className="fixed inset-x-0 bottom-0 z-10 flex h-14 bg-popover px-1 shadow-lg sm:pointer-events-none sm:inset-x-auto sm:top-0 sm:right-0 sm:h-full sm:w-17 sm:flex-col sm:bg-transparent sm:px-0 sm:shadow-none print:hidden">
            <ul className="flex w-full flex-row-reverse items-center justify-around *:pointer-events-auto sm:mt-3 sm:flex-col sm:justify-start sm:gap-5">
                <li>
                    <ProfileMenu/>
                </li>
                <li className="hidden sm:block">
                    <LanguageMenu/>
                </li>
                {panels}
                <li>
                    <ThemeMenu/>
                </li>
                <li className="sm:hidden">
                    <MenuButton/>
                </li>
            </ul>
        </aside>
    );
};

export default NavBar;
