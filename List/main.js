const users = [
    {
        name: "Alex",
        age: 44,
    },
    {
        name: "David",
        age: 82,
    },
    {
        name: "Bruno",
        age: 37,
    },
    {
        name: "Manolo",
        age: 21,
    },
    {
        name: "Carmen",
        age: 69,
    },
]
function main() {
    const div = document.getElementById('list')
    
    for (const user of users) {
        const li = document.createElement('li')
        li.innerText = `${user.name} - ${user.age}`
        div.appendChild(li).style.color = 'blue'
    }
}
var busca =users.find(function(user){
    return user.age === 69
})
console.log()

var edades = users.find(function(user){
    return user.age > 44;
})
console.log(edades)