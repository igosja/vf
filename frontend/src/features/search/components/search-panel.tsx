import React from "react";
import {Clock, Eraser, Search, Settings} from "lucide-react";

import NavButton from "@/components/layout/nav-bar/nav-button";
import NavPanel from "@/components/layout/nav-bar/nav-panel";
import IconButton from "@/components/ui/icon-button";
import SearchField from "@/components/ui/search-field";

import {getRecentSearches} from "../queries";

/** Nav bar search panel with the recent searches. */
const SearchPanel: React.FunctionComponent = () => {
    const recentSearches = getRecentSearches();

    return (
        <li>
            <NavPanel
                title="Search"
                trigger={
                    <NavButton>
                        <Search/>
                        <span className="sr-only">Search</span>
                    </NavButton>
                }
                actions={
                    <>
                        <IconButton>
                            <Eraser/>
                            <span className="sr-only">Clear recent searches</span>
                        </IconButton>
                        <IconButton>
                            <Settings/>
                            <span className="sr-only">Settings</span>
                        </IconButton>
                    </>
                }
            >
                <SearchField className="-mx-1 mb-5 border-accent bg-accent" placeholder="Enter a keyword" aria-label="Search" autoFocus/>

                <div className="mb-1 text-sm text-muted-foreground">Recent Searches</div>

                <div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
                    {recentSearches.map((item) => (
                        <button key={item} type="button" className="flex w-full items-center gap-2 px-6 py-2.5 text-left hover:bg-accent">
                            <Clock className="-ml-0.5 size-4.5"/>
                            {item}
                        </button>
                    ))}
                </div>
            </NavPanel>
        </li>
    );
};

export default SearchPanel;
