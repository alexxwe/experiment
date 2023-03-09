console.clear()

let [x, y, z] = [1, 2, 3]
const loops = 4
// for loop
for (let i = 1; i <= loops; i++) {
    console.table({ loop: i, x, y, z })
    /* which values will be printed in each iteration of the loop?
        i, x, y, z
        ., ., ., .
        1, 1, 2, 3
        2, 4, 4, 5
        3, 9, 11, 10
        4, 21, 30, 20

    */
    x += y //x=20'y=' 'z='
    y += z + x++ - ++z //y=11 += z=10 + x++=20 - ++z=11 //x=21 y=30 z=11
    z += i**2 //z=20
}


// which are the values of x, y, z after the loop?
//console.log(x, y, z)

// x: 
// y: 
// z: 
