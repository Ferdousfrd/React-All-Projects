
let cards = [] // making an array of cards
let sum = 0
let hasBlackJack = false            //chacking if its 21 or not
let isAlive = false                  //to check if we still in the game or not.
let message = ""                    //created an empty string to hold our rendering message

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
    isAlive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame();
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
    document.getElementById("message-el").textContent = message
    document.getElementById("sum").textContent = "Sum : " + sum
    document.getElementById("cards").textContent = "Cards : "

    for(let i = 0; i<cards.length; i++){
    document.getElementById("cards").textContent +=  cards[i] + " "
    }

}

//newcard function for new card button click
function newCard(){
   
    let extraCard = getRandomCards();
    sum += extraCard;           //adding 3rd card to sum
    cards.push(extraCard)
    renderGame();               //then with the new card, we are calling the main game functon again

}
