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

    // Select letters from the clicked cell to the end of the row
    for (var i = columnIndex; i < row.children.length; i++) {
        word += row.children[i].textContent
        row.children[i].classList.add('green-background')
    }

    // Select letters from the clicked cell to the end of the column
    for (var i = rowIndex; i < row.parentNode.children.length; i++) {
        word += row.parentNode.children[i].children[columnIndex].textContent
        row.parentNode.children[i].children[columnIndex].classList.add('red-background')
    }

    console.log('Selected word:', word)
}
