export type DirectMessage = {
    sender: string;
    message: string;
    time: string;
    read: boolean;
    avatar?: string;
    /** Shown with `color` when there is no avatar. */
    initial?: string;
    color?: string;
};
