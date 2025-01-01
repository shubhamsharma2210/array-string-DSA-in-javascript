const reversedString = (str) => {
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i]
    }
    return reverse
}
const newString = "hello my name is shuham sharma "
console.log(reversedString(newString))