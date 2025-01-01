// // Find the largest number in the array

// function largestNumber(arr) {
//   // create a variable to store largest value
//   var largest = arr[0];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// const number = [8, 6, 9, 27, 111, 2];
// console.log(largestNumber(number));


const largestNumber = (arr) => {
    let largest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

const numbers = [1,9,[5555,222],33]
console.log(largestNumber(numbers))

const hekk = -Infinity
console.log(typeof(hekk))