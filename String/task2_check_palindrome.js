const checkPanlindrome = (str) => {
    let start = 0;
    let end = str.length-1

    while(start < end ){
        if(str[start] !== str[end]){
            return false
        }
       
        start++ 
        end--
    }
    return true
}
const string = "madam"
console.log(checkPanlindrome(string))