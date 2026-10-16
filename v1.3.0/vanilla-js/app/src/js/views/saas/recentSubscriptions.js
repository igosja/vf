import { getPaths } from "../../utils";

const STATUS_CLASS = {
  Active: "border-success text-success",
  Trial: "border-primary text-primary",
  "Past due": "border-warning text-warning",
  Canceled: "border-danger text-danger",
};

const DATA = [
  {
    img: 2,
    name: "Harper Collins",
    company: "Brightwave Labs",
    plan: "Business",
    billing: "Yearly",
    status: "Active",
    mrr: 468,
  },
  {
    img: 5,
    name: "Liam Turner",
    company: "Northpeak",
    plan: "Pro",
    billing: "Monthly",
    status: "Trial",
    mrr: 0,
  },
  {
    img: 8,
    name: "Sofia Martinez",
    company: "Cloudnest",
    plan: "Enterprise",
    billing: "Yearly",
    status: "Active",
    mrr: 1275,
  },
  {
    img: 11,
    name: "Ethan Brooks",
    company: "Pixelforge",
    plan: "Starter",
    billing: "Monthly",
    status: "Past due",
    mrr: 36,
  },
  {
    img: 14,
    name: "Ava Richardson",
    company: "Lumen Health",
    plan: "Pro",
    billing: "Monthly",
    status: "Active",
    mrr: 290,
  },
  {
    img: 16,
    name: "Noah Fischer",
    company: "Quantly",
    plan: "Business",
    billing: "Monthly",
    status: "Canceled",
    mrr: 0,
  },
];

export const recentSubscriptions = () => {
  const WRAPPER = document.getElementById("list-recent-subscriptions");
  if (!WRAPPER) return;

  const images = getPaths("contact");

  WRAPPER.innerHTML = DATA.map(
    (item) => `<tr class="align-middle">
                 <td class="py-3">
                   <div class="d-flex align-items-center gap-3">
                     <img class="avatar" src="${images[item.img]}" alt="${item.name}" />
                     <div class="lh-sm">
                       <div class="text-body-emphasis mb-0.5">${item.name}</div>
                       <div class="fs-8 text-body-secondary">${item.company}</div>
                     </div>
                   </div>
                 </td>
                 <td>${item.plan}</td>
                 <td>${item.billing}</td>
                 <td><span class="badge rounded-pill border ${STATUS_CLASS[item.status]}">${item.status}</span></td>
                 <td class="text-end text-body-emphasis">$${item.mrr.toLocaleString()}</td>
               </tr>`
  ).join("");
};
