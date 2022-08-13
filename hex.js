'use strict'

let colorsArr =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

let button =document.getElementById('btn')
let color= document.querySelector('.color')

button.addEventListener('click',handle)

function handle(event) {
    event.preventDefault()
    let randomColor ='#'
    for (let i = 0; i < 6; i++) {
        randomColor += colorsArr[getRandomColor()]
    }
    document.body.style.backgroundColor=randomColor
    color.textContent=randomColor
}

function getRandomColor() {
    return Math.floor(Math.random()*colorsArr.length)
}