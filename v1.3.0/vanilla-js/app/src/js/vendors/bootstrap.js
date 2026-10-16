import * as bootstrap from "bootstrap";

export const bootstrapComponents = () => {
	// Popovers
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

	// Tooltips: no arrow, so leave it out of the template
	bootstrap.Tooltip.Default.template =
		'<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>';

	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
};
