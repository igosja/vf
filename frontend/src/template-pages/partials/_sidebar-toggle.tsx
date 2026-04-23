'use client'

import React, {useEffect} from 'react';

const SidebarToggle = () => {
    const sidebarToggle = () => {
        const SIDEBAR_SECONDARY = document.getElementById("sidebar-secondary");
        const SIDEBAR = document.getElementById("sidebar");
        const SIDEBAR_TOGGLE = document.querySelectorAll(".sidebar-toggle");
        const BACKDROP = document.createElement("button");

        const activeMenu = document.querySelector(".menu a.active");
        let isToggled = false;
        let activeSidebar = SIDEBAR;

        const sidebarClose = () => {
            activeSidebar?.classList.remove("toggled");
            BACKDROP.remove();
            isToggled = false;
        };

        if (SIDEBAR_TOGGLE.length > 0) {
            SIDEBAR_TOGGLE.forEach((el) => {
                BACKDROP.setAttribute("type", "button");
                BACKDROP.setAttribute("class", "backdrop d-xl-none");
                BACKDROP.onclick = () => sidebarClose();

                el.addEventListener("click", (e) => {
                    e.preventDefault();

                    // Check if there is a secondary sidebar
                    if (SIDEBAR_SECONDARY) {
                        activeSidebar = SIDEBAR_SECONDARY;
                    }

                    isToggled = !isToggled;
                    activeSidebar?.classList.toggle("toggled", isToggled);
                    if (isToggled) {
                        activeSidebar?.insertAdjacentElement("afterend", BACKDROP);
                    } else {
                        BACKDROP.remove();
                    }
                });
            });

            // Close
            const SIDEBAR_CLOSE = document.querySelectorAll(".sidebar-close");
            SIDEBAR_CLOSE.forEach((el) => {
                el.addEventListener("click", (e) => {
                    e.preventDefault();
                    sidebarClose();
                });
            });

            // Back
            const SIDEBAR_BACK = document.getElementById("sidebar-back");
            if (SIDEBAR_BACK) {
                SIDEBAR_BACK.addEventListener("click", (e) => {
                    e.preventDefault();
                    SIDEBAR_SECONDARY?.classList.remove("toggled");
                    SIDEBAR?.classList.add("toggled");
                    activeSidebar = SIDEBAR;
                });
            }

            // Open secondary sidebar on main's active link link
            activeMenu?.addEventListener("click", (e) => {
                e.preventDefault();

                // Check if there is a secondary sidebar
                if (SIDEBAR_SECONDARY) {
                    activeSidebar = SIDEBAR_SECONDARY;
                    SIDEBAR_SECONDARY.classList.add("toggled");
                }

                SIDEBAR?.classList.remove("toggled");
            });
        }
    };

    useEffect(() => {
        if (document) {
            //----------------------------------
            // Sidebar menu
            //----------------------------------
            const SUB_LIST = document.querySelector(".menu-sub");

            if (SUB_LIST) {
                const SUB_MENU_TOGGLES = document.querySelectorAll(".menu-sub > a");

                SUB_MENU_TOGGLES.forEach((el) => {
                    const parent = el.closest(".menu-sub");
                    let isOpened = parent?.classList.contains("opened");
                    let isToggling = false;

                    const toggleSubMenu = (el) => {
                        isOpened = !isOpened;
                        parent?.classList.toggle("opened", isOpened);

                        if (isOpened) {
                            // Menu opening animation
                            isToggling = true;
                            el.style.height = "0px";
                            el.style.opacity = "0";
                            el.style.display = "block";

                            setTimeout(() => {
                                el.style.height = el.scrollHeight + "px";
                                el.style.opacity = "1";

                                setTimeout(() => {
                                    el.style.height = "";
                                    isToggling = false;
                                }, 300);
                            });
                        } else {
                            // Menu closing animation
                            isToggling = true;
                            el.style.height = el.scrollHeight + "px";
                            el.style.opacity = "0";

                            setTimeout(() => {
                                el.style.height = "0px";

                                setTimeout(() => {
                                    el.style.display = "none";
                                    isToggling = false;
                                }, 300);
                            });
                        }
                    };

                    el.addEventListener("click", (e) => {
                        e.preventDefault();
                        if (isToggling) return;
                        toggleSubMenu(el.nextElementSibling);
                    });
                });
            }

            //----------------------------------
            // Sidebar menu active class
            //----------------------------------
            const ACTIVE_PAGE = document.documentElement.dataset.page;
            const MENU_LINKS = document.querySelectorAll(".menu > li > ul > li > a");
            const MENU_SUB_LINKS = document.querySelectorAll(".menu-sub > ul > li > a");

            MENU_LINKS.forEach((el) => {
                el.classList.remove("active");
                const link = el.innerText.toLowerCase().replace(/\s/g, "-");

                if (ACTIVE_PAGE === link) {
                    el.classList.add("active");
                }
            });

            MENU_SUB_LINKS.forEach((el) => {
                const parent = el?.closest(".menu-sub")?.innerText.toLowerCase().replace(/\s/g, "-");
                const link = el?.innerText.toLowerCase().replace(/\s/g, "-");

                if (ACTIVE_PAGE === `${parent}-${link}`) {
                    el?.classList.add("active");
                    el?.closest(".menu-sub").classList.add("opened", "active");
                }
            });

            //----------------------------------
            // Sidebar toggle
            //----------------------------------
            sidebarToggle();
        }
    });

    return (
        <button type="button" className="sidebar-toggle icon d-none d-sm-flex d-xl-none">
            <svg className="pe-none" width="15" height="12" viewBox="0 0 16 13" fill="none">
                <path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="visually-hidden">
                Open Sidebar
            </span>
        </button>
    );
};

export default SidebarToggle;
