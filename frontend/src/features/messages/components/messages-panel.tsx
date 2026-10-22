import React from "react";
import {AppWindow, MessageSquareText, Plus} from "lucide-react";

import NavButton from "@/components/layout/nav-bar/nav-button";
import NavCount from "@/components/layout/nav-bar/nav-count";
import NavPanel from "@/components/layout/nav-bar/nav-panel";
import Avatar from "@/components/ui/avatar";
import IconButton from "@/components/ui/icon-button";
import {cn} from "@/lib/utils";

import {getDirectMessages} from "../queries";

/** Nav bar direct messages panel. Hidden below sm. */
const MessagesPanel: React.FunctionComponent = () => {
    const messages = getDirectMessages();

    return (
        <li className="relative hidden sm:block">
            <NavPanel
                title="Direct Messages"
                trigger={
                    <NavButton>
                        <MessageSquareText/>
                        <span className="sr-only">Direct messages</span>
                    </NavButton>
                }
                actions={
                    <>
                        <IconButton>
                            <Plus/>
                            <span className="sr-only">New message</span>
                        </IconButton>
                        <IconButton>
                            <AppWindow/>
                            <span className="sr-only">Open messages</span>
                        </IconButton>
                    </>
                }
            >
                <div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
                    {messages.map((item) => (
                        <a key={item.sender} href="#" className="flex items-center gap-3 px-6 py-2.5 text-foreground hover:bg-accent">
                            <Avatar src={item.avatar} initial={item.initial} color={item.color} alt={item.sender}/>
                            <span className="flex-1">
                                <span className={cn("block text-sm", item.read ? "font-medium text-emphasis-foreground" : "text-foreground")}>
                                    {item.message}
                                </span>
                                <span className="block text-xs text-muted-foreground">{item.time}</span>
                            </span>
                            {item.read && <i className="mb-4 size-1.5 rounded-full bg-primary"/>}
                        </a>
                    ))}
                </div>
            </NavPanel>
            <NavCount value="12"/>
        </li>
    );
};

export default MessagesPanel;
