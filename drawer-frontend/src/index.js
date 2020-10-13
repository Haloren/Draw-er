const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`

const player = document.querySelector("div div h2")

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
    const p = document.createElement("p")
    
    p.innerHTML = `${playerList.name} - ${playerList.points}`

    player.appendChild(p)
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

//GAME CARDS (cards-container)
const cardsContainer = document.getElementById("cards-grid")

//GET WORD CARDS
document.addEventListener("DOMContentLoaded", () => loadCards())

const loadCards = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(card => renderCards(card))
    })
}
let renderCards = (cardList) => {
    const div = document.createElement("div")

    div.setAttribute("class", "game-card")
    
    div.innerHTML = cardList.cards[Math.floor(Math.random() * cardList.cards.length)].content

    cardsContainer.appendChild(div)
} 

//GET NEW WORDS (re-run renderCards on button click)

//END GAME (destroy all players except first Player "Drawer")

//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}