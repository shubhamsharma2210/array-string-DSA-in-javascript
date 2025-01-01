// Sum of all element in array

const sumAllElement = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
         sum = sum + arr[i]
    }
    return sum;
}

const number = [4,5,3,2,1]
console.log(sumAllElement(number))