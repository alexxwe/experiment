const canvas = document.getElementById('waterCanvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const waves = []
const waveCount = 25

for (let i = 0; i < waveCount; i++) {
    waves.push({
        y: canvas.height / 2 - 100 + Math.random() * 200,   // Intial vertical position of the wave 
        length: 0.01 + Math.random() * 0.001,               // Wavelenght, affects spatial frequency
        amplitude: 50 + Math.random() * 100,                // Max height of the wave
        frequency: 0.01 + Math.random() * 0.03,             // Temporal frequency, affects the speed of the animation
        phase: Math.random() * Math.PI * 2,                 // Initial phase of the wave, move the wave horizontally
    })
}

function animate() {
    requestAnimationFrame(animate)
    context.fillStyle = 'rgba(0, 0, 0, 0.03)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    waves.forEach((wave, index) => {
        context.beginPath()
        context.moveTo(0, wave.y)
        for (let i = 0; i < canvas.width; i++) {
            const yOffset = Math.sin(i * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase)
            context.lineTo(i, wave.y + yOffset)
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
        wave.y = canvas.height / 2 - 100 + Math.random() * 200
    })
})
