import { DATA } from "./data";
import { getPaths } from "../../utils";

export const mail = () => {
  const contactImages = getPaths("contact");
  const WRAPPER = document.getElementById("mail-list");

  let list = "";
  let avatar = "";
  let unread = "";

  if (WRAPPER) {
    // Generate mail list
    DATA.map((item, index) => {
      // Set avatar
      if (item.img) {
        avatar = `<img class="avatar avatar-md" src="${contactImages[item.img]}" alt="" />`;
      } else {
        avatar = `<div class="avatar avatar-md text-invert ${item.color}">${item.cap}</div>`;
      }

      // Set unread indicator
      item.unread
        ? (unread = `<i class="w-1 h-1 rounded-circle position-absolute top-0 bottom-0 my-auto start-0 ms-n2 bg-primary"></i>`)
        : (unread = "");

      list += `<div class="list-row-item bg-hover-list d-flex align-items-center gap-4 px-6 ${DATA.length - 1 === index ? "rounded-bottom-3" : "border-bottom"} ${index === 0 ? "rounded-top-3" : ""}">
						<div class="position-relative py-2">
							${unread}
							
							<div class="list-row-avatar">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="mail-${index}">
									<label class="form-check-label" for="mail-${index}"></label>
								</div>
								${avatar}
							</div>
						</div>

						<button type="button" class="d-flex align-items-center gap-4 w-100 text-start py-2 overflow-hidden">
							<div class="d-md-flex align-items-center gap-3 flex-grow-1 w-100 text-truncate min-w-0">
								<div class="d-flex align-items-center gap-3 w-md-40 flex-shrink-0 ${unread ? "text-body-emphasis fw-bold" : ""}">
									<div class="text-truncate">${item.from}</div>
									<div class="text-body-secondary fs-9 ms-auto d-md-none fw-normal">${item.time.short}</div>
								</div>

								<div class="text-secondary-emphasis text-truncate fs-7 ${unread ? "text-body-emphasis fw-medium" : ""}">${item.subject}</div>
							</div>

							${item.attachment ? '<i class="text-body-secondary fs-3 ph ph-paperclip-horizontal d-none d-md-block"></i>' : ""}

							<div class="text-body-secondary fs-8 ms-auto d-none d-md-block">${item.time.short}</div>
						</button>
					</div>`;
    });

    WRAPPER.innerHTML = list;
  }
};
