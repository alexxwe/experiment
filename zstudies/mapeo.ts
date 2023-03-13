const tabla: Array<Person> = [
    { name: 'Alex', age: null },
    { name: 'Bruno', age: null },
    { name: 'David', age: null },
]

type Person = {
    name: string
    age: number | null
}

type AgesDefinition = Record<string, number>


function assignAges(tabla: Array<Person>, data: AgesDefinition): Array<Person> {
    // --------------------------------------------------------------------
      console.log(Object.keys(data))
  
    const mapeo = tabla.map(person => {
        const age = data[person.name.toLowerCase()] ?? null
        console.log(person.name)
        return{
            ...person,
            age,
        }
    })
    return mapeo
    
    
    // --------------------------------------------------------------------
}


// quizas vengan estos nombres, quizas venga 1, quizas vengan todos, quizas venga vacío ({}) no se sabe, y la funcion no debe petar
const data: AgesDefinition = {
    alex: 10,
    bruno: 20,
}

console.table(
    assignAges(tabla, data) // independientemente de los cambios que se hagan en data, mientras satisfaga 'AgesDefinition', no debe petar
)