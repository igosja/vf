import { TODO_DATA, DETAILS } from "./data";
import { FILES_DATA } from "../file-manager/data";
import { getPaths } from "../../utils";

export const todoList = () => {
  const galleryImages = getPaths("gallery-thumb");
  const WRAPPER = document.getElementById("todo-lists");

  if (WRAPPER) {
    // Main list
    (() => {
      WRAPPER.innerHTML = "";
      TODO_DATA.map((item, index) => {
        let attachment = `<div class="text-body-secondary fs-7 ms-4 align-items-center d-none d-lg-flex">
                                        <i class="ph ph-paperclip fs-6 me-1"></i>
                                        <span class="text-body-secondary">
                                            ${item.files.length}
                                            ${item.files.length > 1 ? " Attachments" : " Attachment"}
                                        </span>
                                    </div>`;

        let dueDate = `<div class="text-body-secondary fs-7 align-items-center d-none d-sm-flex">
                                    <i class="ph ph-calendar-blank fs-6 me-1"></i>
                                    ${item.due.date}
                                </div>`;

        let listItem = document.createElement("div");
        listItem.className = `hstack bg-hover-list ${index === TODO_DATA.length - 1 ? "rounded-bottom-3" : "border-bottom"} ${index === 0 ? "rounded-top-3" : ""}`;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "todo-checkbox", "mt-0", "me-4");
        checkbox.checked = item.completed;

        let listTag = document.createElement("i");
        listTag.classList.add("w-1", "rounded", "h-5", "ms-4", "me-3", "flex-shrink-0", item.color);
        listTag.setAttribute("style", "--bs-bg-opacity: 0.75");

        listItem.innerHTML = `<a href="" class="flex-grow-1 text-truncate hstack py-3.5 pe-6 text-body" data-bs-toggle="modal" data-bs-target="#todo-list-details">
                                            <div class="text-truncate flex-grow-1 lh-base">${item.title}</div>
                                            ${item.due.date ? dueDate : ""}
                                            ${item.files.length > 0 ? attachment : ""}
                                        </a>`;
        listItem.prepend(checkbox);
        listItem.prepend(listTag);

        WRAPPER.appendChild(listItem);
      });
    })();

    // Sub tasks
    (() => {
      const SUB_TASK_WRAPPER = document.getElementById("todo-sub-tasks");
      let list = "";
      let last = DETAILS.length - 1;

      if (SUB_TASK_WRAPPER) {
        DETAILS.map((item, index) => {
          list += `<div class="form-check">
                                <input type="checkbox" class="form-check-input todo-checkbox">
                                <div class="pb-3 ${last !== index ? "border-bottom mb-3" : ""}">${item.task}</div>
                            </div>`;
        });

        SUB_TASK_WRAPPER.innerHTML = list;
      }
    })();

    // Files
    (() => {
      const ATTACHMENT_WRAPPER = document.getElementById("todo-attachments");
      let list = "";
      let icon = "";

      if (ATTACHMENT_WRAPPER) {
        FILES_DATA.slice(0, 5).map((item, index) => {
          if (item.type === "image") {
            icon = `<img class="avatar" src="${galleryImages[item.img]}" alt="">`;
          } else {
            icon = `<i class="avatar bg-active text-body-emphasis ph ${item.icon}"></i>`;
          }

          list += `<a href="#" class="d-flex align-items-center gap-3 rounded p-3 bg-hover">
								${icon}
								<div class="flex-grow-1 lh-1">
									<div class="text-body-emphasis mb-2">${item.name}</div>
									<div class="text-body-secondary fs-7">
										Added on ${item.date}
										<div class="float-end d-none d-sm-inline">${item.size}</div>
									</div>
								</div>
							</a>`;
        });

        ATTACHMENT_WRAPPER.innerHTML = list;
      }
    })();
  }
};
