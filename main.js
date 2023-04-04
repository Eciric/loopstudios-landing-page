const hamburgerButton = document.querySelector(".mobile-hamburger");
const primaryHeader = document.querySelector(".primary-header");
const body = document.querySelector("body");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

hamburgerButton.addEventListener("click", () => {
	primaryHeader.toggleAttribute("data-visible");
	hamburgerButton.setAttribute(
		"aria-expanded",
		primaryHeader.hasAttribute("data-visible")
	);
	if (primaryHeader.hasAttribute("data-visible")) {
		body.style.height = "100%";
		body.style.overflowY = "hidden";
		iconClose.style.display = "block";
		iconHamburger.style.display = "none";
	} else {
		body.style.overflowY = "auto";
		iconClose.style.display = "none";
		iconHamburger.style.display = "block";
	}
});
