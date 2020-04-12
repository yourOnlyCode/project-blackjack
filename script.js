// blackjack time

// Establish variables:

let score
let dealer
let dealerHand
let player
let playerHand
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['As', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'
]

// Dealer card display area


// Player card display area


// Establish elements on page

const gameArea = document.createElement('canvas')

const hit = document.createElement('button')
hit.innerText = "Hit"
document.body.appendChild(hit)

const stand = document.createElement('button')
stand.innerText = "Stand"
document.body.appendChild(stand)

const bet = document.createElement('input')
bet.classList = "board"
bet.setAttribute('type', 'form')
bet.setAttribute('placeholder', 'bet amount')
document.body.appendChild(bet)

const betSubmit = document.createElement('input')
betSubmit.classList = "board"
betSubmit.setAttribute('type', 'submit')
document.body.appendChild(betSubmit)