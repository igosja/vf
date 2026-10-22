import React from "react";

import {cn} from "@/lib/utils";

/** Round icon button of the nav bar. */
const NavButton: React.FunctionComponent<React.ComponentProps<"button">> = ({className, ...props}) => {
    return (
        <button
            type="button"
            className={cn(
                "grid avatar-mask size-9 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none data-[state=open]:bg-accent [&_svg]:size-5",
                className
            )}
            {...props}
        />
    );
};

export default NavButton;
