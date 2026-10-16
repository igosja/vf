import { Modal, Toast } from "bootstrap";
import { CHAT_DATA, SEARCH_DATA, SUGGESTION_DATA, DEMO_REPLY } from "./data";

const PENDING_PROMPT_KEY = "ai-agent-prompt";

const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

// Copy text and flash a check icon on the trigger
const copyText = (text, button) => {
  navigator.clipboard?.writeText(text).catch(() => {});

  const icon = button.classList.contains("ph") ? button : button.querySelector(".ph");
  if (icon) {
    icon.classList.replace("ph-copy", "ph-check");
    setTimeout(() => icon.classList.replace("ph-check", "ph-copy"), 1500);
  }
};

export const aiAgent = () => {
  const SIDEBAR = document.getElementById("ai-recents");
  if (!SIDEBAR) return;

  const THREAD = document.getElementById("ai-thread");
  const activeChatId = THREAD ? Number(THREAD.dataset.chatId) : null;

  //----------------------------------
  // Sidebar: starred and recent chats
  //----------------------------------
  (() => {
    const STARRED = document.getElementById("ai-starred");

    const chatLink = (item) => {
      const active = item.id === activeChatId ? "active" : "";

      return `<div class="ai-chat-item position-relative w-100">
                <a class="nav-link w-100 fw-normal ${active}" href="ai-agent-chat.html">
                  <span class="text-truncate">${item.title}</span>
                </a>
                <div class="dropdown position-absolute top-50 end-0 translate-middle-y me-2">
                  <button
                    type="button"
                    class="ai-chat-menu d-grid place-content-center lh-1 ph ph-dots-three-circle fs-4"
                    data-bs-toggle="dropdown"
                    data-bs-popper-config='{"strategy":"fixed"}'
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Options for ${item.title}</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#" class="dropdown-item" data-ai-toast="${item.starred ? "Removed from starred" : "Added to starred"}" data-ai-toast-icon="ph-star"><i class="ph ph-star"></i>${item.starred ? "Unstar" : "Star"}</a>
                    <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#ai-rename-chat"><i class="ph ph-pencil-simple-line"></i>Rename</a>
                    <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#ai-project-chat"><i class="ph ph-folder"></i>Add to project</a>
                    <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#ai-share-chat"><i class="ph ph-share-network"></i>Share</a>
                    <a href="#" class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#ai-delete-chat"><i class="ph ph-trash"></i>Delete</a>
                  </div>
                </div>
              </div>`;
    };

    STARRED.innerHTML = CHAT_DATA.filter((item) => item.starred)
      .map(chatLink)
      .join("");
    SIDEBAR.innerHTML = CHAT_DATA.filter((item) => !item.starred)
      .map(chatLink)
      .join("");
  })();

  //----------------------------------
  // Search palette: opened from the header search (or Cmd/Ctrl + K)
  //----------------------------------
  (() => {
    const TRIGGER = document.getElementById("ai-search-input");
    const MODAL = document.getElementById("ai-search");
    if (!TRIGGER || !MODAL) return;

    const INPUT = document.getElementById("ai-search-query");
    const TYPES_NAV = document.getElementById("ai-search-types");
    const RESULTS = document.getElementById("ai-search-results");
    const modal = Modal.getOrCreateInstance(MODAL);

    const TYPES = {
      chat: { label: "Chats", icon: "ph-chat-circle" },
      project: { label: "Projects", icon: "ph-folder" },
      image: { label: "Images", icon: "ph-image" },
      scheduled: { label: "Scheduled", icon: "ph-clock-clockwise" },
      action: { label: "Actions", icon: "ph-plus-circle" },
    };

    const ITEMS = [
      ...CHAT_DATA.map((item) => ({ ...item, type: "chat", href: "ai-agent-chat.html" })),
      ...SEARCH_DATA,
    ];

    let type = "all";
    let active = 0;

    const ofType = (t) => ITEMS.filter((item) => item.type === t);

    const itemHtml = (item, index) => `<a
        href="${item.href || "#"}"
        class="ai-search-item d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 text-body-emphasis"
        data-index="${index}"
      >
        <i class="ph ${item.icon || TYPES[item.type].icon} fs-4 text-body-secondary"></i>
        <span class="flex-grow-1 text-truncate">${item.title}</span>
        ${item.meta ? `<span class="fs-8 text-body-secondary text-nowrap">${item.meta}</span>` : ""}
        <i class="ai-search-enter ph ph-arrow-elbow-down-left fs-5 text-body-secondary"></i>
      </a>`;

    const render = () => {
      const query = INPUT.value.trim().toLowerCase();
      const match = (item) => item.title.toLowerCase().includes(query);
      let groups;

      if (type === "all" && !query) {
        const chats = ofType("chat");
        groups = [
          ["Starred", chats.filter((item) => item.starred)],
          ["Recents", chats.filter((item) => !item.starred).slice(0, 5)],
          ["Actions", ofType("action")],
        ];
      } else {
        groups = (type === "all" ? Object.keys(TYPES) : [type]).map((t) => [
          TYPES[t].label,
          ofType(t).filter(match),
        ]);
      }

      groups = groups.filter(([, items]) => items.length);

      if (!groups.length) {
        RESULTS.innerHTML = `<div class="py-12 text-center text-body-secondary">
                               No results for "${escapeHtml(INPUT.value.trim())}"
                             </div>`;
        return;
      }

      let index = 0;
      RESULTS.innerHTML = groups
        .map(
          ([label, items]) => `<div class="mb-3">
              <div class="px-3 pt-2 pb-1.5 fs-8 text-body-secondary">${label}</div>
              ${items.map((item) => itemHtml(item, index++)).join("")}
            </div>`
        )
        .join("");

      setActive(0);
    };

    const setActive = (index) => {
      const items = RESULTS.querySelectorAll(".ai-search-item");
      if (!items.length) return;

      active = (index + items.length) % items.length;
      items.forEach((item, i) => item.classList.toggle("active", i === active));
      items[active].scrollIntoView({ block: "nearest" });
    };

    const setType = (next) => {
      type = next;
      TYPES_NAV.querySelectorAll(".nav-link").forEach((link) =>
        link.classList.toggle("active", link.dataset.type === type)
      );
      render();
    };

    // Header search is only a trigger
    TRIGGER.readOnly = true;
    TRIGGER.addEventListener("focus", () => {
      TRIGGER.blur();
      modal.show();
    });

    MODAL.addEventListener("show.bs.modal", () => {
      INPUT.value = "";
      setType("all");
    });
    MODAL.addEventListener("shown.bs.modal", () => INPUT.focus());

    INPUT.addEventListener("input", render);

    TYPES_NAV.addEventListener("click", (e) => {
      const link = e.target.closest("[data-type]");
      if (link) setType(link.dataset.type);
      INPUT.focus();
    });

    RESULTS.addEventListener("mousemove", (e) => {
      const item = e.target.closest(".ai-search-item");
      if (item && Number(item.dataset.index) !== active) setActive(Number(item.dataset.index));
    });

    // Up/Down move, Enter opens, Left/Right change type while the query is empty
    INPUT.addEventListener("keydown", (e) => {
      const keys = Object.keys(TYPES);
      const order = ["all", ...keys.filter((t) => t !== "action")];

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setActive(active + (e.key === "ArrowDown" ? 1 : -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        RESULTS.querySelector(".ai-search-item.active")?.click();
      } else if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && !INPUT.value) {
        e.preventDefault();
        const step = e.key === "ArrowRight" ? 1 : -1;
        setType(order[(order.indexOf(type) + step + order.length) % order.length]);
      }
    });
  })();

  //----------------------------------
  // Chat actions: modals and snackbar
  //----------------------------------
  (() => {
    const SNACKBARS = document.querySelector(".ai-snackbar-container");
    const TEMPLATE = document.getElementById("ai-snackbar");
    if (!SNACKBARS) return;

    const HEADER_TITLE = document.getElementById("ai-chat-title");

    // Chat the open modal acts on: a sidebar item, or the current chat when null
    let target = null;

    const titleOf = (item) =>
      item ? item.querySelector(".nav-link").innerText.trim() : HEADER_TITLE?.innerText.trim();

    const currentItem = () =>
      target ||
      document.querySelector("#sidebar-secondary .nav-link.active")?.closest(".ai-chat-item");

    const snackbar = (message, icon = "ph-check-circle", undo = false) => {
      const toast = TEMPLATE.content.firstElementChild.cloneNode(true);
      toast.querySelector("[data-ai-snackbar-icon]").classList.add(icon);
      toast.querySelector("[data-ai-snackbar-message]").textContent = message;

      const UNDO = toast.querySelector("[data-ai-snackbar-undo]");
      UNDO.classList.toggle("d-none", !undo);
      UNDO.addEventListener("click", () => Toast.getInstance(toast).hide());

      toast.addEventListener("hidden.bs.toast", () => toast.remove());
      SNACKBARS.append(toast);
      Toast.getOrCreateInstance(toast, { delay: 4000 }).show();
    };

    // Quick actions acknowledged with a snackbar
    document.addEventListener("click", (e) => {
      const action = e.target.closest("[data-ai-toast]");
      if (!action) return;
      e.preventDefault();

      if (action.hasAttribute("data-ai-copy-link")) {
        const input =
          action.dataset.aiCopyLink && document.querySelector(action.dataset.aiCopyLink);
        navigator.clipboard?.writeText(input ? input.value : location.href).catch(() => {});
      }

      snackbar(
        action.dataset.aiToast,
        action.dataset.aiToastIcon,
        action.hasAttribute("data-ai-toast-undo")
      );
    });

    // Fill each modal with the chat it was opened for
    document
      .querySelectorAll("#ai-share-chat, #ai-rename-chat, #ai-project-chat, #ai-delete-chat")
      .forEach((modal) => {
        modal.addEventListener("show.bs.modal", (e) => {
          target = e.relatedTarget?.closest(".ai-chat-item") || null;
          const title = titleOf(target);

          modal.querySelectorAll("[data-ai-chat-title]").forEach((el) => (el.textContent = title));
          const input = modal.querySelector("#ai-rename-input");
          if (input) input.value = title;
        });
      });

    document.getElementById("ai-rename-chat").addEventListener("shown.bs.modal", () => {
      document.getElementById("ai-rename-input").select();
    });

    const hide = (id) => Modal.getInstance(document.getElementById(id)).hide();

    // Rename updates the sidebar item and, for the open chat, the header title
    document.getElementById("ai-rename-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("ai-rename-input").value.trim();
      if (!title) return;

      const isCurrent = !target || target.querySelector(".nav-link.active");
      currentItem()?.querySelector(".text-truncate").replaceChildren(title);
      if (isCurrent && HEADER_TITLE) HEADER_TITLE.textContent = title;

      hide("ai-rename-chat");
      snackbar("Chat renamed", "ph-pencil-simple-line");
    });

    document.getElementById("ai-project-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const project = e.target.querySelector("[name=ai-project]:checked").value;

      hide("ai-project-chat");
      snackbar(`Added to ${project}`, "ph-folder");
    });

    // Delete removes the chat from the sidebar
    document.querySelector("[data-ai-delete]").addEventListener("click", () => {
      currentItem()?.remove();

      hide("ai-delete-chat");
      snackbar("Chat deleted", "ph-trash");
    });
  })();

  //----------------------------------
  // Greeting
  //----------------------------------
  (() => {
    const GREETING = document.getElementById("ai-greeting");
    if (!GREETING) return;

    const hour = new Date().getHours();
    let period = "evening";
    if (hour < 12) period = "morning";
    else if (hour < 18) period = "afternoon";

    GREETING.textContent = `Good ${period}, Gloria`;
  })();

  //----------------------------------
  // Composer
  //----------------------------------
  const COMPOSER = document.querySelector("[data-ai-composer]");
  const INPUT = COMPOSER.querySelector("textarea");
  const SEND = COMPOSER.querySelector(".ai-composer-send");
  let streaming = false;
  let streamTimer = null;

  const resize = () => {
    INPUT.style.height = "auto";
    INPUT.style.height = `${INPUT.scrollHeight}px`;
  };

  const updateSend = () => {
    SEND.disabled = !streaming && INPUT.value.trim() === "";
  };

  INPUT.addEventListener("input", () => {
    resize();
    updateSend();
  });

  // Enter sends, Shift+Enter adds a new line
  INPUT.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      COMPOSER.requestSubmit();
    }
  });

  // Model picker
  COMPOSER.querySelectorAll("[data-ai-model]").forEach((el) => {
    el.addEventListener("click", () => {
      COMPOSER.querySelectorAll("[data-ai-model]").forEach((item) =>
        item.querySelector(".ph-check").classList.toggle("opacity-0", item !== el)
      );
      COMPOSER.querySelector("[data-ai-model-label]").textContent = el.dataset.aiModel;
    });
  });

  //----------------------------------
  // Suggestions (home page)
  //----------------------------------
  (() => {
    const CHIPS = document.getElementById("ai-suggestions");
    const LIST = document.getElementById("ai-suggestion-list");
    if (!CHIPS) return;

    const CHIP_CLASSES = "text-body-emphasis bg-hover";
    const CHIP_ACTIVE_CLASSES = "text-primary bg-primary-subtle border-primary-subtle";

    const setChip = (chip, active) => {
      chip.classList.remove(...(active ? CHIP_CLASSES : CHIP_ACTIVE_CLASSES).split(" "));
      chip.classList.add(...(active ? CHIP_ACTIVE_CLASSES : CHIP_CLASSES).split(" "));
      chip.setAttribute("aria-pressed", active);
    };

    CHIPS.innerHTML = SUGGESTION_DATA.map(
      (
        item,
        index
      ) => `<button type="button" class="d-inline-flex align-items-center gap-2 h-9 px-3.5 border rounded-pill fs-7 ${CHIP_CLASSES}" data-index="${index}" aria-pressed="false">
                          <i class="ph ${item.icon} fs-5"></i>${item.label}
                        </button>`
    ).join("");

    CHIPS.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-index]");
      if (!chip) return;

      const isActive = chip.getAttribute("aria-pressed") === "true";
      CHIPS.querySelectorAll("[data-index]").forEach((el) => setChip(el, false));
      LIST.classList.toggle("d-none", isActive);

      if (isActive) return;

      setChip(chip, true);
      LIST.innerHTML = SUGGESTION_DATA[chip.dataset.index].prompts
        .map(
          (prompt) =>
            `<button type="button" class="d-block w-100 px-4 py-3 rounded-3 text-body bg-hover" data-ai-prompt>${prompt}</button>`
        )
        .join("");
    });

    LIST.addEventListener("click", (e) => {
      const item = e.target.closest("[data-ai-prompt]");
      if (!item) return;

      INPUT.value = item.textContent;
      resize();
      updateSend();
      INPUT.focus();
    });
  })();

  //----------------------------------
  // Home page: hand the prompt over to the chat page
  //----------------------------------
  if (!THREAD) {
    COMPOSER.addEventListener("submit", (e) => {
      const prompt = INPUT.value.trim();
      if (!prompt) return e.preventDefault();

      try {
        sessionStorage.setItem(PENDING_PROMPT_KEY, prompt);
      } catch {}
    });

    return;
  }

  //----------------------------------
  // Chat page: messages
  //----------------------------------
  const ACTIONS_USER = `<div class="ai-message-actions d-flex gap-0.5 mt-n1">
                          <button type="button" class="icon ph ph-copy" data-ai-copy><span class="visually-hidden">Copy</span></button>
                          <button type="button" class="icon ph ph-pencil-simple"><span class="visually-hidden">Edit</span></button>
                        </div>`;

  const ACTIONS_ASSISTANT = `<div class="ai-message-actions d-flex gap-0.5 mt-2 ms-n1.5">
                               <button type="button" class="icon ph ph-copy" data-ai-copy><span class="visually-hidden">Copy</span></button>
                               <button type="button" class="icon ph ph-thumbs-up" data-ai-vote><span class="visually-hidden">Good response</span></button>
                               <button type="button" class="icon ph ph-thumbs-down" data-ai-vote><span class="visually-hidden">Bad response</span></button>
                               <button type="button" class="icon ph ph-arrow-clockwise"><span class="visually-hidden">Retry</span></button>
                             </div>`;

  const scrollToBottom = () => {
    THREAD.lastElementChild?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  // Turn the demo reply lines into paragraphs and an ordered list
  const formatReply = (lines) => {
    let html = "";
    let inList = false;

    lines.forEach((line) => {
      const text = escapeHtml(line).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      const listItem = text.match(/^\d+\.\s(.*)/);

      if (listItem && !inList) {
        html += "<ol>";
        inList = true;
      } else if (!listItem && inList) {
        html += "</ol>";
        inList = false;
      }

      html += listItem ? `<li>${listItem[1]}</li>` : `<p>${text}</p>`;
    });

    return inList ? `${html}</ol>` : html;
  };

  const setStreaming = (value) => {
    streaming = value;
    SEND.classList.toggle("is-streaming", value);
    SEND.querySelector(".ph").className = `ph ${value ? "ph-stop" : "ph-arrow-up"}`;
    updateSend();
  };

  const stopStreaming = () => {
    clearTimeout(streamTimer);
    clearInterval(streamTimer);
    setStreaming(false);
  };

  const addUserMessage = (text) => {
    THREAD.insertAdjacentHTML(
      "beforeend",
      `<div class="ai-message d-flex flex-column align-items-end gap-2 mb-8">
         <div class="mw-600 px-4 py-3 rounded-4 bg-theme-100 text-body-emphasis text-break" data-ai-content>${escapeHtml(text).replace(/\n/g, "<br />")}</div>
         ${ACTIONS_USER}
       </div>`
    );
  };

  const addAssistantMessage = () => {
    THREAD.insertAdjacentHTML(
      "beforeend",
      `<div class="ai-message mb-8">
         <div class="ai-message-body" data-ai-content><div class="ai-typing"><span></span><span></span><span></span></div></div>
       </div>`
    );

    const message = THREAD.lastElementChild;
    const body = message.querySelector(".ai-message-body");
    const words = DEMO_REPLY.join("\n").split(" ");
    let count = 0;

    setStreaming(true);

    // Show the typing indicator briefly, then fake a streamed response
    streamTimer = setTimeout(() => {
      streamTimer = setInterval(() => {
        count += 2;
        body.innerHTML = formatReply(words.slice(0, count).join(" ").split("\n"));
        scrollToBottom();

        if (count >= words.length) {
          message.insertAdjacentHTML("beforeend", ACTIONS_ASSISTANT);
          stopStreaming();
        }
      }, 40);
    }, 800);
  };

  const send = (text) => {
    addUserMessage(text);
    addAssistantMessage();
    scrollToBottom();
  };

  COMPOSER.addEventListener("submit", (e) => {
    e.preventDefault();

    if (streaming) {
      // Drop the typing indicator if nothing streamed yet
      THREAD.querySelector(".ai-typing")?.closest(".ai-message")?.remove();
      stopStreaming();
      return;
    }

    const prompt = INPUT.value.trim();
    if (!prompt) return;

    INPUT.value = "";
    resize();
    send(prompt);
  });

  // Prompt sent from the home page starts a fresh thread
  (() => {
    let pending = null;
    try {
      pending = sessionStorage.getItem(PENDING_PROMPT_KEY);
      sessionStorage.removeItem(PENDING_PROMPT_KEY);
    } catch {}

    if (!pending) return;

    THREAD.innerHTML = "";
    THREAD.dataset.chatId = "";
    document.querySelector("#sidebar-secondary .nav-link.active")?.classList.remove("active");
    document.getElementById("ai-chat-title").textContent =
      pending.length > 40 ? `${pending.slice(0, 40)}...` : pending;
    send(pending);
  })();

  //----------------------------------
  // Message actions
  //----------------------------------
  THREAD.addEventListener("click", (e) => {
    const copy = e.target.closest("[data-ai-copy]");
    const copyCode = e.target.closest("[data-ai-copy-code]");
    const vote = e.target.closest("[data-ai-vote]");

    if (copy) {
      const message = copy.closest(".ai-message");
      const content = message.querySelector("[data-ai-content]");
      copyText(content.innerText.trim(), copy);
    }

    if (copyCode) {
      copyText(copyCode.closest(".ai-code").querySelector("code").innerText, copyCode);
    }

    if (vote) {
      const group = vote.parentElement.querySelectorAll("[data-ai-vote]");
      const isActive = vote.classList.contains("active");
      group.forEach((el) => el.classList.remove("active"));
      vote.classList.toggle("active", !isActive);
    }
  });
};
