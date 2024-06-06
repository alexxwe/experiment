const canvas = document.getElementById('waterCanvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const waves = []
// const waveCount = 25
const waveCounts = [15, 20, 25, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
let waveCount = waveCounts[0]
let intervalId = null

function initializeWaves() {
    waves.length = 0
    for (let i = 0; i < waveCount; i++) {
        waves.push({
            x: canvas.height / 2 - 100 + Math.random() * 200,   // Intial horizontal position of the wave
            length: 0.01 + Math.random() * 0.001,               // Wavelenght, affects spatial frequency
            amplitude: 50 + Math.random() * 100,                // Max height of the wave
            frequency: 0.01 + Math.random() * 0.03,             // Temporal frequency, affects the speed of the animation
            phase: Math.random() * Math.PI * 2,                 // Initial phase of the wave, move the wave horizontally
        })
    }
}

initializeWaves()

function createButoons() {
    const header = document.querySelector('header nav')
    waveCounts.forEach(count => {
        const button = document.createElement('button')
        button.textContent = count
        button.addEventListener('click', () => {
            clearInterval(intervalId)
            waveCount = count
            initializeWaves()
        })
        header.appendChild(button)
    })

    const swapButton = document.createElement('button')
    swapButton.textContent = 'Swap'
    swapButton.addEventListener('click', () => {
        clearInterval(intervalId)
        intervalId = setInterval (() => {
            waveCount = waveCounts[Math.floor(Math.random() * waveCounts.length)]
            initializeWaves()
        }, 1000)
    })
    header.appendChild(swapButton)
}

createButoons()

function animate() {
    requestAnimationFrame(animate)
    context.fillStyle = 'rgba(0, 0, 0, 0.03)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    waves.forEach((wave, index) => {
        context.beginPath()
        context.moveTo(0, wave.x)
        for (let i = 0; i < canvas.width; i++) {
            const yOffset = Math.sin(i * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase)
            context.lineTo(i, wave.x + yOffset)
        }
        context.strokeStyle = `hsl(${index / 2 + 170}, 100%, 50%)`
        context.stroke()
        wave.phase += wave.frequency
    })
}

animate()

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    waves.forEach(wave => {
        wave.x = canvas.height / 2 - 100 + Math.random() * 200
    })
})
