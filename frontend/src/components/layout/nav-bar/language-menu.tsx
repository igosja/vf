/* eslint-disable @next/next/no-img-element */
import React from "react";

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

import NavButton from "./nav-button";

const LANGUAGES = [
    {label: "Japanese", flag: "/img/flags/japan.svg"},
    {label: "German", flag: "/img/flags/germany.svg"},
    {label: "Chinese", flag: "/img/flags/china.svg"},
    {label: "French", flag: "/img/flags/france.svg"},
];

const LanguageMenu: React.FunctionComponent = () => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <NavButton>
                    <img className="size-5 rounded-full" src="/img/flags/england.svg" alt="English"/>
                </NavButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left" align="start">
                {LANGUAGES.map((language) => (
                    <DropdownMenuItem key={language.label}>
                        <img className="size-5 rounded-full" src={language.flag} alt=""/>
                        {language.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageMenu;
