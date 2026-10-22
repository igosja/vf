"use client";

import {useEffect, useRef, useState, type KeyboardEvent} from "react";
import {usePathname} from "next/navigation";

import {NAVIGATION} from "@/config/navigation";

const CLOSE_DELAY = 60;
const SWAP_OUT = 200;
const SWAP_GAP = 60;
const SWAP_IN = 200;

const useSidebarFlyout = () => {
    const pathname = usePathname();

    const [previewing, setPreviewing] = useState<number | null>(null);
    const [switching, setSwitching] = useState(false);
    const [lastPathname, setLastPathname] = useState(pathname);
    const closeTimer = useRef<number>(undefined);
    const lists = useRef<(HTMLDivElement | null)[]>([]);
    const triggers = useRef<(HTMLButtonElement | null)[]>([]);

    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setPreviewing(null);
    }

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    const show = (index: number) => {
        window.clearTimeout(closeTimer.current);
        if (index === previewing) {
            return;
        }

        const isSwitch = previewing !== null;
        setSwitching(isSwitch);
        setPreviewing(index);

        if (isSwitch && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const direction = index > previewing ? 1 : -1;
            lists.current[index]?.animate([{transform: `translateY(${direction * 6}px)`}, {transform: "none"}], {
                duration: SWAP_IN,
                delay: SWAP_OUT + SWAP_GAP,
                easing: "ease-out",
                fill: "backwards",
            });
        }
    };

    const hide = () => {
        window.clearTimeout(closeTimer.current);
        setPreviewing(null);
    };

    const cancelHide = () => window.clearTimeout(closeTimer.current);

    const scheduleHide = () => {
        closeTimer.current = window.setTimeout(hide, CLOSE_DELAY);
    };

    const onTriggerKeyDown = (event: KeyboardEvent, index: number) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const step = event.key === "ArrowDown" ? 1 : -1;
            triggers.current[(index + step + NAVIGATION.length) % NAVIGATION.length]?.focus();
        } else if (event.key === "Enter" || event.key === " " || event.key === "ArrowRight") {
            event.preventDefault();
            show(index);
            lists.current[index]?.querySelector<HTMLElement>("a, button")?.focus();
        }
    };

    return {pathname, previewing, switching, lists, triggers, show, hide, cancelHide, scheduleHide, onTriggerKeyDown};
};

export default useSidebarFlyout;
