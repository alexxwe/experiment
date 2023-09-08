//palindromo
//que se lee igual al derecho y al reves
//ana y otto es palíndromo, es decir, = true
//alex no es palindromo es decir, = false


    //Con funciones en JavaScript

// function esPalindromo(palabra) {
//     let inversa = palabra.split("").reverse().join("")  
//     return inversa === palabra
// }

    //Sin funciones de JS, solo con estructuras de control 

function esPalindromo(palabra) {
    //Dividir la cadena de texto en un array de letras
    let letras = []

    //recorro el array entero
    for (let i = 0 ; i < palabra.length; i++){
        letras.push(palabra[i])
        //resultado:['o','t','t','o']
    }

    //invierto el array obtenido con otro bucle
    let reverseLetra = []
    for (let i = letras.length -1 ; i >= 0 ; i--){
        reverseLetra.push(letras[i])
    }
    //lo vuelvo a unir 
    let reversePalabra = ""
    for (let i = 0; i < reverseLetra.length; i++){
        reversePalabra += reverseLetra[i]
    }
    //return palabra === resultado
    return (reversePalabra === palabra)

}





console.log(("otto"),esPalindromo("otto"))
console.log(("galiciaaicilag"),esPalindromo("galiciaaicilag"))
console.log(("Ana"),esPalindromo("Ana"))
console.log(("alex"),esPalindromo("alex"))