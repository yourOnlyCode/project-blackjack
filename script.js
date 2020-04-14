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
let newGame = document.querySelector('#refresh')

let message = document.querySelector('#message')
message.textContent = 'Place your bet!'

// Define cards
let deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
]
let deckScore = [
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

// Score system

const playerScore = (id) => {
    if (id.match(/[2]/gi)) {
        return playerSum += 2
    }
    else if (id.match(/[3]/gi)) {
        return playerSum += 3
    }
    else if (id.match(/[4]/gi)) {
        return playerSum += 4
    }
    else if (id.match(/[5]/gi)) {
        return playerSum += 5
    }
    else if (id.match(/[6]/gi)) {
        return playerSum += 6
    }
    else if (id.match(/[7]/gi)) {
        return playerSum += 7
    }
    else if (id.match(/[8]/gi)) {
        return playerSum += 8
    }
    else if (id.match(/[9]/gi)) {
        return playerSum += 9
    }
    else if (id.match(/[10]/gi)) {
        return playerSum += 10
    }
    else if (id.match(/[jJ]/gi)) {
        return playerSum += 10
    }
    else if (id.match(/[qQ]/gi)) {
        return playerSum += 10
    }
    else if (id.match(/[kK]/gi)) {
        return playerSum += 10
    }
    else if (id.match(/[aA]/gi)) {
        return playerSum += 11
    }
    return false
}

const dealerScore = (id) => {
    if (id.match(/[2]/gi)) {
        return dealerSum += 2
    }
    else if (id.match(/[3]/gi)) {
        return dealerSum += 3
    }
    else if (id.match(/[4]/gi)) {
        return dealerSum += 4
    }
    else if (id.match(/[5]/gi)) {
        return dealerSum += 5
    }
    else if (id.match(/[6]/gi)) {
        return dealerSum += 6
    }
    else if (id.match(/[7]/gi)) {
        return dealerSum += 7
    }
    else if (id.match(/[8]/gi)) {
        return dealerSum += 8
    }
    else if (id.match(/[9]/gi)) {
        return dealerSum += 9
    }
    else if (id.match(/[10]/gi)) {
        return dealerSum += 10
    }
    else if (id.match(/[jJ]/gi)) {
        return dealerSum += 10
    }
    else if (id.match(/[qQ]/gi)) {
        return dealerSum += 10
    }
    else if (id.match(/[kK]/gi)) {
        return dealerSum += 10
    }
    else if (id.match(/[aA]/gi)) {
        return dealerSum += 11
    }
    return false
}

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
// starts game with dealer having one face up card and face down card and player two face up cards
const startGame = () => {
    message.textContent = "Hit or Stand?"
    playerHand = [randomCard(deck), randomCard(deck)]
    pI1.setAttribute('src', playerHand[0])
    pI2.setAttribute('src', playerHand[1])

    dealerHand = [randomCard(deck), randomCard(deck)]
    dI1.setAttribute('src', dealerHand[0])
    dI2.setAttribute('src', cardBack)
    // converts the image files names in the array into integer values to add to the scores
    playerScore(playerHand[0])
    playerScore(playerHand[1])

    dealerScore(dealerHand[0])

    console.log(`player sum ${playerSum}`)
    console.log(`dealerSum ${dealerSum}`)
    console.log(dealerSum)
    playerScoreCheck()
    dealerScoreCheck()
}
// starts game when submit button is clicked
submit.addEventListener('click', (evt) => {
    if (input.value > 0) {
        evt.preventDefault()
        moneySum = moneySum - Number(input.value)
        money.textContent = (`$${moneySum}`)
        console.log(playerSum)
        console.log(money)
        startGame()

    }
    else if (input.value <= 0) {
        message.textContent = 'A bet must be placed to play!'
    }
})
// refreshes the board after game is finished
const refreshBoard = () => {
    playerSum = 0
    dealerSum = 0
    playerHand.length = 0
    dealerHand.length = 0
    pI1.removeAttribute('src', playerHand[0])
    pI2.removeAttribute('src', playerHand[1])
    pI3.removeAttribute('src', playerHand[2])
    pI4.removeAttribute('src', playerHand[3])
    pI5.removeAttribute('src', playerHand[4])

    dI1.removeAttribute('src', dealerHand[0])
    dI2.removeAttribute('src', dealerHand[1])
    dI3.removeAttribute('src', dealerHand[2])
    dI4.removeAttribute('src', dealerHand[3])
    dI5.removeAttribute('src', dealerHand[4])
}
// After everything is said and done this will tally up the points and determine the winner
const finalCheck = () => {
    if (playerSum > dealerSum) {
        alert(`You win!`)
        moneySum += input.value * 2
    }
    if (playerSum < dealerSum && dealerSum < 22) {
        alert(`You lose!`)
    }
    // if (playerSum = dealerSum) {
    //     alert(`Push! Tie game.`)
    //     money += input
    //     refreshBoard()
    // }
}
// Checks players score
const playerScoreCheck = () => {
    if (playerSum === 21) {
        alert('Blackjack!')
        moneySum += input.value * 2
    }
    if (playerSum > 21) {
        alert('Bust!')
    }
}

// Checks dealers score
const dealerScoreCheck = () => {
    if (dealerSum === 21) {
        alert('Dealer Blackjack!')
    }
    if (dealerSum > 21) {
        alert('Dealer bust! You win!')
        moneySum += input.value * 2
    }
}

// for the hit button
hit.addEventListener('click', (evt) => {
    //checks the scores of both the player and dealer to make sure no one has passed 21
    playerScoreCheck()
    dealerScoreCheck()
    // if there's no card in position 3, it will choose a random one for it
    if (playerHand.length <= 2) {
        playerHand.push(randomCard(deck))
        pI3.setAttribute('src', playerHand[2])
        playerScore(playerHand[2])

        dealerHand.push(randomCard(deck))
        dI2.setAttribute('src', dealerHand[1])
        dI3.setAttribute('src', cardBack)
        dealerScore(dealerHand[1])

        console.log(`player sum ${playerSum}`)
        console.log(`dealerSum ${dealerSum}`)
        console.log(dealerSum)
        playerScoreCheck()
        dealerScoreCheck()
    }
    else if (playerHand.length <= 3) {
        playerHand.push(randomCard(deck))
        pI4.setAttribute('src', playerHand[3])
        playerScore(playerHand[3])

        dealerHand.push(randomCard(deck))
        dI3.setAttribute('src', dealerHand[2])
        dI4.setAttribute('src', cardBack)
        dealerScore(dealerHand[2])


        console.log(`player sum ${playerSum}`)
        console.log(`dealerSum ${dealerSum}`)
        playerScoreCheck()
        dealerScoreCheck()
    }
    else if (playerHand.length <= 4) {
        playerHand.push(randomCard(deck))
        pI5.setAttribute('src', playerHand[4])
        playerScore(playerHand[4])

        dealerScore(dealerHand[3])

        console.log(`player sum ${playerSum}`)
        console.log(`dealerSum ${dealerSum}`)
        playerScoreCheck()
        dealerScoreCheck()
    }
})

stand.addEventListener('click', (evt) => {
    message.textContent = 'New game?'
    if (playerHand.length <= 2) {
        dI2.setAttribute('src', dealerHand[1])
        dealerScore(dealerHand[1])
        playerScoreCheck()
        dealerScoreCheck()
    }
    else if (playerHand.length <= 3) {
        dI3.setAttribute('src', dealerHand[2])
        dealerScore(dealerHand[2])
        playerScoreCheck()
        dealerScoreCheck()
    }
    else if (playerHand.length <= 4) {
        dI4.setAttribute('src', dealerHand[3])
        dealerScore(dealerHand[3])
        playerScoreCheck()
        dealerScoreCheck()
    }
    finalCheck()
})

newGame.addEventListener('click', (evnt) => {
    refreshBoard()
})


