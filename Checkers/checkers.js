function insertImage(){

    document.querySelectorAll('.box').forEach(image =>{
            (image.innerText =='Wdama' || image.innerText == 'Bdama') 
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
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





