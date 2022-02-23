let str = "A New Sentence"; //A weN ecn..

let arr = str.split(" ");
let newArr = [];
// console.log(arr.reverse().join(""))

for (let i = 0; i < arr.length; i++) {
  for (j = arr[i].length - 1; j >= 0; j--) newArr.push(arr[i][j]);
  newArr.push(" ");
}

console.log(newArr.join("").replace(",", " "));
