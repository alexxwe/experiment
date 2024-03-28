// Función para crear una baraja de cartas
function createDeck() {
    const suits = ['♥', '♦', '♣', '♠']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const deck = []

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value })
        }
    }

    return deck
}

function showDefaultCards() {
    const deck = createDeck()

    const rows = document.querySelectorAll('.row')

    let index = 0
    rows.forEach(row => {
        for (let i = 0; i < 13; i++) {
            const cardElement = document.createElement('div')
            cardElement.classList.add('card')
            cardElement.dataset.suit = deck[index].suit
            cardElement.innerText = `${deck[index].value}${deck[index].suit}`
            row.appendChild(cardElement)
            index++
        }
    })
}

function shuffleCards() {
    const rows = document.querySelectorAll('.row')
    const cards = []

    rows.forEach(row => {
        const rowChildren = Array.from(row.children)
        cards.push(...rowChildren)
        row.innerHTML = ''
    })

    cards.sort(() => Math.random() - 0.5)

    let index = 0
    rows.forEach(row => {
        for (let i = 0; i < 13; i++) {
            row.appendChild(cards[index])
            index++
        }
    })
}

function resetCards() {
    const rows = document.querySelectorAll('.row')

    rows.forEach(row => {
        row.innerHTML = ''
    })

    showDefaultCards()
}

document.addEventListener('DOMContentLoaded', function () {
    showDefaultCards()

    const shuffleButton = document.getElementById('shuffleButton')

    const sortButton = document.getElementById('sortButton')

    shuffleButton.addEventListener('click', function () {
        shuffleCards()
    })

    sortButton.addEventListener('click', function () {
        resetCards()
        // location.reload()
    })
})
