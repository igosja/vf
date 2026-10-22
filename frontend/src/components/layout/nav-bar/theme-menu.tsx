"use client";

import React from "react";
import {Monitor, Moon, Sun} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {useTheme, type Theme} from "@/providers/theme-provider";

import NavButton from "./nav-button";

/** Light, dark or system colour mode. */
const ThemeMenu: React.FunctionComponent = () => {
    const {theme, resolvedTheme, setTheme} = useTheme();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <NavButton className="relative overflow-hidden">
                    <Sun className={cn("absolute transition duration-300", resolvedTheme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0")}/>
                    <Moon className={cn("absolute transition duration-300", resolvedTheme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0")}/>
                    <span className="sr-only">Colour mode</span>
                </NavButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left" align="start">
                <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as Theme)}>
                    <DropdownMenuRadioItem value="light">
                        <Sun/>
                        Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                        <Moon/>
                        Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                        <Monitor/>
                        System
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeMenu;
