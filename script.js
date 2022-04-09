const firstPageDiv = document.querySelector(".first-page");
const secondPageDiv = document.querySelector(".second-page");
const thirdPageDiv = document.querySelector(".third-page");
const firstButton = document.querySelector(".button-first");
const secondButton = document.querySelector(".button-second");
const thirdButton = document.querySelector(".button-third");

// First Page
firstButton.addEventListener("click", function () {
	clickEvent(firstButton);
});
secondButton.addEventListener("click", function () {
	clickEvent(secondButton);
});
thirdButton.addEventListener("click", function () {
	clickEvent(thirdButton);
});

// Second Page

// secondButton.addEventListener("click", function () {
// 	secondPageDiv.classList.add("active");

// 	if (secondButton.clicked == true || secondButton.innerText === "Close") {
// 		secondButton.innerText = "Second Page";
// 		secondPageDiv.classList.remove("active");
// 	} else if (
// 		secondButton.clicked == true ||
// 		secondButton.innerText == "Second Page"
// 	) {
// 		secondButton.innerText = "Close";
// 	}
// });

const clickEvent = function (button) {
	if (document.querySelector(".active") !== null) {
		document.querySelector(".active").classList.remove("active");
	}
	if (button == firstButton) firstPageDiv.classList.add("active");
	if (button == secondButton) secondPageDiv.classList.add("active");
	if (button == thirdButton) thirdPageDiv.classList.add("active");
};
// if (button.clicked == true || button.innerText === "Close") {
// 	button.innerText = "First Page";
// 	div.classList.remove("active");
// } else if (button.clicked == true || button.innerText == "First Page") {
// 	button.innerText = "Close";
// }
// Third Page

// firstButton.addEventListener("click", function () {
// 	firstPageDiv.classList.add("active");

// 	if (firstButton.clicked == true || firstButton.innerText === "Close") {
// 		firstButton.innerText = "First Page";
// 		firstPageDiv.classList.remove("active");
// 	} else if (
// 		firstButton.clicked == true ||
// 		firstButton.innerText == "First Page"
// 	) {
// 		firstButton.innerText = "Close";
// 	}
// });

/* 
1. Check if the page has the active class => with query selector
2. Check which button is clicked
3. Open the new page
4. If another page is open, then close the other page and open the new one.
*/
