"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ChevronRight} from "lucide-react";
import {Collapsible} from "radix-ui";

import {cn} from "@/lib/utils";
import type {NavItem} from "@/types/navigation";

import {matchesPath} from "./utils";

type NavListProps = {
    items: NavItem[];
    onNavigate?: (to: string) => void;
};

const NavList: React.FunctionComponent<NavListProps> = ({items, onNavigate}) => {
    const pathname = usePathname();

    return (
        <ul className="space-y-px">
            {items.map((item) => {
                if ("children" in item) {
                    const active = item.children.some((child) => child.to === pathname);

                    return (
                        <Collapsible.Root asChild key={item.label} defaultOpen={active}>
                            <li className="group/sub">
                                <Collapsible.Trigger
                                    className={cn(
                                        "relative flex h-10 w-full items-center gap-3 rounded-full px-4 text-left whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:bg-accent xl:hover:bg-sidebar-accent",
                                        active && "bg-primary/10 text-primary hover:bg-primary/10"
                                    )}
                                >
                                    <item.icon className="size-5"/>
                                    {item.label}
                                    <ChevronRight
                                        className="ml-auto size-3.5 transition-transform duration-300 group-data-[state=open]/sub:rotate-90"/>
                                </Collapsible.Trigger>

                                <Collapsible.Content
                                    className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                    <ul className="pt-px pb-4 pl-9">
                                        {item.children.map((child) => {
                                            const isActive = matchesPath(child.to, pathname);

                                            return (
                                                <li key={child.to}>
                                                    <Link
                                                        href={child.to}
                                                        aria-current={isActive ? "page" : undefined}
                                                        onClick={() => onNavigate?.(child.to)}
                                                        className={cn(
                                                            "block rounded-full px-3 py-1 whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:text-primary",
                                                            isActive && "text-primary"
                                                        )}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Collapsible.Content>
                            </li>
                        </Collapsible.Root>
                    );
                }

                const isActive = matchesPath(item.to, pathname);

                return (
                    <li key={item.to}>
                        <Link
                            href={item.to}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => onNavigate?.(item.to)}
                            className={cn(
                                "flex h-10 items-center gap-3 rounded-full px-4 whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:bg-accent xl:hover:bg-sidebar-accent",
                                isActive && "bg-primary/10 text-primary hover:bg-primary/10"
                            )}
                        >
                            <item.icon className="size-5"/>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavList;
