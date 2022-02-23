const arr = [11, 1, 3, 4, 2, 8];

let sum = 12;
let flag = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j != i && j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      console.log(arr[i], arr[j]);
      flag = 1;
      return flag;
    } else {
      flag = 0;
    }
  }
}
