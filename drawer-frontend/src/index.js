const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const CARDS_URL = `${BASE_URL}/cards`

// const player = document.querySelector("div div h1")
const player = document.getElementById("board-title")

//GET PLAYERS
document.addEventListener("DOMContentLoaded", () => loadPlayers())

const loadPlayers = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    // .then(json => {
    //     console.log(json)
    // })
    .then(json => {
        json.forEach(player => renderPlayer(player))
    })
}
const renderPlayer = (playerList) => {
    const p = document.createElement("p")
    const input = document.createElement("input")
    const button = document.createElement("button")
    
    p.setAttribute("class", "player")
    p.innerHTML = playerList.name
    input.innerHTML = "0"

    input.setAttribute("class", "points")
    input.setAttribute("type", "number")
    input.setAttribute("value", "0")

    button.setAttribute("class", "delete-player")
    button.innerHTML = "Delete"
    button.addEventListener('click', deletePlayer)

    player.appendChild(p)
    p.appendChild(button)
    p.appendChild(input)
}

//CREATE PLAYER
const createPlayer = (e) => {
    e.preventDefault()
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({player_id: e.target.dataset})
    }

    fetch(PLAYERS_URL, configObj)
    .then(resp = resp.json())
    .then(json =>
          json.message ? alert(json.message) : renderPlayer(json)
    )
}

//DELETE PLAYER
const deletePlayer = () => {

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
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(json => {
        renderCards(json)
    })
}
let renderCards = (cardList) => {
    const div = document.createElement("div")
    const div2 = document.createElement("div")

    div.setAttribute("class", "game-card")
    div.setAttribute("id", "game-card1")
    div2.setAttribute("class", "game-card")
    div2.setAttribute("id", "game-card2")
    
    div.innerHTML = `${cardList[Math.floor(Math.random() * cardList.length)].content}` // json[0].player.name 
    div2.innerHTML = cardList[Math.floor(Math.random() * cardList.length)].content

    cardsContainer.appendChild(div)
    cardsContainer.appendChild(div2)
} 

// Hide and Show Word Cards
const showWords  = () => {
    let hide = document.getElementById("cards-grid");
    if(hide.style.display === "none") {
        hide.style.display = "";
    } else {
        hide.style.display = "none"
    }
}

//GET NEW WORDS (clear & re-run loadCards on button click)
const newWords = document.getElementById("new-words")

newWords.addEventListener('click', function(){
    console.log("new words")
    document.getElementById("game-card1").replaceWith()
    document.getElementById("game-card2").replaceWith()
    loadCards()
})

//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}