import { getPaths } from "../../utils";

export const topProducts = () => {
  const images = getPaths("product");
  const WRAPPER = document.getElementById("top-products");

  if (WRAPPER) {
    let list = "";
    const DATA = [
      {
        img: 1,
        name: "Hempthon Professional Makeup Setting Oil, 60ml",
        orders: 4532,
        sales: "$12,924.00",
        up: false,
        percentage: 9.43,
        category: "Skin Care",
      },
      {
        img: 2,
        name: "Fenton Shaker Bottle for Protein Mixes BPA-Free Leak Proof 750ml",
        orders: 4487,
        sales: "$11,324.67",
        up: true,
        percentage: 12.43,
        category: "Sports Nutrition",
      },
      {
        img: 3,
        name: "Bioskep Simple Hydrating Light Daily Face Moisturizer, 125ml",
        orders: 3982,
        sales: "$10,924.00",
        up: false,
        percentage: 32.38,
        category: "Men's Grooming",
      },
      {
        img: 4,
        name: "Fantasi Shaving Foam, DEEP Smooth Shave Antibacterial, 200ml",
        orders: 3241,
        sales: "$8,093.21",
        up: true,
        percentage: 8.23,
        category: "Men's Grooming",
      },
      {
        img: 5,
        name: "Davids Perfume Cool Water for women, 250ml",
        orders: 2985,
        sales: "$7,653.63",
        up: true,
        percentage: 24.54,
        category: "Perfumes",
      },
      {
        img: 6,
        name: "Turmeric Healing Night Beauty Balm for Dark Spots, 40gm",
        orders: 2543,
        sales: "$7,012.93",
        up: false,
        percentage: 2.43,
        category: "Skin Care",
      },
      {
        img: 7,
        name: "ChoicePerfect Boost 10% Azelaic Acid Booster, 1oz Tube",
        orders: 2134,
        sales: "$6,837.90",
        up: true,
        percentage: 4.56,
        category: "Hair Care",
      },
      {
        img: 8,
        name: "NaturesRed 100% Pure Organic Lipstick, 10ml",
        orders: 424,
        sales: "$1,857.10",
        up: true,
        percentage: 22.32,
        category: "Skin Care",
      },
    ];

    DATA.forEach((item) => {
      list += `<a href="" class="bg-hover rounded d-flex align-items-start p-3 mx-n3">
                        <img alt="" class="w-12 w-md-20 h-12 object-fit-cover rounded me-4 flex-shrink-0" src="${images[item.img]}" />
                        <div class="flex-grow-1 pe-5 text-truncate">
                            <div class="text-body-emphasis mb-1 text-truncate">${item.name}</div>
                            <div class="fs-7 text-body-secondary ts-none">${item.orders} items sold</div>
                        </div>
                        <div class="fs-7 d-flex align-items-center justify-content-end ms-auto w-16 ts-none ${item.up ? "text-success" : "text-danger"}">
                            <i class="ph ${item.up ? "ph-arrow-circle-up" : "ph-arrow-circle-down"} fs-4 me-1"></i>
                            ${item.percentage}%
                        </div>
                    </a>`;
    });

    WRAPPER.innerHTML = list;
  }
};
