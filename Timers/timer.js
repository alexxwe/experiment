(function timer(){
let seconds = 0
let minutes = 0
let hours = 0

    setInterval(() => {
        seconds += 1
        if (seconds >= 60) {
            seconds = 0
            minutes += 1
        }
        if (minutes >= 60) {
            minutes = 0
            hours += 1
        }
    }, 1000)
})