// Write a program remove duplicates numbers in array

// using inbuilt method
// const duplicatesNumberArray = [1,1,2,4,5,5,99,22,22]
// const uniqueArray = [...new Set(duplicatesNumberArray)]
// console.log(uniqueArray
// )


// Without using inbuilt method

const removeDuplicatsNumber = (arr) => {
    let uniqueNumber = []
    for(let i =0; i< arr.length; i++){
        if(uniqueNumber.indexOf(arr[i]) === -1){
            uniqueNumber.push(arr[i])
        }
    }
    return uniqueNumber
}
const duplicatesNumberArr = [2,2,2,3,3,4,6,7,7,7]
const uniqueNumber =removeDuplicatsNumber(duplicatesNumberArr)
console.log(uniqueNumber)