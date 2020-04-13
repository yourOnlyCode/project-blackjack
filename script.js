// blackjack time

// Establish variables:
let score = document.querySelector('#score')
score.textContent = 'Bank: '
let moneySum = 500
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
let cards = ["ace", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
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

const startGame = () => {
    message.textContent = "Hit or Stand?"
    p01 = randomNum(13)
    playerSum = playerSum + Number(p01)
    p02 = randomNum(13)
    playerSum = playerSum + Number(p02)
    console.log(playerSum)
    d01 = randomNum(13)
    dealerSum = d01
    console.log(dealerSum)
}
// starts game when submit button is clicked
submit.addEventListener('click', (evt) => {
    if (input.value > 0) {
        evt.preventDefault()
        moneySum = moneySum - Number(input.value)
        money.textContent = (`$${moneySum}`)
        console.log(money)
        startGame()
    }
    else if (input.value <= 0) {
        message.textContent = 'A bet must be placed to play!'
    }
})

hit.addEventListener('click', (evt) => {
    if (p03.textContent === null || p03.textContent === undefined) {
        p03 = randomNum(13)
        playerSum = playerSum + p03
        console.log(playerSum)
    }
    else if (p04.textContent === null || p04.textContent === undefined) {
        p04 = randomNum(13)
        playerSum = playerSum + p04
        console.log(playerSum)
    }
    else if (p05.textContent === null || p05.textContent === undefined) {
        p05 = randomNum(13)
        playerSum = playerSum + p05
        console.log(playerSum)
    }
})

