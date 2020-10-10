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
    const div = document.createElement("div")
    const p = document.createElement("p")

    div.setAttribute("class", "card")
    div.setAttribute("data-id", playerList.id)

    p.innerHTML = playerList.name

}


//CARDS
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
}