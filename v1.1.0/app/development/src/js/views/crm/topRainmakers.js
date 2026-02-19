import { getPaths } from "../../utils";

export const topRainmakers = () => {
  const images = getPaths("contact");
  const WRAPPER = document.getElementById("list-top-rainmakers");
  const DATA = [
    {
      img: 11,
      name: "John Smith",
      total_sales: 1200000,
      deals_closed: 45,
      performance: 10.5,
    },
    {
      img: 12,
      name: "Jane Johnson",
      total_sales: 950000,
      deals_closed: 50,
      performance: 7.2,
    },
    {
      img: 13,
      name: "Michael Williams",
      total_sales: 850000,
      deals_closed: 38,
      performance: 8.1,
    },
    {
      img: 14,
      name: "Emily Davis",
      total_sales: 780000,
      deals_closed: 42,
      performance: 9.5,
    },
    {
      img: 15,
      name: "David Brown",
      total_sales: 720000,
      deals_closed: 40,
      performance: 8.9,
    },
    {
      img: 16,
      name: "Mary Miller",
      total_sales: 650000,
      deals_closed: 35,
      performance: 7.8,
    },
    {
      img: 10,
      name: "Robert Wilson",
      total_sales: 620000,
      deals_closed: 30,
      performance: 6.5,
    },
  ];
  let list = "";
  let last = DATA.length - 1;

  if (WRAPPER) {
    DATA.forEach((item, index) => {
      list += `<div class="d-flex align-items-center gap-4 ${index !== last ? "mb-5" : "mb-2"}">
                        <img class="avatar" src="${images[item.img]}" alt="${item.name}">

                        <div class="flex-grow-1">
                            <div class="mb-1">${item.name}</div>
                            <div class="text-body-secondary fs-7">
                                <span class="border rounded ms-npx px-1.5 py-0.5 d-inline-block">Deals Closed: ${item.deals_closed}</span>
                                <span class="border rounded ms-0.5 px-2 py-0.5 d-none d-sm-inline-block">Performance: ${item.performance}</span>
                            </div>
                        </div>
                         
                        <div class="fs-5">$${item.total_sales.toLocaleString()}</div>
                    </div>
            `;
    });

    WRAPPER.innerHTML = list;
  }
};
