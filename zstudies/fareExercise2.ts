//exercise 2 weel made and completed
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
const providers_priority: Record<string, number> = {
    Amadeus: 1,
    Duffel: 2,
    Pyton: 3,
    Mystifly: 4,
    Kiwi: 5,
} // ------------------------------------

for (const fare of fares) {
    // Mark all fares as inconvenient by default
    fare.inconvenient = true

    // CASE 0: Is a new key
    if (!indexed_fares[fare.fare_basis_code]) {
        fare.inconvenient = false // is the unique one
        indexed_fares[fare.fare_basis_code] = [fare]
        continue
    }

    // CASE 1: Is NOT a new key
    const convenient = indexed_fares[fare.fare_basis_code].find(f => !f.inconvenient)

    // CASE 1.1: New fare is CHEAPER than the current convenient
    if (fare.price < convenient.price) {
        convenient.inconvenient = true
        fare.inconvenient = false
    }

    // CASE 1.2: New fare is EQUAL PRICE than the current convenient
    // We compare the fares based on the provider priority
    if (fare.price === convenient.price) {
        if (providers_priority[fare.provider] < providers_priority[convenient.provider]) {
            convenient.inconvenient = true
            fare.inconvenient = false
        }
    }

    indexed_fares[fare.fare_basis_code].push(fare)
}
// ------------------------------------
console.log(indexed_fares)
