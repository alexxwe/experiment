interface FareDTO {
    fare_basis_code: string
    provider: string
    price: number
    inconvenient?: boolean
}

const fares: FareDTO[] = [
    {
        fare_basis_code: 'QNC0',
        provider: 'Amadeus',
        price: 100,
    },
    {
        fare_basis_code: 'QNC0',
        provider: 'Duffel',
        price: 20,
    },
    {
        fare_basis_code: 'QNC0',
        provider: 'Amadeus',
        price: 90,
    },
    {
        fare_basis_code: 'QNC0',
        provider: 'Pyton',
        price: 20,
    },
    {
        fare_basis_code: 'QNC0',
        provider: 'Kiwi',
        price: 50,
    },
]

const indexed_fares: Record<string, FareDTO[]> = {}
const priority = ['Amadeus', 'Duffel', 'Pyton', 'Mystifly', 'Kiwi']

// ------------------------------------
for (const fare of fares) {
    //por defecto todos en true
    fare.inconvenient = true

    //rama 0
    //En caso de que no exista una entrada previa
    //Verifica si no tiene la propiedad fare.fare_basis_code
    if (!indexed_fares[fare.fare_basis_code]) {
        fare.inconvenient = false
        indexed_fares[fare.fare_basis_code] = [fare]
        continue
    }
    //rama 1
    else {
        //Obtenemos las fares basadas en la clave fare_basis_code
        const existingFares = indexed_fares[fare.fare_basis_code]

        //agrego la fare aqui arriba y NO AL FINAL para que no se añada despues de haber iterado sobre las fares.
        //Ya que cuando iteraba sobre existingFares, la nueva fare tambien se consideraba.
        existingFares.push(fare)

        //Encontrar la fare con el precio mas bajo
        let lowestPrice = fare.price

        //Conteo del número de precios mas bajos
        let lowestPriceCount = 0

        for (const existingFare of existingFares) {
            if (existingFare.price < lowestPrice) {
                lowestPrice = existingFare.price
                lowestPriceCount = 1
            } else if (existingFare.price === lowestPrice) {
                lowestPriceCount++
            }
        }
        //

        for (const existingFare of existingFares) {
            //1.1 si el precio es el mas bajo "inconvenient = false"
            if (existingFare.price === lowestPrice && lowestPriceCount === 1) {
                existingFare.inconvenient = false
            }

            // 1.3 si el precio es el más bajo pero se repite, se basa en el array priority
            else if (existingFare.price === lowestPrice && lowestPriceCount > 1) {
                // Obtiene el índice del provider en el array priority
                const providerIndex = priority.indexOf(existingFare.provider)

                // Filtra las fares que tienen el precio más bajo y mapea sus proveedores a los índices correspondientes de priority
                const lowestProviderIndex = existingFares
                    //filtramos para obtener las de precio mas bajo
                    .filter(fare => fare.price === lowestPrice)
                    //mapeo de los indices de los providers en priority
                    .map(fare => priority.indexOf(fare.provider))
                    //sacamos el indice mas bajo encontrado
                    .reduce((minIndex, currentIndex) => {
                        // Utiliza reduce para encontrar el índice más bajo entre los providers con el precio más bajo
                        return currentIndex < minIndex ? currentIndex : minIndex
                    })

                // Comparo el providerIndex del provider actual con el lowestProviderIndex obtenido
                if (providerIndex === lowestProviderIndex) {
                    // Si son iguales, establece inconvenient = false para ese provider
                    existingFare.inconvenient = false
                } else {
                    existingFare.inconvenient = true
                }
            }
            // 1.2 si el precio NO es el más bajo, "inconvenient = true"
            else {
                existingFare.inconvenient = true
            }
        }
    }
}

// ------------------------------------

console.log(indexed_fares)
