const BASE_URL = "http://localhost:3000"
const CARDS_URL = `${BASE_URL}/cards`
const PLAYERS_URL = `${BASE_URL}/players`

const main = document.querySelector("main")
const body = document.querySelector("body")

//GET ALL CARDS
document.addEventListener("DOMContentLoaded", () => loadCards())

const loadCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(card => renderCards(card))
    })
}
const renderCards = (cardList) => {
    const div = document.createElement("div")
    const ul = document.createElement("ul")
    const button = document.createElement("button")
    
    div.setAttribute("class", "all-words hide")
    div.setAttribute("id", cardList.id)

    button.setAttribute("delete-word", cardList.id)
    button.innerHTML = "Delete"
    //add eventListener for button click

    div.appendChild(ul)
    div.appendChild(button)
    body.appendChild(div)
} 
//SHOW ALL WORDS - HIDE/SHOW ON CLICK 
const allWords = document.getElementById("all-words")

//PLAYERS
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
    const h3 = document.createElement("h3")

}

//GAME CONTROLS
const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")

startButton.addEventListener('click', startGame)
function startGame() {
    console.log("start")
}

stopButton.addEventListener('click', stopGame)
function stopGame() {
    console.log("stop")
}

//GAME CARDS CONTAINER & TIMER (card-container)
const cardsContainer = document.getElementById("cards-container")

//GET NEW WORDS FOR GAME CARDS
//Math for random - cardList[Math.floor(Math.random() * cardList.length)];
let randomCardOne = "Word One"
let randomCardTwo = "Word Two"
let cardOne = document.getElementById("card-one")
cardOne.innerHTML = randomCardOne 
let cardTwo = document.getElementById("card-two")
cardTwo.innerHTML = randomCardTwo

//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}