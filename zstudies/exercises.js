console.clear()
console.log("-------------------------")
console.log("Exercise 1")
console.log("-------------------------")
// reverses characters in (possibly nested) parentheses in the input string.
let a1 = "(alex)"
let a2 = "alex (paz)"
let a3 = "()"
let a4 = "(alex) paz (alex)"
let a5 = "alex"

function solution1(inputString) {
    const nested = []
    let result = ''
    
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            //le hacemos el push y lo resetemaos
            nested.push(result)
            result = ''
        } else if(inputString[i] === ')') {
            //aqui le hacemos el pop y le damos la vuelta
            finalResult = nested.pop()
            result = finalResult + result.split('').reverse().join('')
        } else {
            result += inputString[i]
        }
    }
    
    return result
}


console.log(solution1(a1))
console.log(solution1(a2))
console.log(solution1(a3))
console.log(solution1(a4))
console.log(solution1(a5))

console.log("-------------------------")
console.log("Exercise 2")
console.log("-------------------------")
//rearrange in ascening order the numbers without moving the -1
let b1 = [-1, 150, 190, 170, -1, -1, 160, 180]
let b2 = [-1, -1, -1, -1, -1]
let b3 = [-1]
let b4 = [4, 2, 9, 11, 2, 16]
let b5 = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
let b6 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]

function solution2(a) {
    //filtramos la altura y la ordenamos directamente
    const heights = a.filter((height) => height !== -1).sort((a,b) => a - b)

    let index = 0
    
    //remplazamos el valor original por el valor ordenado que corresponde
    for(let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = heights[index]
            index++
        }
    }
return a
}
console.log(solution2(b1))
console.log(solution2(b2))
console.log(solution2(b3))
console.log(solution2(b4))
console.log(solution2(b5))
console.log(solution2(b6))

console.log("-------------------------")
console.log("Exercise 3")
console.log("-------------------------")
//number is true if the sum of the first half of the digits is equal to the sum of the second half.
let c1 = 1230
let c2 = 239017
let c3 = 134008
let c4 = 10
let c5 = 999999
let c6 = 1233201

function solution3(n) {
    const toString = n.toString()
    
    const half = toString.length / 2
    
    const firstHalf = toString.slice(0, half)
    const secondHalf = toString.slice(half)
    
    const sumFirstHalf = firstHalf.split('').reduce((acc, num) => acc + parseInt(num), 0)
    const sumSecondHalf = secondHalf.split('').reduce((acc, num) => acc + parseInt(num), 0)
    
    return sumFirstHalf === sumSecondHalf
}

console.log(solution3(c1))
console.log(solution3(c2))
console.log(solution3(c3))
console.log(solution3(c4))
console.log(solution3(c5))
console.log(solution3(c6))

console.log("-------------------------")
console.log("Exercise 4")
console.log("-------------------------")
//Find the number of common characters between two strings
let d1 = "aabcc"
let d2 = "adcaa"
let d3 = "a"
let d4 = "aaa"
let d5 = "abcdeg"
let d6 = "xyzavg"

function solution4(s1, s2) {
    const charCount1 = {}
    const charCount2 = {}
    
    for (let char of s1) {
        charCount1[char] = (charCount1[char] || 0) + 1
    }

    let commonCount = 0
    for (let char of s2) {
        if (charCount1[char] && charCount1[char] > 0) {
            commonCount++
            charCount1[char]--
        }
    }

    return commonCount
}

console.log(solution4(d1, d2))
console.log(solution4(d3, d4))
console.log(solution4(d5, d6))
