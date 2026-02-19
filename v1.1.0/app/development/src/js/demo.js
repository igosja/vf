import * as bootstrap from "bootstrap";

export const demo = () => {
  //----------------------------------------------
  // TOC
  //----------------------------------------------
  const TOC_WRAPPER = document.getElementById("toc-wrapper");
  if (TOC_WRAPPER) {
    let tocTitles = document.querySelectorAll(".card-title");
    let tocGroupTitles = document.querySelectorAll(".card-group-title");
    let list = "";
    let titles = "";

    if (tocGroupTitles.length > 0) {
      titles = tocGroupTitles;
    } else {
      titles = tocTitles;
    }

    titles.forEach((item) => {
      let id = item.innerText.replace(/\s+/g, "-").toLowerCase();
      item.parentNode.id = id;
      list += `<a class="dropdown-item" href="#${id}">${item.innerText}</a>`;
    });

    TOC_WRAPPER.innerHTML = `<div class="dropdown">
                                    <button class="icon-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ph ph-list-dashes"></i>
                                        Navigate
                                        <i class="ph ph-caret-down fs-7"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        ${list}
                                    </div>
                                </div>`;
  }

  //----------------------------------------------
  // Toast
  //----------------------------------------------
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");

  if (toastTrigger) {
    if (toastTrigger) {
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener("click", () => {
        toastBootstrap.show();
      });
    }
  }

  //----------------------------------------------
  // List items with checkboxes (e.g., mail)
  //----------------------------------------------
  const CONTENT = document.getElementById("content");
  const SELECT_ROW_ITEM = document.querySelectorAll(".list-row-item");
  const SELECT_ROW = document.querySelectorAll(
    ".list-row-item .form-check-input"
  );
  const SELECT_ALL = document.getElementById("check-all-input");
  const HEADER_ACTIONS_CLOSE = document.querySelectorAll(
    ".header-action-close"
  );
  const HEADER_ACTIONS_COUNT = document.getElementById("header-action-count");
  const MAIL_ITEM = document.querySelectorAll(".list-row-item > button");

  if (SELECT_ROW_ITEM) {
    const getSelectedCount = () => {
      let selected = 0;
      let formatted;

      SELECT_ROW.forEach((checkbox) => {
        if (checkbox.checked) {
          selected++;
        }
      });

      if (selected > 0) {
        if (selected < 10) {
          formatted = `0${selected}`;
        } else {
          formatted = selected;
        }

        HEADER_ACTIONS_COUNT.innerHTML =
          formatted + `<span class="d-none d-sm-inline ps-2">Selected</span>`;
      }
    };

    // Select all checkboxes
    if (SELECT_ALL) {
      SELECT_ALL.addEventListener("click", () => {
        SELECT_ROW.forEach((checkbox) => {
          checkbox.checked = SELECT_ALL.checked;
          getSelectedCount();
        });
      });
    }

    // Close mail actions
    HEADER_ACTIONS_CLOSE.forEach((item) => {
      item.addEventListener("click", () => {
        CONTENT.classList.remove("list-row-previewed");

        if (SELECT_ALL) {
          SELECT_ALL.checked = false;
        }
        SELECT_ROW.forEach((checkbox) => {
          checkbox.checked = false;
        });
      });
    });

    // Preview
    MAIL_ITEM.forEach((item, index) => {
      item.addEventListener("click", () => {
        CONTENT.classList.add("list-row-previewed");
      });
    });

    // Selected count
    SELECT_ROW.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        getSelectedCount();
      });
    });
  }
};
