export const header = () => {
	const HEADER = document.querySelector(".headerd");
	const CONTENT_INNER = document.querySelector(".content-innerd");

	const handleScroll = (el) => {
		if (window.innerWidth > 576) {
			el.addEventListener(
				"scroll",
				() => {
					HEADER.classList.toggle("header-stuck", el.scrollTop > 20);
				},
				{ passive: true }
			);
		}
	};

	const observer = new MutationObserver(() => {
		const CONTENT = document.querySelector(".content-inner .simplebar-content-wrapper");

		if (CONTENT) {
			handleScroll(CONTENT);
		}
	});

	if (HEADER && CONTENT_INNER) {
		observer.observe(CONTENT_INNER, {
			childList: true,
			subtree: true,
		});
	}
};
