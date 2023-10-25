
let cards = [] // making an array of cards
let sum = 0
let hasBlackJack = false            //chacking if its 21 or not
let isAlive = false                  //to check if we still in the game or not.
let isGameStarted = false            //checking if the game is started yet.
let message = ""                    //created an empty string to hold our rendering message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Player1",
    chips: 145
}

playerEl.textContent = player.name + ": $"+ player.chips

//getting randome cards from 1 to 11
function getRandomCards(){
    let randomNumber=  Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10  //because of king, queen and jack
    }
    else if(randomNumber===1){
        return 11 //because of ACE
    }
    else{
        return randomNumber
    }
}



//starting the game. works when we click start button
function startGame(){ 
    if(isGameStarted === false){   //fixing the bug that once i press Start Game button, i cant press it again until the round ends.
        isAlive = true
        let firstCard = getRandomCards()
        let secondCard = getRandomCards()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard

        renderGame();
        isGameStarted = true
    }    
    else{
        console.log("Game is ON. wait till the next round")
    }
}

//the game functions
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }


//down below we getting the elements with their ids and changing values after clicking
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
    cardsEl.textContent = "Cards : "

    for(let i = 0; i<cards.length; i++){
    cardsEl.textContent +=  cards[i] + " "
    }

}

//newcard function for new card button click
function newCard(){
    if(isAlive===true){                 //fixed bug that I cant press New Card again once i lost the game
        let extraCard = getRandomCards();
        sum += extraCard;           //adding 3rd card to sum
        cards.push(extraCard)
        renderGame();
    }
    else{
        return isAlive = false
    }               

}
