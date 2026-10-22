import React from "react";
import {CircleDollarSign, CircleUser, LogOut, Settings} from "lucide-react";

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

import NavButton from "./nav-button";

const ProfileMenu: React.FunctionComponent = () => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <NavButton className="size-11">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="avatar-mask size-9" src="/img/contacts/2.jpg" alt="Your profile"/>
                </NavButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left" align="start">
                <DropdownMenuItem>
                    <CircleUser/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CircleDollarSign/>
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings/>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileMenu;
