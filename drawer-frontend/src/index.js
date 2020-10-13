const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const CARDS_URL = `${BASE_URL}/cards`

const player = document.querySelector("div div h1")

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
    const input = document.createElement("input")
    
    p.setAttribute("class", "player")
    input.setAttribute("class", "points")
    input.setAttribute("type", "number")
    input.setAttribute("value", "0")

    p.innerHTML = `${playerList.name}`
    input.innerHTML = "0"

    player.appendChild(p)
    p.appendChild(input)
}

//TIMER & CONTROLS
const start = document.getElementById("start-btn")
const reset = document.getElementById("reset-btn")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

function timer(){
    if(min.value == 0 && sec.value == 0){
        min.value = 0;
        sec.value = 0;
    } else if(sec.value != 0){
        sec.value--;
    } else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    }
    return
}
function resetTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    console.log("start")
    function startCountDown(){
        startTimer = setInterval(function() {
            timer();
        }, 1000)
    }
    startCountDown()
})
reset.addEventListener('click', function(){
    console.log("reset")
    min.value = 00;
    sec.value = 00;
    resetTimer()
})


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