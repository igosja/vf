'use client'

import React, {useEffect} from 'react';
import Logo from "@/app/partials/_logo";

const PageLoader = () => {
    useEffect(() => {
        if (document) {
            const LOADER_EL = document.getElementById("page-loader");

            addEventListener("load", (event) => {
                if (LOADER_EL) {
                    LOADER_EL.classList.add("opacity-0");

                    setTimeout(() => {
                        LOADER_EL.remove();
                    }, 500);
                }
            });
        }
    }, []);

    return (
        <div id="page-loader" className="placeholder-glow">
            <div className="w-24 h-24 d-grid place-items-center">
                <Logo/>
                <div className="spinner-border w-20 h-20 position-absolute" role="status">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;