"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Logo from "@/components/ui/logo";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle} from "@/components/ui/sheet";
import {NAVIGATION} from "@/config/navigation";
import {useSidebar} from "@/providers/sidebar-provider";

import NavList from "./nav-list";

const SidebarDrawer: React.FunctionComponent = () => {
    const pathname = usePathname();
    const {open, setOpen, hasSecondary, setSecondaryOpen} = useSidebar();

    const onNavigate = (to: string) => {
        setOpen(false);
        if (to === pathname && hasSecondary) {
            setSecondaryOpen(true);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
                side="left"
                showCloseButton={false}
                className="inset-y-2 left-2 h-auto w-72 gap-0 overflow-visible rounded-2xl border-0 bg-card p-0 xl:hidden"
            >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>

                <div className="no-scrollbar h-full overflow-y-auto p-6">
                    <Link href="/" onClick={() => setOpen(false)} className="-mt-2 mb-6 flex items-center gap-3 text-emphasis-foreground">
                        <Logo/>
                        <span className="text-lg font-medium">Materia</span>
                    </Link>

                    {NAVIGATION.map((section) => (
                        <div key={section.label} className="py-3">
                            <div className="mb-2 text-xs font-medium text-muted-foreground">{section.label}</div>
                            <div className="-mx-4">
                                <NavList items={section.items} onNavigate={onNavigate}/>
                            </div>
                        </div>
                    ))}
                </div>

                <SheetClose className="absolute inset-y-0 -right-3.5 my-auto h-20 w-1.5 rounded-full bg-card hover:opacity-85">
                    <span className="sr-only">Close sidebar</span>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
};

export default SidebarDrawer;
