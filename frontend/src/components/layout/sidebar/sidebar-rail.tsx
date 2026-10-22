"use client";

import React from "react";
import Link from "next/link";

import Logo from "@/components/ui/logo";
import {NAVIGATION} from "@/config/navigation";
import {cn} from "@/lib/utils";

import NavList from "./nav-list";
import useSidebarFlyout from "./use-sidebar-flyout";
import {sectionOf} from "./utils";

const SidebarRail: React.FunctionComponent = () => {
    const {pathname, previewing, switching, lists, triggers, show, hide, cancelHide, scheduleHide, onTriggerKeyDown} = useSidebarFlyout();
    const current = sectionOf(pathname);

    return (
        <aside
            className="fixed inset-y-0 left-0 z-9 hidden w-24 xl:block print:hidden"
            onMouseEnter={cancelHide}
            onMouseLeave={scheduleHide}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    hide();
                }
            }}
            onKeyDown={(event) => {
                if (event.key === "Escape") {
                    hide();
                }
            }}
        >
            <div className="relative z-20 flex h-full flex-col bg-sidebar">
                <Link href="/" className="mb-4 flex justify-center pt-6 pb-2" aria-label="Home">
                    <Logo/>
                </Link>

                <nav className="flex flex-col" aria-label="Main">
                    {NAVIGATION.map((section, index) => {
                        const highlighted = previewing === null ? index === current : index === previewing;

                        return (
                            <button
                                key={section.label}
                                ref={(el) => {
                                    triggers.current[index] = el;
                                }}
                                type="button"
                                aria-expanded={previewing === index}
                                aria-controls={`sidebar-section-${index}`}
                                onMouseEnter={() => show(index)}
                                onFocus={() => show(index)}
                                onKeyDown={(event) => onTriggerKeyDown(event, index)}
                                className={cn(
                                    "group/rail flex flex-col items-center py-3 text-xs leading-none font-medium text-emphasis-foreground transition-colors duration-200 outline-none",
                                    highlighted && "text-primary"
                                )}
                            >
                                <span className="relative isolate mb-2 inline-flex">
                                    <span
                                        className={cn(
                                            "absolute -inset-x-4 -inset-y-1 -z-10 scale-80 rounded-full bg-primary/10 opacity-0 transition duration-200 group-hover/rail:scale-100 group-hover/rail:opacity-100",
                                            highlighted && "scale-100 opacity-100"
                                        )}
                                    />
                                    <section.icon className="size-5.5"/>
                                </span>
                                {section.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            <div
                className={cn(
                    "invisible absolute inset-y-0 left-24 z-10 w-56 -translate-x-5 rounded-r-2xl border-x border-sidebar-border bg-sidebar opacity-0 shadow-lg transition-all duration-200 ease-in",
                    previewing !== null && "visible translate-x-0 opacity-100 duration-300 ease-out"
                )}
            >
                {NAVIGATION.map((section, index) => (
                    <div
                        key={section.label}
                        id={`sidebar-section-${index}`}
                        ref={(el) => {
                            lists.current[index] = el;
                        }}
                        className={cn(
                            "invisible absolute inset-0 no-scrollbar overflow-y-auto px-3 py-6 opacity-0 transition-all duration-200 ease-in",
                            previewing === index && "visible opacity-100 ease-out",
                            previewing === index && switching && "delay-260"
                        )}
                    >
                        <NavList items={section.items}/>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default SidebarRail;
