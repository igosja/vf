import * as bootstrap from "bootstrap";
import { vanillajsDatepicker } from "./vendors/vanillaJsDatepicker";
import { quillEditor } from "./vendors/quill";
import { bootstrapComponents } from "./vendors/bootstrap";
import { inputSlider } from "./vendors/input-slider";
import { colorPicker } from "./vendors/vanillaColorful";

// Simplebar (scrollbars)
import "simplebar";
import "simplebar/dist/simplebar.min.css";

// Bootstrap + compomnents
bootstrapComponents();

// Phosphor Icons
import "@phosphor-icons/web/light";
import "@phosphor-icons/web/regular";

// Vanilla JS Datepicker
vanillajsDatepicker();

// Quill
quillEditor();

// noUiSlider
inputSlider();

// Vanilla Colorful
colorPicker();
