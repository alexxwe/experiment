console.clear()
console.log("-------------------------")
console.log("Exercise 1")
console.log("-------------------------")

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