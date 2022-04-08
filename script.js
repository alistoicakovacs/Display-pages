const firstPageDiv = document.querySelector('.first-page')
const secondPageDiv = document.querySelector('.second-page')
const thirdPageDiv = document.querySelector('.third-page')
const firstButton = document.querySelector('.button-first')
const secondButton = document.querySelector('.button-second')
const thirdButton = document.querySelector('.button-third')

firstButton.addEventListener('click', function() {
    firstPageDiv.removeAttribute('display')

    
    if (firstButton.clicked == true || firstButton.innerText=== "Close") {
        firstButton.innerText='First Page'
    
    } else if (firstButton.clicked == true || firstButton.innerText== "First Page") {
        firstButton.innerText='Close'
    }
})
