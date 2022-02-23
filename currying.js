const multiply = (arg1) => (arg2) => (arg3) => {
  if (
    arg1 === undefined ||
    arg2 === undefined ||
    arg3 === undefined ||
    isNaN(arg1) ||
    isNaN(arg2) ||
    isNaN(arg3)
  )
    return "Invalid input";
  else return arg1 * arg2 * arg3;
};

console.log(multiply(2)(3)(4)); // output : 24
console.log(multiply(4)(3)(4)); // output : 48
console.log(multiply()(3)(4)); // "Invalid input"
console.log(multiply(4)("abc")(4)); // "Invalid input"
//Currying
