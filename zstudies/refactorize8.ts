type main = 'planta' | 'fuego' | 'agua' | 'dragon' | 'best'

const types = (main: main, secondary: string): string | string[] => {
    const pokemon: Record<main, Record<string, string[] | string>> = {
        planta: {
            //main
            veneno: ['Vileplume', 'Venusaur', 'Roselia'], //secondary
            siniestro: ['Shiftry', 'Cacturne', 'Meowscarada'],
            '': ['Meganium', 'Serperior', 'Sceptile'],
        },
        fuego: {
            //main
            volador: ['Charizard', 'Talonflame', 'Moltres'], //secondary
            lucha: ['Infernape', 'Emboar', 'Blaziken'],
            '': ['Arcanine', 'Typhlosion', 'Charmander'],
        },
        agua: {
            //main
            tierra: ['Quagsire', 'Swampert', 'Whiscash'], //secondary
            roca: ['Omanyte', 'Kabutops', 'Barbaracle'],
            '': ['Feraligatr', 'Milotic', 'Vaporeon'],
        },
        dragon: {
            hielo: 'kyurem',
        },
        best: {
            '': ['Torterra', 'Volcarona', 'Kyurem'],
        },
    }

    return pokemon[main][secondary]?? `Not found '${[secondary]}' inside '${main}'`
}

console.log(types('planta', ''))
console.log(types('fuego', 'volador'))
console.log(types('agua', 'tierra'))
