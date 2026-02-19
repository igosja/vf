import { DIRECT_MESSAGE_DATA, CONVERSATION_DATA, CHANNEL_MEMBERS, CHANNEL_FILES } from "./data";
import { getPaths } from "../../utils";

export const messages = () => {
  const contactImages = getPaths("contact");
  const galleryImages = getPaths("gallery-thumb");

  // Direct messages
  (() => {
    const DM_WRAPPER = document.getElementById("direct-messages");
    let dMlist = "";
    let dMavatar = "";

    if (DM_WRAPPER) {
      DIRECT_MESSAGE_DATA.map((item, index) => {
        // Set avatar
        if (item.img) {
          dMavatar = `<img class="avatar avatar-xs" src="${contactImages[item.img]}" alt="" />`;
        } else {
          dMavatar = `<div class="avatar avatar-xs text-invert ${item.color}">${item.cap}</div>`;
        }

        dMlist += `<button type="button" class="nav-link w-100">
                                ${dMavatar}
                                <div class="flex-grow-1 text-truncate overflow-hidden">${item.name}</div>
                            </button>`;
      });

      DM_WRAPPER.innerHTML = dMlist;
    }
  })();

  // Conversation
  (() => {
    const WRAPPER = document.getElementById("conversation");

    if (WRAPPER) {
      CONVERSATION_DATA.map((group) => {
        let messageGroup = document.createElement("div");
        messageGroup.id = `day-${group.id}`;
        messageGroup.classList.add("mb-n2");
        WRAPPER.appendChild(messageGroup);

        // Set title date
        let date = `<div class="mt-10 mb-5 mx-n5 text-center">
								<i class="border-bottom d-block h-px mb-n4"></i>
                                <div class="h-8 px-4 bg-body text-body-emphasis rounded-pill d-inline-flex align-items-center fs-7 position-relative">${group.day}</div>
                            </div>`;

        messageGroup.innerHTML = date;

        // Set messages
        group.chat.map((message) => {
          // Avatar
          let avatar = "";
          if (message.op.img) {
            avatar = `<img class="avatar" src="${contactImages[message.op.img]}" alt="" />`;
          } else {
            avatar = `<div class="avatar text-invert ${message.op.color}">${message.op.cap}</div>`;
          }

          // List
          let list = "";
          message.text.map((item) => {
            list += `<div id="message-${item.id}" class="message-item position-relative py-0.5 px-1.5 rounded bg-hover">
                                    ${item.text}
                                </div>`;
          });

          let messageItemGroup = document.createElement("div");
          messageItemGroup.id = `message-${message.id}`;
          messageItemGroup.classList.add("d-flex", "align-items-start", "mb-3", "gap-3");
          messageGroup.appendChild(messageItemGroup);

          messageItemGroup.innerHTML = `${avatar}
                                    <div class="flex-grow-1">
                                        <div class="text-body-emphasis ms-1.5 fw-bold">${message.op.name}</div>
                                        ${list}
                                    </div>`;
        });
      });

      // Action dropdown
      let actions = document.createElement("div");
      actions.classList.add("message-actions");
      const MESSAGE_ACTION_WRAPPER = document.querySelectorAll(".message-item");
      const MESSAGE_ACTIONS = `<div class="card card-emphasis border flex-row position-absolute end-0 top-0 mt-n9 me-2 text-body-emphasis flex z-3 p-1">
										<a href="" class="icon ph ph-smiley"></a>
										<a href="" class="icon ph ph-share-fat"></a>
										<a href="" class="icon ph ph-push-pin-simple"></a>
										<div class="dropdown">
											<button class="icon ph ph-dots-three-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<span class="visually-hidden">More</span>
											</button>
											<div class="dropdown-menu dropdown-menu-end">
												<a class="dropdown-item" href="#"> <i class="ph ph-copy"></i>Copy Message</a>
												<a class="dropdown-item" href="#"> <i class="ph ph-hand-pointing"></i>Follow Message</a>
												<a class="dropdown-item" href="#"> <i class="ph ph-trash"></i>Delete</a>
												<a class="dropdown-item" href="#"> <i class="ph ph-share-fat"></i>Share</a>
											</div>
										</div>
									</div>`;

      // Toggle the action dropdown on hover
      MESSAGE_ACTION_WRAPPER.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
          actions.innerHTML = MESSAGE_ACTIONS;
          item.appendChild(actions);
        });

        item.addEventListener("mouseleave", (e) => {
          actions.remove();
        });
      });
    }
  })();

  // Channel members
  (() => {
    const MEMBERS_WRAPPER = document.getElementById("channel-members");
    let membersList = "";

    if (MEMBERS_WRAPPER) {
      CHANNEL_MEMBERS.map((item) => {
        let online;
        item.online === true ? (online = "border-200") : (online = "border-success");

        membersList += `<button type="button" class="d-flex w-100 align-items-center py-2 px-3 bg-hover rounded gap-3">
									<img src="${contactImages[item.id]}" class="avatar avatar-sm" />
									<div class="flex-grow-1 d-flex align-items-center leading-none">
										<div class="text-body-emphasis">${item.display}</div>
										<i class="w-3 h-3 mx-2 rounded-circle border border-2 ${online}"></i>
										<div class="text-body-secondary fs-7 d-none d-sm-block">${item.name}</div>
									</div>
								</button>`;
      });

      MEMBERS_WRAPPER.innerHTML = membersList;
    }
  })();

  // Channel files
  (() => {
    const FILES_WRAPPER = document.getElementById("channel-files");
    let filesList = "";

    if (FILES_WRAPPER) {
      CHANNEL_FILES.map((item) => {
        let icon;

        if (item.img) {
          icon = `<img src="${galleryImages[item.img]}" class="avatar avatar-md" />`;
        } else {
          icon = `<i class="avatar avatar-md ph ${item.icon}"></i>`;
        }

        filesList += `<button type="button" class="d-flex w-100 align-items-center py-3 px-3 bg-hover rounded gap-3">
									${icon}
									<div class="flex-grow-1 lh-1">
										<div class="text-body-emphasis mb-2">${item.name}</div>
										<div class="text-body-secondary fs-8">by ${item.owner} on ${item.date}</div>
									</div>
								</button>`;
      });

      FILES_WRAPPER.innerHTML = filesList;
    }
  })();
};
