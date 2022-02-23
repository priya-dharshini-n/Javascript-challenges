// level {2}

// 1.
function removeEven() {
  let arr = [1, 3, 4, 6, 7, 8];
  return arr.filter((val) => val % 2 !== 0);
}
let odd = removeEven();
console.log(odd);

//2
function vowelCase() {
  let str = "Elie";
  let vowels = ["a", "e", "i", "o", "u"];
  let arr2 = "";
  for (let x of str) {
    if (vowels.includes(x)) arr2 += x.toUpperCase();
    else arr2 += x;
  }
  return arr2;
}
let upper = vowelCase();
console.log(upper);

//3
function Max() {
  let arr3 = [1, 3, 4, 6, 7, 8, 2, 5];
  return Math.max(...arr3);
}
let max = Max();
console.log(max);
