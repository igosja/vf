import { DATA } from "./data";
import { getPaths } from "../../utils";

export const contacts = () => {
  const contactImages = getPaths("contact");
  const WRAPPER = document.getElementById("contacts-list");
  let list = "";
  let avatar = "";

  if (WRAPPER) {
    DATA.map((item, index) => {
      // Set avatar
      if (item.img) {
        avatar = `<img class="avatar avatar-md" src="${contactImages[item.img]}" alt="" />`;
      } else {
        avatar = `<div class="avatar avatar-md text-invert ${item.color}">${item.cap}</div>`;
      }

      list += `<div class="group list-row-item bg-hover-list d-flex align-items-center gap-4 px-5 ${DATA.length - 1 === index ? "rounded-bottom-3" : "border-bottom"} ${index === 0 ? "rounded-top-3" : ""}">
						<div class="list-row-avatar py-2">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="item-${index}">
								<label class="form-check-label" for="item-${index}"></label>
							</div>
							${avatar}
						</div>

						<button type="button" class="d-flex align-items-center gap-6 w-100 text-start py-2 overflow-hidden">
							<div class="d-md-flex align-items-center gap-3 text-truncate min-w-0">
								<div class="w-md-60 text-truncate fw-medium text-body-emphasis">${item.name}</div>
								<div class="w-md-60 text-truncate">${item.email}</div>
							</div>
							
							<div class="w-md-60 text-truncate d-none d-xl-block">${item.job}</div>
							<div class="w-md-60 text-truncate d-none d-xxl-block">${item.company}</div>
						</button>

						<div class="d-flex gap-1.5 me-n2">
							<button type="button" class="icon group-action ph ph-pencil-simple-line d-none d-sm-inline-flex"></button>
							<button type="button" class="icon group-action ph ph-star d-none d-sm-inline-flex"></button>
							<button type="button" class="icon ph ph-dots-three-circle"></button>
						</div>
					</div>`;
    });

    WRAPPER.innerHTML = list;
  }
};
