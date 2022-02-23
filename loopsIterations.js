// level {2}
function fibonacci(n) {
  let fib = [],
    sum;
  if (n <= 0) return 0;
  fib[0] = 1;
  fib[1] = 1;
  sum = fib[0] + fib[1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i];
  }
  return sum;
}
let sum = fibonacci(6);
console.log(sum);
