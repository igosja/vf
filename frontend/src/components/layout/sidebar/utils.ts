import {NAVIGATION} from "@/config/navigation";

export const matchesPath = (to: string, pathname: string) => {
    if (to === "/") {
        return pathname === "/";
    }

    return pathname === to || pathname.startsWith(`${to}/`);
};

/** Index of the navigation section that holds the current page, or -1. */
export const sectionOf = (pathname: string) =>
    NAVIGATION.findIndex((section) =>
        section.items.some((item) => ("children" in item
            ? item.children.some((child) => child.to === pathname)
            : matchesPath(item.to, pathname)))
    );
