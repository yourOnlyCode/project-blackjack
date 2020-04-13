// blackjack time

// Establish variables:
let score = document.querySelector('#score')
score.textContent = 'Bank: '
let money = document.querySelector('#money')
money.textContent = ' $500'

let dealer
let dealerHand
let dealerSum = 0
let d01 = document.querySelector('#d01')
let d02 = document.querySelector('#d02')
let d03 = document.querySelector('#d03')
let d04 = document.querySelector('#d04')
let d05 = document.querySelector('#d05')
let player
let playerHand
let playerSum = 0
let p01 = document.querySelector('#p01')
let p02 = document.querySelector('#p02')
let p03 = document.querySelector('#p03')
let p04 = document.querySelector('#p04')
let p05 = document.querySelector('#p05')
const hit = document.querySelector('#hit')
const stand = document.querySelector('#stand')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
let cars = ["ace", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
let message = document.querySelector('#message')
message.textContent = 'Place your bet!'

// Dealer card display area


// Player card display area


// Establish elements on page


// Board interactions


// Board functions
// Keeps the random card between 1 and 13 (ace - king)
const randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 1)
}
console.log(randomNum(21))

const startGame = () => {
    message.textContent = "Hit or Stand?"
    p01.textContent = randomNum(13)
    playerSum = p01
    p02.textContent = randomNum(13)
    playerSum = p02
    console.log(playerSum)
    d01.textContent = randomNum(13)
    dealerSum = d01
    console.log(dealerSum)
}
// starts game when submit button is clicked
submit.addEventListener('click', (evt) => {
    startGame()
    evt.preventDefault()
    money = money - Number(input.value)
    money.textContent = (`$${money}`)
    console.log(money)
})

