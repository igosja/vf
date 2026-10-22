import React from "react";

import {cn} from "@/lib/utils";

/** The small square-ish icon button used in card and panel headers. */
const IconButton: React.FunctionComponent<React.ComponentProps<"button">> = ({className, ...props}) => {
    return (
        <button
            type="button"
            className={cn(
                "grid avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-accent focus-visible:bg-accent data-[state=open]:bg-accent",
                className
            )}
            {...props}
        />
    );
};

export default IconButton;
