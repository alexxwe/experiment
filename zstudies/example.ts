console.clear()

interface PlayerDto {
    name: string
    level: number
    hp: number
}

class Player implements PlayerDto {
    //propiedades comunes a todas las instancias (todos los objetos):(p1 y p2)
    name : string
    level = 23
    hp = 100

    constructor(name: string){
        this.name = name
    }
}

const p1 = new Player("alex")
const p2 = new Player("dawi")

console.table(p1)
console.table(p2)
