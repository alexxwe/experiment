
function random_bg_color(){
    document.getElementById("color").onclick = random_bg_color
    
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    
    let bgcolor ="rgb(" + x + "," + y + "," + z + ")"
    document.body.style.background = bgcolor
    
    return bgcolor
    
}
// setInterval(random_bg_color, 4000);


console.log(random_bg_color())


function generateOTP(limit){
    document.getElementById("otp").onclick = generateOTP
    
    let numbers = "0123456789"
    let letters = "abcdefghijklmnñopqrstuvwxyz"
    let symbols = "|@#~€¬!·$%&/()=?¿<>:,-.*^"
    // let all = numbers + letters + symbols
    let OTP = ''
    
    for (let i = 0; i < limit; i++){
        OTP += numbers[Math.floor(Math.random() * 10)]
        OTP += letters[Math.floor(Math.random() * 27)]
        OTP += symbols[Math.floor(Math.random() * 25)]
    }
    
    document.getElementById("pass").innerHTML = OTP
    
    console.log(generateOTP(5))
    return OTP
    
}
// setInterval(generateOTP, 10000);

// console.log(generateOTP(30))
// poner un setinterval

