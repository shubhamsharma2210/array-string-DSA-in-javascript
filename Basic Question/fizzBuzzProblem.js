const checkFizzBuzz = (n) => {
    for(let i = 0; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FIZZBUZZ")
        }
        else if(i%3 ===0){
            console.log("fizz")
        }
        else if(i%5 === 0){
            console.log("BUZZ")
        }
        else{
            console.log("These are not divided for 3 and 5")
        }
    }
}
checkFizzBuzz(7)