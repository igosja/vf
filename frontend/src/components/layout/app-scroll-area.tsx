"use client";

import React, {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";

import {ScrollArea} from "@/components/ui/scroll-area";

/**
 * The page scrolls here rather than in the window, so every backdrop covers its
 * scrollbar. A new page starts back at the top.
 */
const AppScrollArea: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const pathname = usePathname();
    const viewport = useRef<HTMLDivElement>(null);

    useEffect(() => {
        viewport.current?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <ScrollArea viewportRef={viewport} className="h-screen print:h-auto" scrollbarClassName="z-9 print:hidden">
            {/* A page with its own sidebar sits that sidebar flush against the rail. Printed, the page fills the sheet. */}
            <main className="px-4 pb-14 sm:pe-17 sm:pb-0 xl:pl-28.5 xl:has-data-[slot=secondary-sidebar]:pl-24 print:p-0">{children}</main>
        </ScrollArea>
    );
};

export default AppScrollArea;
