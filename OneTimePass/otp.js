function generateOTP(limit){
    
    let numbers = "0123456789"
    let letters = "abcdefghijklmnñopqrstuvwxyz"
    let symbols = "|@#~€¬!·$%&/()=?¿<>:,-.*^"
    let all = numbers + letters + symbols
    let OTP = ''

    for (let i = 0; i < limit; i++){
        OTP += numbers[Math.floor(Math.random() * 10)]
        OTP += letters[Math.floor(Math.random() * 27)]
        OTP += symbols[Math.floor(Math.random() * 25)]

    }
    return OTP
}

console.log(generateOTP(4))
// console.log(generateOTP(30))
