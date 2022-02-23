let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 1, 6, 7];
let newArr = arr1
  .filter((obj) => arr2.indexOf(obj) === -1)
  .concat(arr2.filter((obj) => arr1.indexOf(obj) === -1));

console.log(newArr);
