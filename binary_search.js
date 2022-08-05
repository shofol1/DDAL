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
function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
const sorted = bubble_sort(numbers);

const index = binear_search(sorted, 40);
console.log(index);
