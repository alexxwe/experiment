const cards = document.querySelector('.cards')
const images = document.querySelectorAll('.card_img_one, .card_img_two, .card_img_three')
const backgrounds = document.querySelectorAll('.card_bg_one, .card_bg_two, .card_bg_three')

const range = 50

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1)

document.addEventListener('mousemove', ({ x, y }) => {
    const yValue = calcValue(y, window.innerHeight)
    const xValue = calcValue(x, window.innerWidth)

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`

    images.forEach(image => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`
    })

    backgrounds.forEach(background => {
        background.style.transform = `translateX(${-xValue * 2}px) translateY(${yValue * 2}px)`
    })
})
