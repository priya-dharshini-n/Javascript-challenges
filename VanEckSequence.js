// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function VanEck(num) {
  // Van Eck Sequence
  let sequence = [];
  for (i = 0; i < num; i++) sequence[i] = 0;
  for (let i = 0; i < num; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (sequence[j] === sequence[i]) {
        sequence[i + 1] = i - j;
        break;
      }
    }
  }
  console.log(sequence);
}
VanEck(100);
