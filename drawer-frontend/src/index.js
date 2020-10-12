const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`

const main = document.querySelector("main")

//GET PLAYERS
document.addEventListener("DOMContentLoaded", () => loadPlayers())

const loadPlayers = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    // .then(json => {
    //     console.log(json)
    // })
    .then(json => {
        json.forEach(player => renderPlayers(player))
    })
}
const renderPlayers = (playerList) => {
    console.log(playerList)
}

//TIMER & CONTROLS
const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")

startButton.addEventListener('click', startTimer)
function startTimer() {
    console.log("start")
}

stopButton.addEventListener('click', stopTimer)
function stopTimer() {
    console.log("stop")
}

//GET WORD CARDS
document.addEventListener("DOMContentLoaded", () => loadCards())

const loadCards = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(card => renderCards(card))
    })
}
const renderCards = (cardList) => {
    console.log(cardList)
} 

//GAME CARDS (cards-container)
const cardsContainer = document.getElementById("cards-container")

//Math for random - cardList[Math.floor(Math.random() * cardList.length)];
let randomCardOne = "Word One"
let randomCardTwo = "Word Two"
let cardOne = document.getElementById("card-one")
cardOne.innerHTML = randomCardOne 
let cardTwo = document.getElementById("card-two")
cardTwo.innerHTML = randomCardTwo


//GET NEW WORDS 

//END GAME

//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}