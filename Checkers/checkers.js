function insertImage(){

    document.querySelectorAll('.box').forEach(image =>{
            (image.innerText =='Wdama' || image.innerText == 'Bdama') 
                image.innerHTML = `${image.innerText} <img class='allimg alldama' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
    })
}
insertImage()


function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(230, 200, 140)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100, 70, 40)'
        }

    })
}
coloring()




//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)'
                    }

                    // if (pinkColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}



tog = 1

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1
                    
                }
            })
        }



        getId = item.id             //get id
        arr = Array.from(getId)     //convert getid to array
        arr.shift()                 //delete first array element with shiift()
        aside = eval(arr.pop())     //evaluates the last array element with eval() funcion and assigns it to variable "aside"
        arr.push('0')               //add element at the end of the array with push()
        aup = eval(arr.join(''))    //evaluates array content as a number with eval() and assigns it to variable "aup"
        a = aside + aup             //assign to variable "a" the sum of "aside" and "aup"



        // Function to display the available paths

        function whosTurn(toggle) {

            
            // DAMA

            if (item.innerText == `${toggle}dama`) {


                for (let i = 1; i < 2; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 2; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 2; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }


                for (let i = 1; i < 2; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }

        }


        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        reddish()



        // winning()

        numOfDama = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wdama' || win.innerText == 'Bdama') {
                numOfDama += 1
            }

        })

        if (numOfDama == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 == 0) {
                    alert('White Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Black Wins !!')
                    location.reload()
                }
            }, 100)
        }



    })

})





// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})






// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})