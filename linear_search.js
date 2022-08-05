const numbers = [10, 20, 30, 40, 5];

const linear_search = (array, target) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === target) {
      return index;
    }
  }
  return -1;
};
const index = linear_search(numbers, 40);
console.log(index);
