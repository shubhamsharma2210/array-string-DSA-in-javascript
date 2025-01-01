const generateOtp = (digit) => {
    let otp = ""
    for(let i=0; i< digit; i++){
        const randomOtp  = Math.floor(Math.random() * 10)
        otp = otp + randomOtp
    }
    return otp
}
console.log(generateOtp(5))