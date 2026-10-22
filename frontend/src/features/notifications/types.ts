import type {LucideIcon} from "lucide-react";

export type Notification = {
    id: string;
    title: string;
    read: boolean;
    time: string;
    icon: LucideIcon;
    /** Background utility for the icon tile. */
    color: string;
};
