const numbers = [10, 20, 30, 40];

function binear_search(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      end = mid - 1;
    }
    if (target > array[mid]) {
      start = mid + 1;
    }
  }
}
//sort numbers
// const sorted = numbers.sort(function (a, b) {
//   return a - b;
// });

const index = binear_search(numbers, 10);
console.log(index);
