//Crear una funcion a la cual le pase un array de numeros y un numero que será el resultado de la suma de dos de los valores
//Ejemplo:
//sumarDos([1,5,8,2], 10) //  [3,7]
//sumarDos([4,5,9,1], 10) //  [9,1]
//sumarDos([1,2,3,4], 5)  //  [2,3]


function sumarDos(numeros, resultado){
    //recorremos el array de numeros
    for(let i = 0; i < numeros.length; i++){

        let primerNum = numeros[i]
        let segundoNum = resultado - primerNum

        // console.log(numeros.includes(segundoNum));

        if(numeros.includes(segundoNum) && segundoNum != primerNum){
            return [primerNum, segundoNum]
        }
    }

}

console.clear()
console.log(sumarDos([1,5,8,2], 10))
console.log(sumarDos([3,7,8,2], 10))
console.log(sumarDos([1,2,3,4], 5))
console.log(sumarDos([6,5,4,7,8,9,11,12,14,13], 20))