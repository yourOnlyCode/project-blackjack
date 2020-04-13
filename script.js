// blackjack time

// Establish variables:
let score = document.querySelector('#score')
score.textContent = 'Bank: '
let moneySum = 500
let money = document.querySelector('#money')
money.textContent = ' $500'

let dealer
let dealerHand = []
let dealerSum = 0
let d01 = document.querySelector('#d01')
let d02 = document.querySelector('#d02')
let d03 = document.querySelector('#d03')
let d04 = document.querySelector('#d04')
let d05 = document.querySelector('#d05')
let player
let playerHand = []
let playerSum = 0
let p01 = document.querySelector('#p01')
let p02 = document.querySelector('#p02')
let p03 = document.querySelector('#p03')
let p04 = document.querySelector('#p04')
let p05 = document.querySelector('#p05')
// player images
let pI1 = document.querySelector('#pI1')
let pI2 = document.querySelector('#pI2')
let pI3 = document.querySelector('#pI3')
let pI4 = document.querySelector('#pI4')
let pI5 = document.querySelector('#pI5')

const hit = document.querySelector('#hit')
const stand = document.querySelector('#stand')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')

let message = document.querySelector('#message')
message.textContent = 'Place your bet!'

// Define cards
let deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
]



// Dealer card display area


// Player card display area


// Establish elements on page


// Board interactions


// Board functions
// Keeps the random card between 1 and 13 (ace - king)
const randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 2)
}

const startGame = () => {
    message.textContent = "Hit or Stand?"
    p01 = randomNum(10)
    pI1 = playerHand[]

    playerSum = playerSum + Number(p01)

    p02 = randomNum(10)


    playerSum = playerSum + Number(p02)
    console.log(playerSum)
    d01 = randomNum(10)
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
    console.log('hit working')
    if (Number(p04) > 0) {
        p05 = randomNum(10)
        playerSum = playerSum + Number(p05)
        console.log(playerSum)
        console.log('p05 working')
    }
    else if (Number(p03) > 0) {
        p04 = randomNum(10)
        playerSum = playerSum + Number(p04)
        console.log(playerSum)
        console.log('p04 working')
    }
    else if (Number(p02) > 0) {
        p03 = randomNum(10)
        playerSum = playerSum + Number(p03)
        console.log(playerSum)
        console.log('p03 working')
    }

    if (playerSum > 21) {
        alert("Bust!")
        playerSum = 0
        dealerSum = 0
    }
    if (dealerSum > 21) {
        alert("Dealer's bust! You win!")
        playerSum = 0
        dealerSum = 0
    }
})
if (Number(p01) > 0) {
    pI1.setAttribute('src', "cards/10C.jpg")
    pI1.setAttribute('width', '95px')
    console.log('append working')
}