import React from "react";

import {cn} from "@/lib/utils";

type AvatarProps = {
    src?: string;
    initial?: string;
    color?: string;
    alt?: string;
    className?: string;
};

/**
 * A person's photo in the avatar mask, or their initial on a `color` tile when
 * there is no photo. Size it with `className`; it defaults to size-8.
 */
const Avatar: React.FunctionComponent<AvatarProps> = ({src, initial, color, alt = "", className}) => {
    if (src) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img className={cn("avatar-mask size-8 shrink-0 object-cover", className)} src={src} alt={alt}/>;
    }

    return (
        <span className={cn("grid avatar-mask size-8 shrink-0 place-items-center text-sm font-medium text-white uppercase dark:text-black", color, className)}>
            {initial}
        </span>
    );
};

export default Avatar;
