//Funciones puras

let n = 0
//es pura
const f1 = (x) =>{
    let n = 0
    n++
    return 2*x
}

//no es pura
const f2 = (x) => {
    n++
    return 2*x
}



const TIMES_WILL_BE_EXECUTED = 50;
const INPUT = 4
const EXPECTED_OUTPUT = 8


let errors = 0

// execute TIMES_WILL_BE_EXECUTED times
for (let i = 0; i < 50; i++) {
    if (f1(INPUT) !== EXPECTED_OUTPUT) errors++
    if (f2(INPUT) !== EXPECTED_OUTPUT) errors++
}
console.log(errors)
