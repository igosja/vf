import React from "react";

/** Red counter on top of a nav bar button. Put it inside a `relative` parent. */
const NavCount: React.FunctionComponent<{value: string}> = ({value}) => {
    return (
        <span className="pointer-events-none absolute -top-0.5 left-1/2 flex h-4 items-center rounded-xl bg-red-400 px-1 text-[0.7rem] leading-none font-medium text-white dark:text-black">
            {value}
        </span>
    );
};

export default NavCount;
