"use client";

import React, {useState, useSyncExternalStore} from "react";
import {createPortal} from "react-dom";

import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";

type NavPanelProps = {
    trigger: React.ReactNode;
    title: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
};

const subscribe = () => () => {};

/** A side panel opened from the nav bar: notifications, messages, tasks and search. */
const NavPanel: React.FunctionComponent<NavPanelProps> = ({trigger, title, actions, children}) => {
    const [open, setOpen] = useState(false);
    // document.body only exists in the browser; the backdrop joins it after hydration.
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    return (
        // Not modal, so the page behind keeps scrolling while a panel is open.
        <Sheet open={open} onOpenChange={setOpen} modal={false}>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetContent
                showCloseButton={false}
                className="top-3 right-3 bottom-17 h-auto w-80 max-w-11/12 gap-0 rounded-2xl border-0 bg-card px-6 py-1.5 shadow-none ease-out data-[state=closed]:duration-350 data-[state=closed]:fade-out-0 data-[state=open]:duration-350 data-[state=open]:fade-in-0 sm:inset-y-2 sm:right-2"
            >
                <div className="flex h-11 shrink-0 items-center">
                    <SheetTitle className="font-medium text-emphasis-foreground">{title}</SheetTitle>
                    <SheetDescription className="sr-only">{title}</SheetDescription>
                    <div className="-mr-2.5 ml-auto flex gap-1">{actions}</div>
                </div>
                {children}
            </SheetContent>

            {/* A non-modal sheet has no overlay of its own. This one sits under the nav bar. */}
            {mounted && createPortal(
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none fixed inset-0 z-9 bg-backdrop/50 opacity-0 backdrop-blur-xs transition-opacity duration-350 dark:bg-backdrop",
                        open && "opacity-100"
                    )}
                />,
                document.body
            )}
        </Sheet>
    );
};

export default NavPanel;
