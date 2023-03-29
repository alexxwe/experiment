        // fuego: ["Charizard", "Ninetales", "Arcanine"],
        // agua: ["Blastoise", "Gyarados", "Lapras"],
        // planta: ["Venusaur", "Exeggutor", "Victreebel"],
        // eléctrico: ["Pikachu", "Jolteon", "Zapdos"],
        // hielo: ["Articuno", "Cloyster", "Lapras"],
        // lucha: ["Machamp", "Hitmonlee", "Poliwrath"],
        // veneno: ["Nidoking", "Muk", "Gengar"],
        // tierra: ["Rhydon", "Nidoking", "Golem"],
        // volador: ["Charizard", "Pidgeot", "Dragonite"],
        // psíquico: ["Alakazam", "Mewtwo", "Gardevoir"],
        // bicho: ["Butterfree", "Beedrill", "Scyther"],
        // roca: ["Golem", "Onix", "Kabutops"],
        // fantasma: ["Gengar", "Haunter", "Gastly"],
        // dragón: ["Dragonite", "Charizard", "Gyarados"],
        // acero: ["Magnemite", "Magneton", "Steelix"], 

//------------------------------------------------------------//

// function pokemonByType(type: string) {
//     let pokemon : string[] = []

//     if (type === 'fuego') {
//             pokemon = ["Charizard", "Ninetales", "Arcanine"]
//         }
//         else if (type === 'agua') {
//             pokemon = ["Blastoise", "Gyarados", "Lapras"]
//         }
//         else if (type === 'planta') {
//             pokemon = ["Venusaur", "Exeggutor", "Victreebel"]
//         }
//         else if (type === 'electrico') {
//             pokemon = ["Pikachu", "Jolteon", "Zapdos"]
//         }
//         else if (type === 'hielo') {
//             pokemon = ["Articuno", "Cloyster", "Lapras"]
//         }
//         else if (type === 'lucha') {
//             pokemon = ["Machamp", "Hitmonlee", "Poliwrath"]
//         }
//         else if (type === 'veneno') {
//             pokemon = ["Nidoking", "Muk", "Gengar"]
//         }
//         else if (type === 'tierra') {
//             pokemon = ["Rhydon", "Nidoking", "Golem"]
//         }
//         else if (type === 'volador') {
//             pokemon = ["Charizard", "Pidgeot", "Dragonite"]
//         }
//         else if (type === 'bicho') {
//             pokemon = ["Butterfree", "Beedrill", "Scyther"]
//         }
//         else if (type === 'roca') {
//             pokemon = ["Golem", "Onix", "Kabutops"]
//         }
//         else if (type === 'dragon') {
//             pokemon = ["Dragonite", "Charizard", "Gyarados"]
//         }
//         else {
//             pokemon = ["Torterra", "Volcarona", "Kyurem"]
//     }
//     return pokemon
// }

// const type = 'hielo'
// const result = pokemonByType(type)
// console.log(result)


//answer
function pokemonByType(type: string) {

const pokemon: Record<string, string[]> = {
    fuego: ["Charizard", "Ninetales", "Arcanine"],
    agua: ["Blastoise", "Gyarados", "Lapras"],
    planta: ["Venusaur", "Exeggutor", "Victreebel"],
    eléctrico: ["Pikachu", "Jolteon", "Zapdos"],
    hielo: ["Articuno", "Cloyster", "Lapras"],
    lucha: ["Machamp", "Hitmonlee", "Poliwrath"],
    veneno: ["Nidoking", "Muk", "Gengar"],
    tierra: ["Rhydon", "Nidoking", "Golem"],
    volador: ["Charizard", "Pidgeot", "Dragonite"],
    psíquico: ["Alakazam", "Mewtwo", "Gardevoir"],
    bicho: ["Butterfree", "Beedrill", "Scyther"],
    roca: ["Golem", "Onix", "Kabutops"],
    fantasma: ["Gengar", "Haunter", "Gastly"],
    dragón: ["Dragonite", "Charizard", "Gyarados"],
    acero: ["Magnemite", "Magneton", "Steelix"], 

    best: ["Torterra", "Volcarona", "Kyurem"],
    bestByCristian: ["Aegislash", "Swampert", "Darkrai"],
}
    return pokemon[type] ?? `Secret for you, the best 3: ${pokemon.best}`
}
console.log(pokemonByType('hielo'))