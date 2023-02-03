//exercise 2
// type Action = 'add' | 'subtract' | 'multiply' | 'divide'

// const calculate = (num1: number, num2: number, action: Action) => {
//   let result: number;
//   if (action === "add") {
//     result = num1 + num2;
//   } else if (action === "subtract") {
//     result = num1 - num2;
//   } else if (action === "multiply") {
//     result = num1 * num2;
//   } else if (action === "divide") {
//     result = num1 / num2;
//   }

//   return result;
// };

// console.log(calculate(8, 2, 'add')); // 10
// console.log(calculate(8, 2, 'divide')); // 4


//answer
type Action = 'add' | 'subtract' | 'multiply' | 'divide'

const calculate = (num1: number, num2: number, action: Action) => {
    const operations = {
        add: (num1: number, num2: number) => num1 + num2,
        subtract: (num1: number, num2: number) => num1 - num2,
        multiply: (num1: number, num2: number) => num1 * num2,
        divide: (num1: number, num2: number) => num1 / num2,
    }

    return operations[action](num1, num2)
}

console.log(calculate(8, 2, 'add')) // 10
console.log(calculate(8, 2, 'divide')) // 4
