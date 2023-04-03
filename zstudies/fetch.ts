console.clear()

async function main(){
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
    const response = await fetch(url)
    const data = await response.json()
    //access a specific element called 'tutor' in this direction
    const path = data.moves[0].version_group_details[2].move_learn_method.name

    console.log(path)
    //to now which type of element is(object, string...)
    // console.log(typeof data.moves)
}
main()
