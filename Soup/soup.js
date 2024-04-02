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

   
}

function randomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}


