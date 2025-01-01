// Q1- Sort the Array without using inbuilt method


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(array));

// let array = [5, 2, 9, 1, 5, 6];
// console.log(array.sort())