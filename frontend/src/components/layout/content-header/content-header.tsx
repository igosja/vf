import React from "react";

import Breadcrumb from "./breadcrumb";
import DrawerButton from "./drawer-button";
import PageNav from "./page-nav";

type ContentHeaderProps = {
    title?: string;
    /** The trail ending at the current page. */
    breadcrumb?: string[];
    /** Adds a Navigate menu that jumps to each card on the page. */
    toc?: boolean;
    /** Turn off while a selection or preview takes the bar over. */
    menu?: boolean;
    children?: React.ReactNode;
};

/**
 * The sticky bar at the top of every page: drawer toggle, title, page actions.
 * App pages leave out the title and fill the bar with a search field and actions instead.
 */
const ContentHeader: React.FunctionComponent<ContentHeaderProps> = ({title, breadcrumb, toc, menu = true, children}) => {
    return (
        <header className="sticky top-0 z-7 flex h-16 items-center gap-4 bg-linear-to-t from-transparent to-background to-20% sm:pr-2 print:hidden">
            {menu && <DrawerButton/>}

            {title && <h2 className="text-base font-medium xl:pl-2">{title}</h2>}

            {breadcrumb && <Breadcrumb items={breadcrumb}/>}

            {children}

            {toc && <PageNav/>}
        </header>
    );
};

export default ContentHeader;
