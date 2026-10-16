const DATA = [
  { reason: "Too expensive", percentage: 34, className: "bg-danger" },
  { reason: "Missing features", percentage: 22, className: "bg-warning" },
  { reason: "Switched to a competitor", percentage: 18, className: "bg-purple" },
  { reason: "No longer needed", percentage: 15, className: "bg-primary" },
  { reason: "Poor support experience", percentage: 6, className: "bg-teal" },
  { reason: "Other", percentage: 5, className: "bg-secondary" },
];

export const churnReasons = () => {
  const WRAPPER = document.getElementById("list-churn-reasons");
  if (!WRAPPER) return;

  WRAPPER.innerHTML = DATA.map(
    (item, index) => `<div class="${index !== DATA.length - 1 ? "mb-5" : ""}">
                        <div class="d-flex align-items-center mb-2.5">
                          <div class="flex-grow-1 text-body-emphasis">${item.reason}</div>
                          <div class="fs-5 text-body-emphasis">${item.percentage}%</div>
                        </div>
                        <div class="progress h-1" role="progressbar" aria-label="${item.reason}" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar ${item.className}" style="width: ${item.percentage}%"></div>
                        </div>
                      </div>`
  ).join("");
};
