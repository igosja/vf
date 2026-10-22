import type {LucideIcon} from "lucide-react";

export type NavLink = {
    label: string;
    to: string;
    icon: LucideIcon;
};

/** A link with children opens in place instead of navigating. */
export type NavGroup = {
    label: string;
    icon: LucideIcon;
    children: { label: string; to: string }[];
};

export type NavItem = NavLink | NavGroup;

export type NavSection = {
    label: string;
    icon: LucideIcon;
    items: NavItem[];
};
