

const eleSquares = document.querySelector (".squares");
let i 
for (let i = 1; i <= 100 ; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        eleSquares.innerHTML += `<div class="square15">${"FizzBuzz"}</div>`     
        }
    else if (i % 3 == 0 && i % 5 != 0 ) {
     eleSquares.innerHTML += `<div class="square3">${"Fizz "}</div>`   
    }
    else if (i % 5 == 0 && i % 3 != 0) {
    eleSquares.innerHTML += `<div class="square5">${"Buzz"}</div>`   
    }
    else if(i % 3 != 0 && i % 5 != 0){
    eleSquares.innerHTML += `<div class="square">${i}</div>`   
    }
}
    