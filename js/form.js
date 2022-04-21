// Transição de tipos de forms //
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});

// Expand Header Navgation Function
function expandNavgation() {
	let navgation = document.querySelector(".header .main-navgation");
	let toggleMenu = document.querySelector(".header .burger-menu");
	let icon = toggleMenu.querySelector(".icon");
	let closed = true;

	toggleMenu.addEventListener("click", () => {
		// Change Icon
		if (icon.classList.contains("fa-bars")) {
			icon.className = "fa-solid fa-xmark icon";
		} else {
			icon.className = "fa-solid fa-bars icon";
		}

		// Open Or Close Navgation Menu
		let navgationHeight = navgation.scrollHeight;
		if (closed) {
			navgation.style.height = `${navgationHeight}px`;
		} else {
			navgation.style.height = "";
		}
		closed = !closed;
	});
	// Close Navgation For Devices Greater Than 992px Width.
	window.addEventListener("resize", () => {
		if (window.innerWidth > 992) {
			icon.className = "fa-solid fa-bars icon";
			navgation.style.height = "";
			closed = true;
		}
	});
}
expandNavgation();