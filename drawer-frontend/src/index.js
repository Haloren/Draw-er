const BASE_URL = "http://localhost:3000"
const CARDS_URL = `${BASE_URL}/cards`
const PLAYERS_URL = `${BASE_URL}/players`

const main = document.querySelector("main")

//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}

//GAME CONTROLS
const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")

startButton.addEventListener('click', startGame)
function startGame() {
    console.log("start")
}

function stopGame() {

}

//GAME CARDS (card-container)
const cardsContainer = document.getElementById("cards-container")

//GET NEW WORDS FOR GAME CARDS
let randomWord

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
    console.log(cardList)
    const ul = document.createElement("ul")
    ul.setAttribute("class", "card-list hide")

    const li = document.createElement("li")
    li.setAttribute("data-id", cardList.id)
    li.innerHTML = cardList.content

    ul.appendChild(li)
    main.appendChild(ul)
}
//SHOW ALL WORDS (ON CLICK) 
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
    console.log(playerList)
}

//RESET GAME & PLAYERS
function reset() {
    stopButton.classList.add('hide')
}