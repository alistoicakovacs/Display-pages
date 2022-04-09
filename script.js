const firstPageDiv = document.querySelector(".first-page");
const secondPageDiv = document.querySelector(".second-page");
const thirdPageDiv = document.querySelector(".third-page");
const firstButton = document.querySelector(".button-first");
const secondButton = document.querySelector(".button-second");
const thirdButton = document.querySelector(".button-third");

// First Page
firstButton.addEventListener("click", clickEvent);

secondButton.addEventListener("click", clickEvent);

thirdButton.addEventListener("click", clickEvent);

function clickEvent() {
	if (document.querySelector(".active") !== null) {
		document.querySelector(".active").classList.remove("active");
	}
	if (this == firstButton) firstPageDiv.classList.add("active");
	if (this == secondButton) secondPageDiv.classList.add("active");
	if (this == thirdButton) thirdPageDiv.classList.add("active");
}

/* 
1. Check if the page has the active class => with query selector
2. Check which button is clicked
3. Open the new page
4. If another page is open, then close the other page and open the new one.
*/
