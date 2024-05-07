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

///////////////////////////////////////////
//After

type Data = string[]

function fetchData(): Promise<Data> {
    return new Promise(resolve => {
        setTimeout(() => {
            const incomingData: Data = ['apple', 'banana', 'cherry']

            resolve(incomingData)
        }, 1000)
    })
}

function processData(data: Data): Data {
    return data.filter(product => product.length > 5)
}

function logData(data: Data): any {
    console.log('Data:', data)
}

function capitalizeData(data: Data): Data {
    return data.map(product => product.toUpperCase())
}

function addSuffix(data: Data, suffix: string): Data {
    return data.map(product => product + suffix)
}

async function fetchAllData(): Promise<any> {
    const incomingData = await fetchData()
    const processedData = processData(incomingData)
    const capitalizedData = capitalizeData(processedData)
    const suffixedData = addSuffix(capitalizedData, 'FRUIT')

    logData(suffixedData)
}

fetchAllData()
