//---------------------------------------------------
// Colors
//---------------------------------------------------
export const COLORS = {
  white: "#ffffff",
  blue: "#1e91ff",
  indigo: "#5c6bc0",
  purple: "#e26cf5",
  pink: "#f06292",
  red: "#fd7171",
  orange: "#fea84c",
  yellow: "#ffeb3b",
  green: "#10b981",
  teal: "#33b6a9",
  cyan: "#26c6da",
  black: "#000000",
};

//---------------------------------------------------
// Find out the platform is MAC or not
//---------------------------------------------------
export const isMac = () => {
  const platform = navigator?.userAgentData?.platform || navigator?.platform;
  return platform.toUpperCase().indexOf("MAC") >= 0;
};

//---------------------------------------------------
// Return CSS variable
// This is helpful for dark/light theme modes
//---------------------------------------------------
export const cssVar = (variable) => {
  return getComputedStyle(document.body).getPropertyValue(variable).trim();
};

//---------------------------------------------------
// Even row background for lists
//---------------------------------------------------
export const evenRow = (index, highlightClass = "bg-highlight") => {
  let rowClass = "";
  if (index % 2 === 0) {
    rowClass = highlightClass;
  } else {
    rowClass = "";
  }

  return rowClass;
};

//---------------------------------------------------
// Throttle function
//---------------------------------------------------
export const throttle = (fn, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

//---------------------------------------------------
// Avatar
//---------------------------------------------------
const AVATAR_BASE_CLS = `w-8 h-8 rounded-circle d-grid place-content-center`;
const AVATAR_BORDER_BASE_CLS = `w-10 h-10 rounded-circle border border-opacity-50 d-grid place-content-center border me-3 flex-shrink-0`;

export const avatarCap = (cap = "A", bg = "bg-active", borderColor = "") => {
  return `<div class="text-uppercase ${AVATAR_BORDER_BASE_CLS} ${borderColor}">
				<div class="text-invert fw-bold ${AVATAR_BASE_CLS} ${bg}">${cap}</div>
			</div>`;
};

export const avatarIcon = (
  icon = "ph-user",
  bg = "bg-active",
  borderColor = ""
) => {
  return `<div class="${AVATAR_BORDER_BASE_CLS} ${borderColor}">
				<i class="ph text-invert fs-5 ${icon} ${AVATAR_BASE_CLS} ${bg}"></i>
			</div>`;
};

export const avatarImg = (
  img = "",
  alt = "",
  borderColor = "border-200",
  width = "h-8",
  height = "h-8"
) => {
  return `<div class="${AVATAR_BORDER_BASE_CLS} ${borderColor}">
				<img class="rounded-circle ${borderColor} ${width} ${height}" src="${img}" alt="${alt}" />
			</div>`;
};

//---------------------------------------------------
// Colors
//---------------------------------------------------
// Hex to RGBA
export const rgb = (hex, alpha) => {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  // 6 digits
  if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

//---------------------------------------------------
// Get paths from import.meta.glob
//---------------------------------------------------
export const globs = {
  browser: import.meta.glob("../img/browsers/*.svg", {
    eager: true,
  }),
  os: import.meta.glob("../img/os/*.svg", {
    eager: true,
  }),
  contact: import.meta.glob("../img/contacts/*.jpg", {
    eager: true,
  }),
  "gallery-thumb": import.meta.glob("../img/gallery/thumbs/*.jpg", {
    eager: true,
  }),
  "gallery-full": import.meta.glob("../img/gallery/*.jpg", {
    eager: true,
  }),
  product: import.meta.glob("../img/products/*.jpg", {
    eager: true,
  }),
  team: import.meta.glob("../img/team/*.jpg", {
    eager: true,
  }),
  flag: import.meta.glob("../img/flags/*.svg", {
    eager: true,
  }),
};

export const getPaths = (key) => {
  const files = globs[key];
  const result = {};

  if (files) {
    for (const path in files) {
      const match = path.match(/\/([^\/]+)\.(svg|png|jpe?g|webp)$/i);
      if (match) {
        const iconName = match[1];
        result[iconName] = files[path].default;
      }
    }
  }

  return result;
};
