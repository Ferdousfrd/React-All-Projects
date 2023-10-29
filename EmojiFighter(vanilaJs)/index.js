let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let leftEl = document.getElementById("left-el")
let righttEl = document.getElementById("right-el")


function randomFighters(){
    let i = Math.floor(Math.random()*fighters.length) //getting random index from fighters array
    return fighters[i] //returning fighters emoji according to their index
}

function pickFighters(){
    let leftSide = randomFighters()
    let rightSide = randomFighters()

    leftEl.textContent = leftSide
    righttEl.textContent = rightSide
}
