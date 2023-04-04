console.clear()
async function main(){
    const url = 'https://pokeapi.co/api/v2/pokemon/torterra'
    const response = await fetch(url)
    const data = await response.json()
    const name = data.name
    const id = data.id
    const height = data.height
    const image = data.sprites.other["official-artwork"].front_default
    const shiny = data.sprites.other["official-artwork"].front_shiny
    const moves = data.moves[Math.floor(Math.random()* (71 - 0 + 1) + 0)].move.name
    const stats = data.stats.map(stat => stat.stat.name)
    const type = data.types.map(types => types.type.name)

    console.log({name, id, height, image, shiny, type, moves})
    
    console.log("RandomMoves:", moves)
    // console.log("Stats:", stats)
    console.log("-------")
    data.stats.forEach(stat => {
        console.log(`${stat.stat.name}: ${stat.base_stat}`);
    });
    console.log("-------")
    data.types.map(x => x.type.name)

    // console.log(typeof data.moves)
}
main()
