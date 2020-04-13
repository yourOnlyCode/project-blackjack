let deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
]

function randomCard(deck) {
    let randomI = Math.floor(deck.length * Math.random())
    return deck[randomI]
}
let playerHand
let dealerHand

function start() {
    playerHand = [randomCard(deck), randomCard(deck)]
    dealerHand = [randomCard(deck), randomCard(deck)]
}
start()
console.log(playerHand)
console.log(dealerHand)

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
