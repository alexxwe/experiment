//Algoritmo de Fisher Yates(típico para barajar cartas)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}
function sortRow(row) {
    const cards = Array.from(row.children)
    cards.sort((a, b) => {
        const order = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        const valueA = a.textContent.slice(0, -1)
        const valueB = b.textContent.slice(0, -1)
        return order.indexOf(valueA) - order.indexOf(valueB)
    })
    row.innerHTML = ''
    cards.forEach(card => row.appendChild(card))
}

function sortCards() {
    const redRow = document.getElementById('redRow')
    const blueRow = document.getElementById('blueRow')
    const blackRow = document.getElementById('blackRow')
    const greenRow = document.getElementById('greenRow')

    sortRow(redRow)
    sortRow(blueRow)
    sortRow(blackRow)
    sortRow(greenRow)
}

function createCards() {
    const redRow = document.getElementById('redRow')
    const blueRow = document.getElementById('blueRow')
    const blackRow = document.getElementById('blackRow')
    const greenRow = document.getElementById('greenRow')

    redRow.innerHTML = ''
    blueRow.innerHTML = ''
    blackRow.innerHTML = ''
    greenRow.innerHTML = ''

    const suits = ['♥', '♦', '♣', '♠']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    const deck = []

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value })
        }
    }

    shuffle(deck)

    deck.forEach(card => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.textContent = `${card.value}${card.suit}`

        if (card.suit === '♥') {
            redRow.appendChild(cardDiv)
        } else if (card.suit === '♦') {
            blueRow.appendChild(cardDiv)
        } else if (card.suit === '♣') {
            blackRow.appendChild(cardDiv)
        } else {
            greenRow.appendChild(cardDiv)
        }
    })
}

document.getElementById('shuffleButton').addEventListener('click', createCards)

document.getElementById('sortButton').addEventListener('click', sortCards)

createCards()
