const arr = [1, 5, 2, 6, 1, 2, 8, 9, 6, 6];
let counters = {};

arr.map((value) => {
  if (!counters[value]) counters[value] = 1;
  else counters[value]++;
});

console.log(counters);
