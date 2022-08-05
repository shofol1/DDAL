const numbers = [23, 44, 55, 1, 42, 32, 32.5];

//[23, 44, 55, 1, 42, 32, 32.5];
//[1, 44, 55,23 , 42, 32, 32.5];
//[1, 23, 55,44 , 42, 32, 32.5];

function selection(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

const sorted = selection(numbers);
console.log(sorted);
