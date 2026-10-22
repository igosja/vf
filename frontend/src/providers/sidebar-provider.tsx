"use client";

import React, {createContext, use, useState} from "react";

type SidebarContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    secondaryOpen: boolean;
    setSecondaryOpen: (open: boolean) => void;
    hasSecondary: boolean;
    setHasSecondary: (has: boolean) => void;
    openDrawer: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

const SidebarProvider: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const [open, setOpen] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);
    const [hasSecondary, setHasSecondary] = useState(false);

    const openDrawer = () => (hasSecondary ? setSecondaryOpen(true) : setOpen(true));

    return (
        <SidebarContext value={{open, setOpen, secondaryOpen, setSecondaryOpen, hasSecondary, setHasSecondary, openDrawer}}>
            {children}
        </SidebarContext>
    );
};

export const useSidebar = () => {
    const context = use(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used inside SidebarProvider");
    }

    return context;
};

export default SidebarProvider;
