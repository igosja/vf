import { Datepicker, DateRangePicker } from "vanillajs-datepicker";
import "../../../node_modules/vanillajs-datepicker/dist/css/datepicker.min.css";

export const vanillajsDatepicker = () => {
  // Datepicker
  const DATEPICKER_ELS = document.querySelectorAll(".date-picker");

  DATEPICKER_ELS.forEach((el) => {
    const DATEPICKER = new Datepicker(el, {
      todayHighlight: true,
      buttonClass: "btn",
      nextArrow: "<i class='ph ph-arrow-right'></i>",
      prevArrow: "<i class='ph ph-arrow-left'></i>",
    });
  });

  // Date Range Picker
  const RANGEPICKER_ELS = document.querySelectorAll(".range-picker");

  RANGEPICKER_ELS.forEach((el) => {
    const RANGEPICKER = new DateRangePicker(el, {
      buttonClass: "btn",
      nextArrow: "<i class='ph ph-arrow-right'></i>",
      prevArrow: "<i class='ph ph-arrow-left'></i>",
      clearButton: true,
      todayButton: true,
    });
  });
};
