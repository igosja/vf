import { COLORS, rgb } from "../../utils";

// Share of each monthly cohort still subscribed, by month since signup
const DATA = [
  { cohort: "Apr 2026", customers: 412, retention: [100, 88, 81, 77, 74, 72] },
  { cohort: "May 2026", customers: 438, retention: [100, 90, 83, 79, 76] },
  { cohort: "Jun 2026", customers: 465, retention: [100, 89, 84, 80] },
  { cohort: "Jul 2026", customers: 491, retention: [100, 91, 86] },
  { cohort: "Aug 2026", customers: 503, retention: [100, 92] },
  { cohort: "Sep 2026", customers: 527, retention: [100] },
];

const MONTHS = 6;

export const cohortRetention = () => {
  const WRAPPER = document.getElementById("list-cohort-retention");
  if (!WRAPPER) return;

  // Map 70-100% retention onto the cell color strength
  const cell = (value) => {
    if (value === undefined) {
      return `<td class="p-1"><div class="rounded-2 h-10 p-2.5 bg-highlight"></div></td>`;
    }

    const strength = Math.max(0.12, (value - 65) / 35);
    const text = strength > 0.6 ? "text-white" : "text-body-emphasis";

    return `<td class="p-1">
              <div class="h-10 rounded-2 p-2.5 text-center ${text}" style="background-color: ${rgb(COLORS.teal, strength)}">${value}%</div>
            </td>`;
  };

  WRAPPER.innerHTML = DATA.map(
    (item) => `<tr class="align-middle">
                 <td class="ps-0 text-body-emphasis">${item.cohort}</td>
                 <td class="text-end pe-4 text-body-secondary">${item.customers}</td>
                 ${Array.from({ length: MONTHS }, (_, i) => cell(item.retention[i])).join("")}
               </tr>`
  ).join("");
};
