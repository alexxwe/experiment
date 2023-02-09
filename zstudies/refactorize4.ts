function getAnimalSound(animal: string) {
    // let sound = ''

    // if (animal === 'dog') {
    //     sound = 'bark'
    // } else if (animal === 'cat') {
    //     sound = 'meow'
    // } else if (animal === 'cow') {
    //     sound = 'moo'
    // } else if (animal === 'duck') {
    //     sound = 'quack'
    // } else {
    //     sound = "I don't know that animal"
    // }
    // return sound

    const sound: Record<string, string> = {
        dog: 'bark',
        cat: 'meow',
        cow: 'moo',
        duck: 'quack',
    }

    return sound[animal] ?? 'I don´t know that animal'
}

console.log(getAnimalSound('dog'))
