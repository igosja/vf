import React from "react";

/** Hamburger icon of the buttons that open the sidebar drawer. */
const MenuIcon: React.FunctionComponent = () => {
    return (
        <svg width="15" height="12" viewBox="0 0 16 13" fill="none" className="pointer-events-none">
            <path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default MenuIcon;
