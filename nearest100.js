//[1,98,101,110] Find nearest number to 100
let arr = [1, 98, 101, 110, 100];
let near = 100;
let diff, calc, num;

for (i = 0; i < arr.length; i++) {
  //100-1, 100-98, 101 -100, 110-100
  if (arr[i] === 100) {
    near = 0;
    num = arr[i];
    break;
  }
  if (arr[i] < 100) calc = 100 - arr[i]; //99 2 1 10

  if (arr[i] > 100) calc = arr[i] - 100;

  if (calc < near) {
    near = calc; //99 2
    num = arr[i];
  }
}
console.log(near, num);
