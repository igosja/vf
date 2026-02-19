export const recentOrders = () => {
  const WRAPPER = document.getElementById("recent-orders");

  if (WRAPPER) {
    let list = "";
    const DATA = [
      {
        order: 96474,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Unfulfilled",
        quantity: 1,
        currency: "USD",
        total: "$29.69",
      },
      {
        order: 96475,
        date: "12/12/2023",
        status: "Failed",
        fullfillment: "Unfulfilled",
        quantity: 2,
        currency: "USD",
        total: "$59.38",
      },
      {
        order: 96476,
        date: "12/12/2023",
        status: "Pending",
        fullfillment: "Unfulfilled",
        quantity: 1,
        currency: "USD",
        total: "$29.69",
      },
      {
        order: 96477,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Unfulfilled",
        quantity: 7,
        currency: "EUR",
        total: "$2389.00",
      },
      {
        order: 96478,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Unfulfilled",
        quantity: 1,
        currency: "EUR",
        total: "$7.11",
      },
      {
        order: 96479,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Unfulfilled",
        quantity: 3,
        currency: "USD",
        total: "$45.99",
      },
      {
        order: 96480,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Fulfilled",
        quantity: 12,
        currency: "USD",
        total: "$542.79",
      },
      {
        order: 96481,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Fulfilled",
        quantity: 1,
        currency: "AUD",
        total: "$99.99",
      },
      {
        order: 96482,
        date: "12/12/2023",
        status: "Paid",
        fullfillment: "Fulfilled",
        quantity: 2,
        currency: "USD",
        total: "$15.00",
      },
      {
        order: 96483,
        date: "12/13/2023",
        status: "Paid",
        fullfillment: "Fulfilled",
        quantity: 1,
        currency: "USD",
        total: "$8.00",
      },
      {
        order: 96484,
        date: "12/14/2023",
        status: "Pending",
        fullfillment: "Unfulfilled",
        quantity: 3,
        currency: "USD",
        total: "$22.50",
      },
    ];

    DATA.forEach((item, index) => {
      // Status badge
      let statusClass = "bg-success bg-opacity-10 text-success";
      if (item.status === "Failed") {
        statusClass = "bg-danger bg-opacity-10 text-danger";
      } else if (item.status === "Pending") {
        statusClass = "bg-warning bg-opacity-10 text-warning-emphasis";
      }

      // Fulfillment badge
      let fullfillmentClass = "bg-success bg-opacity-10 text-success";
      if (item.fullfillment === "Unfulfilled") {
        fullfillmentClass = "bg-warning bg-opacity-10 text-warning-emphasis";
      }

      list += `<div class="d-flex justify-content-between align-items-center text-body-emphasis h-12 ${index !== DATA.length - 1 ? "border-bottom" : ""}">
                        <div class="w-20 flex-shrink-0">#${item.order}</div>
                        <div class="w-20 flex-shrink-0 d-none d-sm-block">${item.date}</div>
                        <div class="w-16 flex-shrink-0">
                            <span class="badge fs-8 rounded-pill flex-shrink-0 ${statusClass}">${item.status}</span>
                        </div>
                        <div class="w-16 flex-shrink-0 d-none d-xxl-block">
                            <span class="badge fs-8 rounded-pill flex-shrink-0 text-white ${fullfillmentClass}">${item.fullfillment}</span>
                        </div>
                        <div class="w-20 flex-shrink-0">${item.total}</div>
                    </div>`;
    });

    WRAPPER.innerHTML = list;
  }
};
