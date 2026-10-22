"use client";

import React, {useState} from "react";
import {ChevronDown, List} from "lucide-react";

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

type Section = {
    id: string;
    label: string;
};

/** Finds the page's own cards and gives each an id from its title, so the links can jump to it. */
const collectSections = (): Section[] => {
    // A card shown inside another, as a sample, stays out.
    const titles = [...document.querySelectorAll<HTMLElement>("main [data-slot=card-title]")].filter(
        (title) => !title.closest("[data-slot=card]")?.parentElement?.closest("[data-slot=card]")
    );

    return titles.map((title) => {
        const label = title.textContent ?? "";
        const id = label.trim().replace(/\s+/g, "-").toLowerCase();
        title.closest("[data-slot=card]")?.setAttribute("id", id);
        return {id, label};
    });
};

/** Navigate menu that lists every card title on the page. */
const PageNav: React.FunctionComponent = () => {
    const [sections, setSections] = useState<Section[]>([]);

    // Read when the menu opens, so cards rendered after the page loaded are listed too.
    const onOpenChange = (open: boolean) => {
        if (open) {
            setSections(collectSections());
        }
    };

    return (
        <DropdownMenu modal={false} onOpenChange={onOpenChange}>
            <DropdownMenuTrigger className="ml-auto flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm text-emphasis-foreground transition-colors duration-300 hover:bg-accent data-[state=open]:bg-accent">
                <List/>
                Navigate
                <ChevronDown className="size-3.5"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {sections.map((section) => (
                    <DropdownMenuItem key={section.id} asChild>
                        <a href={`#${section.id}`}>{section.label}</a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PageNav;
