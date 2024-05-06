//Before

var globalData = []
var anotherGlobal = 'Important'

function fetchData(callback) {
    setTimeout(() => {
        callback(['apple', 'banana', 'cherry'])
    }, 1000)
}

function processData(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].length > 5) {
            globalData.push(data[i])
        }
    }
}

function logData() {
    console.log('Data:', globalData)
}

function capitalizeData() {
    for (var i = 0; i < globalData.length; i++) {
        globalData[i] = globalData[i].toUpperCase()
    }
}

function addSuffix(suffix) {
    for (var i = 0; i < globalData.length; i++) {
        globalData[i] = globalData[i] + suffix
    }
}

fetchData(incomingData => {
    processData(incomingData)
    capitalizeData()
    addSuffix(' FRUIT')
    logData()
})

