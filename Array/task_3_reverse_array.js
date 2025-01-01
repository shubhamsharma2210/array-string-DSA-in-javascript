// Reverse an array

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
const number = [4, 9, 2, 3, 6];
console.log(reverseArray(number));
