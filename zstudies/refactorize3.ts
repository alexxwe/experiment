//exercise 3
// type Lang = 'es' | 'de'

// const translate = (lang: Lang, word: string): string => {
//     let translatedWord = word

//     if (lang === 'es') {
//         if (word === 'Apple') {
//             translatedWord = 'Manzana'
//         } else if (word === 'Keyboard') {
//             translatedWord = 'Teclado'
//         } else if (word === 'Browser') {
//             translatedWord = 'Navegador'
//         }
//     } else if (lang === 'de') {
//         if (word === 'Apple') {
//             translatedWord = 'Apfel'
//         } else if (word === 'Keyboard') {
//             translatedWord = 'Klaviatur'
//         } else if (word === 'Browser') {
//             translatedWord = 'Browser'
//         }
//     }

//     return translatedWord
// }

// console.log(translate('es', 'Apple')) // Manzana ✓
// console.log(translate('de', 'Keyboard')) // Klaviatur ✓
// console.log(translate('es', 'Other')) // not found 'Other' inside 'es', returns word


//answer
type Lang = 'es' | 'de'

const translate = (lang: Lang, word: string): string => {

    const translations: Record<Lang, Record<string, string>> = {
        es: {
            //lang
            Apple: 'Manzana', //word
            Keyboard: 'Teclado',
            Browser: 'Navegador',
        },
        de: {
            //lang
            Apple: 'Apfel', //word
            Keyboard: 'Klaviatur',
            Browser: 'Browser',
        },
    }
    // if(!translations[lang][word]){
    //     throw new Error('Not found' `${translations[lang][word]}` 'inside' `${translations[lang]}`)
    //}

    return translations[lang][word] ?? `Not found '${word}' inside '${lang}'`
}

console.log(translate('es', 'Apple')) // Manzana ✓
console.log(translate('de', 'Keyboard')) // Klaviatur ✓
console.log(translate('es', 'Other')) // not found 'Other' inside 'es', returns word
