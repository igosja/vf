const DATA = [
  { step: "Website visitors", icon: "ph-globe-simple", count: 48200 },
  { step: "Sign-ups", icon: "ph-user-plus", count: 6120 },
  { step: "Trials started", icon: "ph-rocket-launch", count: 3240 },
  { step: "Paid conversions", icon: "ph-credit-card", count: 920 },
];

export const trialFunnel = () => {
  const WRAPPER = document.getElementById("list-trial-funnel");
  if (!WRAPPER) return;

  const TOP = DATA[0].count;

  WRAPPER.innerHTML = DATA.map((item, index) => {
    const width = Math.max(8, Math.round((item.count / TOP) * 100));
    const rate = index ? `${((item.count / DATA[index - 1].count) * 100).toFixed(1)}%` : "";

    return `<div class="${index !== DATA.length - 1 ? "mb-5" : ""}">
              <div class="d-flex align-items-center gap-2 mb-2">
                <i class="ph ${item.icon} fs-4"></i>
                <div class="flex-grow-1 text-body-emphasis">${item.step}</div>
                ${rate ? `<span class="fs-8 text-body-secondary">${rate}</span>` : ""}
                <div class="fs-5 text-body-emphasis w-16 text-end">${item.count.toLocaleString()}</div>
              </div>
              <div class="bg-highlight rounded-pill">
                <div class="h-2 rounded-pill bg-info" style="width: ${width}%"></div>
              </div>
            </div>`;
  }).join("");
};
