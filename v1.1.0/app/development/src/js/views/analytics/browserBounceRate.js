import { getPaths } from "../../utils";

export const browserBounceRate = () => {
  const images = getPaths("browser");
  const WRAPPER = document.getElementById("list-browser-rate");
  const DATA = [
    {
      browser: "Google Chrome",
      rate: "22443",
      percentage: "81",
      icon: "chrome",
      up: false,
      color: "bg-success",
    },
    {
      browser: "Apple Safari",
      rate: "18312",
      percentage: "54",
      icon: "safari",
      up: true,
      color: "bg-info",
    },
    {
      browser: "Mozilla Firefox",
      rate: "16234",
      percentage: "43",
      icon: "firefox",
      up: true,
      color: "bg-warning",
    },
    {
      browser: "Microsoft Edge",
      rate: "12956",
      percentage: "32",
      icon: "edge",
      up: false,
      color: "bg-primary",
    },
    {
      browser: "Opera",
      rate: "10090",
      percentage: "25",
      icon: "opera",
      up: false,
      color: "bg-danger",
    },
    {
      browser: "Internet Explorer",
      rate: "8354",
      percentage: "18",
      icon: "ie",
      up: false,
      color: "bg-info",
    },
    {
      browser: "Samsung Internet",
      rate: "7856",
      percentage: "15",
      icon: "samsung",
      up: true,
      color: "bg-indigo bg-opacity",
    },
  ];
  let list = "";
  let last = DATA.length - 1;

  if (WRAPPER) {
    DATA.map((item, index) => {
      list += `<div class="d-flex align-items-center flex-wrap">
                        <img class="w-5 h-5 me-4" src="${images[item.icon]}" alt="${item.browser}" />

						<div class="flex-grow-1">${item.browser}</div>

						<div class="fs-5 fw-medium text-end w-16">${item.rate}</div>

						<div class="fs-7 ms-4 d-none d-sm-flex align-items-center justify-content-end w-14 ${item.up ? "text-success" : "text-danger"}">
							${item.percentage}

							<i class="ph fs-5 ms-1 ${item.up ? "ph-arrow-circle-up" : "ph-arrow-circle-down"}"></i>
						</div>

						<div class="progress w-100 my-3 h-0.5" role="progressbar" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100">
							<div class="progress-bar ${item.color}" style="width: ${item.percentage}%"></div>
						</div>
                    </div>`;

      WRAPPER.innerHTML = list;
    });
  }
};
