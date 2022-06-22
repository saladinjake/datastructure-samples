
const reverseArr = array =>{
 for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6])