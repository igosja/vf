import { BILLING_HISTORY_DATA } from "./data";

export const billing = () => {
  const WRAPPER = document.getElementById("billing-history");
  const FILTER = document.getElementById("billing-filter");

  if (WRAPPER) {
    const badgeClass = {
      Paid: "border-success text-success",
      Pending: "border-warning text-warning",
      Failed: "border-danger text-danger",
    };

    const PRINT_FILTER = document.getElementById("billing-print-filter");
    const PRINT_COUNT = document.getElementById("billing-print-count");
    const PRINT_TOTAL = document.getElementById("billing-print-total");

    document.getElementById("billing-print-date").textContent = new Date().toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    );

    const render = (status = "all") => {
      const items = BILLING_HISTORY_DATA.filter(
        (item) => status === "all" || item.status === status
      );
      const total = items.reduce((sum, item) => sum + parseFloat(item.amount.replace(/[$,]/g, "")), 0);

      PRINT_FILTER.textContent = status === "all" ? "All invoices" : `${status} invoices`;
      PRINT_COUNT.textContent = items.length;
      PRINT_TOTAL.textContent = total.toLocaleString("en-US", { style: "currency", currency: "USD" });

      WRAPPER.innerHTML = items
        .map(
          (item) => `<tr class="align-middle">
                      <td><a href="invoice.html" class="text-body-emphasis fw-medium">${item.id}</a></td>
                      <td>${item.date}</td>
                      <td>${item.description}</td>
                      <td><span class="badge rounded-pill border ${badgeClass[item.status]}">${item.status}</span></td>
                      <td class="text-end text-body-emphasis">${item.amount}</td>
                      <td class="text-end d-print-none">
                        <a href="invoice.html" class="icon ph ph-download my-n1">
                          <span class="visually-hidden">Download ${item.id}</span>
                        </a>
                      </td>
                    </tr>`
        )
        .join("");
    };

    render();

    FILTER.addEventListener("click", (e) => {
      const button = e.target.closest("[data-status]");
      if (!button) return;

      FILTER.querySelectorAll(".nav-link").forEach((el) =>
        el.classList.toggle("active", el === button)
      );
      render(button.dataset.status);
    });
  }
};
