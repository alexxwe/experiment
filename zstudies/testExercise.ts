const expect = (expectedValue: any, receivedValue: any) => {
    if (JSON.stringify(expectedValue) !== JSON.stringify(receivedValue)) {
        console.error('Expected:', expectedValue)
        console.error('Received:', receivedValue)
        throw new Error('Test failed')
    }
}

// Función
// Tests
// Test 1,2...: Descripcion de que estoy testeando en cada caso posible

// Function: calculateAverage(numbers: number[]): number

// This function takes an array of numbers and calculates their average.

function calculateAverage(numbers: number[]): number {
    if(numbers.length === 0) {
        return 0
    }
    const sum = numbers.reduce((total, number) => total + number, 0)
    return sum / numbers.length
}

// Test x: []
const input = []
const expected = 0
if(expected === calculateAverage(input)){
    console.log('Nice')
}
// Test x: [1]
expect(calculateAverage([1]), 1)
// Test x: [2,4]
expect(calculateAverage([2,4]), 3)
// Test x: [-1]
expect(calculateAverage([-1]), 1)
// Test x: [-2,-4]
expect(calculateAverage([-2,-4]), -3)
// Test x: [-2,4]
expect(calculateAverage([-2, 4]), 1)

//////////////////////////////////////////////////

// Function 2
// Input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// Expected output: The output should be { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }

function countOccurrences(arr: (number | string)[]): { [key: string]: number }{
    const ocurrences: { [key: string]: number } = {}
    arr.forEach(value => {
        const key = String(value)
        ocurrences[key] = ocurrences[key] + 1
    })
    return ocurrences
}

// Test x: []
expect(countOccurrences([]), {})
// Test x: [1,1]
expect(countOccurrences([1,1]), {'1': 2})
// Test x: [-1]
expect(countOccurrences([-1]), {'-1': 1})
// Test x: ['a', 2, 'alex', 'a']
expect(countOccurrences(['a', 2, 'alex', 'a']), {'a': 2, '2': 1, 'alex': 1})

