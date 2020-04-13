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
// dealer images
let dI1 = document.querySelector('#dI1')
let dI2 = document.querySelector('#dI2')
let dI3 = document.querySelector('#dI3')
let dI4 = document.querySelector('#dI4')
let dI5 = document.querySelector('#dI5')

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

let cardBack = "cards/Green_back.jpg"

deck[0] = "cards/2C.jpg"
deck[1] = "cards/3C.jpg"
deck[2] = "cards/4C.jpg"
deck[3] = "cards/5C.jpg"
deck[4] = "cards/6C.jpg"
deck[5] = "cards/7C.jpg"
deck[6] = "cards/8C.jpg"
deck[7] = "cards/9C.jpg"
deck[8] = "cards/10C.jpg"
deck[9] = "cards/JC.jpg"
deck[10] = "cards/QC.jpg"
deck[11] = "cards/KC.jpg"
deck[12] = "cards/AC.jpg"

deck[13] = "cards/2D.jpg"
deck[14] = "cards/3D.jpg"
deck[15] = "cards/4D.jpg"
deck[16] = "cards/5D.jpg"
deck[17] = "cards/6D.jpg"
deck[18] = "cards/7D.jpg"
deck[19] = "cards/8D.jpg"
deck[20] = "cards/9D.jpg"
deck[21] = "cards/10D.jpg"
deck[22] = "cards/JD.jpg"
deck[23] = "cards/QD.jpg"
deck[24] = "cards/KD.jpg"
deck[25] = "cards/AD.jpg"

deck[26] = "cards/2H.jpg"
deck[27] = "cards/3H.jpg"
deck[28] = "cards/4H.jpg"
deck[29] = "cards/5H.jpg"
deck[30] = "cards/6H.jpg"
deck[31] = "cards/7H.jpg"
deck[32] = "cards/8H.jpg"
deck[33] = "cards/9H.jpg"
deck[34] = "cards/10H.jpg"
deck[35] = "cards/JH.jpg"
deck[36] = "cards/QH.jpg"
deck[37] = "cards/KH.jpg"
deck[38] = "cards/AH.jpg"

deck[39] = "cards/2S.jpg"
deck[40] = "cards/3S.jpg"
deck[41] = "cards/4S.jpg"
deck[42] = "cards/5S.jpg"
deck[43] = "cards/6S.jpg"
deck[44] = "cards/7S.jpg"
deck[45] = "cards/8S.jpg"
deck[46] = "cards/9S.jpg"
deck[47] = "cards/10S.jpg"
deck[48] = "cards/JS.jpg"
deck[49] = "cards/QS.jpg"
deck[50] = "cards/KS.jpg"
deck[51] = "cards/AS.jpg"

// Card display area:
function randomCard(deck) {
    let randomI = Math.floor(deck.length * Math.random())
    return deck[randomI]
}


// Establish elements on page


// Board interactions


// Board functions
// Keeps the random card between 1 and 13 (ace - king)
const randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 2)
}

const startGame = () => {
    message.textContent = "Hit or Stand?"
    playerHand = [randomCard(deck), randomCard(deck)]
    pI1.setAttribute('src', playerHand[0])
    pI2.setAttribute('src', playerHand[1])
    dealerHand = [randomCard(deck), randomCard(deck)]
    dI1.setAttribute('src', dealerHand[0])
    dI2.setAttribute('src', cardBack)
    playerScoreCheck()
    dealerScoreCheck()
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
    playerScoreCheck()
    dealerScoreCheck()
    console.log('hit working')
    if (playerHand.length <= 2) {
        playerHand.push(randomCard(deck))
        pI3.setAttribute('src', playerHand[2])
        console.log('hit working again')
        dealerHand.push(randomCard(deck))
        dI2.setAttribute('src', dealerHand[1])
        dI3.setAttribute('src', cardBack)
    }
    else if (playerHand.length <= 3) {
        playerHand.push(randomCard(deck))
        pI4.setAttribute('src', playerHand[3])
        dealerHand.push(randomCard(deck))
        dI3.setAttribute('src', dealerHand[2])
        dI4.setAttribute('src', cardBack)
    }
    else if (playerHand.length <= 4) {
        playerHand.push(randomCard(deck))
        pI5.setAttribute('src', playerHand[4])

    }
})
if (Number(p01) > 0) {
    pI1.setAttribute('src', "cards/10C.jpg")
    pI1.setAttribute('width', '95px')
    console.log('append working')
}

const playerScoreCheck = () => {
    console.log('Player score being checked')
    for (let i = 0; i < playerHand.length; i++) {
        playerSum += playerHand[i]
        if (playerSum > 21) {
            alert('Bust!')
            playerHand = []
        }
    }
}

const dealerScoreCheck = () => {
    console.log('Dealer score being checked')
    for (let i = 0; i < dealerHand.length; i++) {
        dealerSum += dealerHand[i]
        if (dealerSum > 21) {
            alert("Dealer's bust! You win!")
            dealerHand = []
        }
    }
}
