//exercise1:

// interface AirlineDto extends AirlineDefinition {
//     code: string
// }

// function getCompanyCode(airline: AirlineDefinition): AirlineDto {
//     // De aqui pa arriba no se toca
//     let code = ''

//     switch (airline.company_name) {
//         case 'American Airlines':
//             code = 'AA'
//             break
//         case 'Delta Air Lines':
//             code = 'DL'
//             break
//         case 'United Airlines':
//             code = 'UA'
//             break
//         case 'JetBlue Airways':
//             code = 'B6'
//             break
//         case 'Southwest Airlines':
//             code = 'WN'
//             break
//         case 'Spirit Airlines':
//             code = 'NK'
//             break
//         default:
//             code = 'AA'
//     }
//     return { code, ...airline }
//     // De aqui pa abajo no se toca
// }

// const airline = {
//     company_name: 'United Airlines',
// }

// const airlineData = getCompanyCode(airline) // { code: 'UA', company_name: 'United Airlines' }

//answer

interface AirlineDefinition {
    company_name: string
}
interface AirlineDto extends AirlineDefinition {
    code: string
}
function getCompanyCode(airline: AirlineDefinition): AirlineDto {
    // De aqui pa arriba no se toca

    const companyCode: Record<string, string> = {
        'American Airlines': 'AA',
        'Delta Air Lines': 'DL',
        'United Airlines': 'UA',
        'JetBlue Airways': 'B6',
        'Southwest Airlines': 'WN',
        'Spirit Airlines': 'NK',
        '': 'AA',
    }

    // return companyCode[airline.company_name]  //segun la key da el value, en este caso 'UA'

    // return { ...airline, code: companyCode[airline.company_name] }  //option 1

    return { code: companyCode[airline.company_name], company_name: airline.company_name } //option to get that below
    // De aqui pa abajo no se toca
}

const airline = {
    company_name: 'United Airlines',
}

const airlineData = getCompanyCode(airline) // { code: 'UA', company_name: 'United Airlines' }

console.log(airlineData)
