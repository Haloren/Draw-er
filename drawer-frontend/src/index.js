const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`

const main = document.querySelector("main")
const body = document.querySelector("body")

//GET ALL CARDS
document.addEventListener("DOMContentLoaded", () => loadCards())

const loadCards = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(card => renderCards(card))
    })
}
const renderCards = (cardList) => {
    const h1 = document.createElement("h1")
    const div =document.createElement("div")
    const ul = document.createElement("ul")
    
    h1.setAttribute("id", "show-words")
    h1.setAttribute("class", "show-words")
    h1.setAttribute("style", "display: none")
    div.setAttribute("class", "all-words")
    div.setAttribute("id", cardList.id)

    div.appendChild(ul)
    h1.appendChild(div)
    body.appendChild(h1)

    cardList.cards.forEach(content => renderWord(content))
} 
const renderWord = (content) => {
    const ul = document.querySelector(`div[id="${content.player_id}"]`)
    const li = document.createElement("li")
    const button = document.createElement("button")

    li.innerHTML = `${content.content}`
    button.setAttribute("button", "delete")
    button.setAttribute("id", content.id)
    button.innerHTML = "Delete"

    li.appendChild(button)
    ul.appendChild(li)
}
//SHOW ALL WORDS - HIDE/SHOW ON CLICK 
const showWords = () => {
    let hide = document.getElementsById("show-words");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
} 

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