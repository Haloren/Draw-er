const BASE_URL = "http://localhost:3000"
const CARDS_URL = `${BASE_URL}/cards`
const PLAYERS_URL = `${BASE_URL}/players`

const main = document.querySelector("main")

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


//SHOW ALL CARDS
document.getElementById("allWords").addEventListener("click", () => loadCards())

const loadCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(card => renderCards(card))
    })
}
const renderCards = (cardList) => {
    console.log(cardList)
    const div = document.createElement("div")
    div.setAttribute("class", "card")
    div.setAttribute("data-id", cardList.id)

    const p = document.createElement("p")
    p.innerHTML = cardList.content

    div.appendChild(p)
    main.appendChild(div)
}


//HELP & GAME RULES
const showRules = () => {
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}