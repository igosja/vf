import { DATA } from "./data";
import { getPaths } from "../../utils";

export const teams = () => {
  const contactImages = getPaths("contact");
  const teamImages = getPaths("team");
  const WRAPPER = document.getElementById("teams");
  let list = "";

  if (WRAPPER) {
    DATA.map((item) => {
      let members = "";

      item.members.map((member) => {
        members += `<img class="avatar avatar-sm" src="${contactImages[member.img]}">`;
      });

      list += `<div class="card p-1 g-col-12 g-col-md-6 g-col-lg-4">
                        <img class="w-100 h-32 object-fit-cover rounded-3" src="${teamImages[item.img]}" alt="">
                        
                        <div class="p-5 text-center">
                            <h3 class="text-body-emphasis fw-bold mb-2 fs-6">${item.title}</h3>
                            <div class="mb-5 text-body-secondary">${item.description}</div>
    
                            <div class="d-flex align-items-center justify-content-center mb-2 gap-1">
                                ${members}
                            </div>
                            
                            <div class="text-body-secondary fs-7">${item.count} Members</div>
                        </div>
                    </div>`;
    });

    WRAPPER.innerHTML = list;
  }
};
