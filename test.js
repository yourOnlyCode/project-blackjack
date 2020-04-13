
let playerSum = 0
let id = ["cards/2S.jpg"]
id = []
id = ["cards/2S.jpg"]

const playerScoreAgain = function (id) {
    if (id.match(/[2]/gi)) {
        return playerSum += 2
    }
}

console.log(playerScoreAgain(id[0]))
console.log(playerSum)