'use strict'

let colorsArr= ['Green','blue','red','yallow','black','white','orange','rgba(133,122,200)','#F1f5f8','#F15025']

let button = document.getElementById('btn')
let color = document.querySelector('.color')
// let body =document.getElementsByTagName('body')

button.addEventListener('click',handle)

function handle(event) {
    event.preventDefault();
    let randomColor= getRandomColor()
    document.body.style.backgroundColor=colorsArr[randomColor]
    color.textContent=colorsArr[randomColor]
}

function getRandomColor(){
    return Math.floor(Math.random()*colorsArr.length)
}
