var soupStarted = false
var wordList = []

function startGame() {
    if (!soupStarted) {
        soupStarted = true
        wordList = document.getElementById('wordInput').value.toUpperCase().split(',')
        generateSoupBoard()
    }
}

function generateSoupBoard() {
    var soup = document.getElementById('soup')
    soup.innerHTML = ''

    var wordMaxLength = Math.max(...wordList.map(word => word.length))
    var gridSize = 2 * wordMaxLength

    var innerNumber = 0

    for (var i = 0; i < gridSize; i++) {
        var row = document.createElement('div')
        row.className = 'row'

        for (var j = 0; j < gridSize; j++) {
            var cell = document.createElement('div')
            cell.className = 'cell'

            cell.setAttribute('data-innerNumber', innerNumber++)

            row.appendChild(cell)
        }

        soup.appendChild(row)
    }

    wordList.forEach(word => {
        var row = Math.floor(Math.random() * gridSize)
        var col = Math.floor(Math.random() * gridSize)

        for (var i = 0; i < word.length; i++) {
            var cell = soup.children[row].children[col]
            cell.textContent = word[i]

            // Prevent word from overlapping with other words
            col = (col + 1) % gridSize
        }
    })

    var cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        if (!cell.textContent) {
            cell.textContent = randomLetter()
        }
    })

    cells.forEach(cell => {
        cell.addEventListener('click', selectLine)
    })
}

function randomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

function selectLine(event) {
    var cell = event.target
    var row = cell.parentNode
    var rowIndex = Array.from(row.parentNode.children).indexOf(row)
    var columnIndex = Array.from(row.children).indexOf(cell)

    var word = ''

    for (var i = columnIndex; i < row.children.length; i++) {
        word += row.children[i].textContent
        if (wordList.includes(word)) {
            for (var j = columnIndex; j <= i; j++) {
                row.children[j].classList.add('green-background')
            }
            return
        }
    }

    for (var i = columnIndex; i >= 0; i--) {
        word = row.children[i].textContent + word
        if (wordList.includes(word)) {
            for (var j = i; j < columnIndex + word.length; j++) {
                row.children[j].classList.add('green-background')
            }
            return
        }
    }

    // If no word found, color the clicked cell in red
    cell.classList.add('red-background')

    console.log('Selected word:', word)
}
