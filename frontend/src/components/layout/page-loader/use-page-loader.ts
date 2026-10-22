"use client";

import {useEffect} from "react";

const usePageLoader = () => {
    useEffect(() => {
        const loader = document.getElementById("page-loader");
        if (!loader) {
            return;
        }

        let timer = 0;
        const hide = () => {
            loader.dataset.hiding = "";
            timer = window.setTimeout(() => (loader.style.display = "none"), 500);
        };

        if (document.readyState === "complete") {
            hide();
        } else {
            window.addEventListener("load", hide, {once: true});
        }

        return () => {
            window.removeEventListener("load", hide);
            window.clearTimeout(timer);
        };
    }, []);
};

export default usePageLoader;
