'use strict'

let form =document.getElementsByClassName('form')
form[0].addEventListener('click',handleListener);

function handleListener(event) {
    event.preventDefault();
    const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

let randomColorString = '#';
// function newColorFind(){

for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
}
 console.log(randomColorString)


// }
    color.innerHTML = "Background Color : " + randomColorString;
      
}
