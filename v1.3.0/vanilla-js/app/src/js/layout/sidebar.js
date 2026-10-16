//-------------------------------------------------
// Sidebar toggle behavior on screens below xl
//-------------------------------------------------
export const sidebarToggle = () => {
  const SIDEBAR_SECONDARY = document.getElementById("sidebar-secondary");
  const SIDEBAR = document.getElementById("sidebar");
  const SIDEBAR_TOGGLE = document.querySelectorAll(".sidebar-toggle");
  const BACKDROP = document.createElement("button");

  let activeMenu = document.querySelector(".menu a.active");
  let isToggled = false;
  let activeSidebar = SIDEBAR;

  const sidebarClose = () => {
    activeSidebar.classList.remove("toggled");
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
        activeSidebar.classList.toggle("toggled", isToggled);
        if (isToggled) {
          activeSidebar.insertAdjacentElement("afterend", BACKDROP);
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
        SIDEBAR_SECONDARY.classList.remove("toggled");
        SIDEBAR.classList.add("toggled");
        activeSidebar = SIDEBAR;
      });
    }

    // Open secondary sidebar on main's active link link
    if (activeMenu) {
      activeMenu.addEventListener("click", (e) => {
        e.preventDefault();

        // Check if there is a secondary sidebar
        if (SIDEBAR_SECONDARY) {
          activeSidebar = SIDEBAR_SECONDARY;
          SIDEBAR_SECONDARY.classList.add("toggled");
        }

        SIDEBAR.classList.remove("toggled");
      });
    }
  }
};

export const sidebar = () => {
  //----------------------------------
  // Sidebar menu
  //----------------------------------
  const SUB_LIST = document.querySelector(".menu-sub");

  if (SUB_LIST) {
    const SUB_MENU_TOGGLES = document.querySelectorAll(".menu-sub > a");

    SUB_MENU_TOGGLES.forEach((el) => {
      let parent = el.closest(".menu-sub");
      let isOpened = parent.classList.contains("opened");
      let isToggling = false;

      const toggleSubMenu = (el) => {
        isOpened = !isOpened;
        parent.classList.toggle("opened", isOpened);

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
    let link = el.innerText.toLowerCase().replace(/\s/g, "-");

    if (ACTIVE_PAGE === link) {
      el.classList.add("active");
    }
  });

  MENU_SUB_LINKS.forEach((el) => {
    let parent = el.closest(".menu-sub").innerText.toLowerCase().replace(/\s/g, "-");
    let link = el.innerText.toLowerCase().replace(/\s/g, "-");

    if (ACTIVE_PAGE === `${parent}-${link}`) {
      el.classList.add("active");
      el.closest(".menu-sub").classList.add("opened", "active");
    }
  });

  //----------------------------------
  // Flyout panel (xl and up)
  //----------------------------------
  sidebarFlyout();

  //----------------------------------
  // Sidebar toggle
  //----------------------------------
  sidebarToggle();
};

//-------------------------------------------------
// Flyout panel on xl and up
// One shared panel opens on hover and stays open while moving
// between sections; only the section content is swapped.
//-------------------------------------------------
const CLOSE_DELAY = 60; // grace period for overshooting the panel
const SWAP_OUT = 200; // old links fade out
const SWAP_GAP = 60; // pause before the new links come in
const SWAP_IN = 200; // new links fade and slide in

const sidebarFlyout = () => {
  const SIDEBAR = document.getElementById("sidebar");
  const MENU = SIDEBAR?.querySelector(".menu");
  const PANEL = SIDEBAR?.querySelector(".menu-panel");
  if (!MENU || !PANEL) return;

  const SECTIONS = [...MENU.children].filter((li) => li.querySelector(":scope > ul"));
  const desktop = window.matchMedia("(min-width: 1200px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = null;
  let closeTimer;
  let skipFocus = false;

  const show = (section) => {
    clearTimeout(closeTimer);
    if (section === current) return;

    const previous = current;
    previous?.classList.remove("previewing");
    previous?.firstElementChild.setAttribute("aria-expanded", "false");

    // Switching waits for the old links to fade out; first open shows straight away
    const delay = previous ? SWAP_OUT + SWAP_GAP : 0;
    SIDEBAR.style.setProperty("--menu-swap-delay", `${delay}ms`);

    section.classList.add("previewing");
    section.firstElementChild.setAttribute("aria-expanded", "true");
    SIDEBAR.classList.add("menu-open");
    current = section;

    // Slide the new content in the direction of travel
    if (previous && !reducedMotion.matches) {
      const direction = SECTIONS.indexOf(section) > SECTIONS.indexOf(previous) ? 1 : -1;
      section.lastElementChild.animate(
        [{ transform: `translateY(${direction * 6}px)` }, { transform: "none" }],
        { duration: SWAP_IN, delay, easing: "ease-out", fill: "backwards" }
      );
    }
  };

  const hide = () => {
    clearTimeout(closeTimer);
    if (!current) return;

    current.classList.remove("previewing");
    current.firstElementChild.setAttribute("aria-expanded", "false");
    SIDEBAR.classList.remove("menu-open");
    current = null;
  };

  SECTIONS.forEach((section) => {
    const TRIGGER = section.firstElementChild;
    const MENU_LIST = section.lastElementChild;

    MENU_LIST.id ||= `menu-${SECTIONS.indexOf(section)}`;
    TRIGGER.setAttribute("tabindex", "0");
    TRIGGER.setAttribute("role", "button");
    TRIGGER.setAttribute("aria-expanded", "false");
    TRIGGER.setAttribute("aria-controls", MENU_LIST.id);

    TRIGGER.addEventListener("mouseenter", () => desktop.matches && show(section));

    // Keyboard
    TRIGGER.addEventListener("focus", () => {
      if (desktop.matches && !skipFocus) show(section);
      skipFocus = false;
    });
    TRIGGER.addEventListener("keydown", (e) => {
      const index = SECTIONS.indexOf(section);

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const next = SECTIONS[(index + (e.key === "ArrowDown" ? 1 : -1) + SECTIONS.length) % SECTIONS.length];
        next.firstElementChild.focus();
      } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        show(section);
        MENU_LIST.querySelector("a")?.focus();
      }
    });
  });

  SIDEBAR.addEventListener("mouseenter", () => clearTimeout(closeTimer));
  SIDEBAR.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(hide, CLOSE_DELAY);
  });

  SIDEBAR.addEventListener("focusout", (e) => {
    if (!SIDEBAR.contains(e.relatedTarget)) hide();
  });

  SIDEBAR.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !current) return;
    const trigger = current.firstElementChild;
    hide();
    skipFocus = document.activeElement !== trigger;
    trigger.focus({ preventScroll: true });
  });

  desktop.addEventListener("change", hide);
};
