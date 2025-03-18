let obj1 = {
    studentname: ["A", "B", "C"],
    studentDOB: ["1/2/2000", "3/2/1999", "4/9/2001"],
    studentPlace: ["Salem", "CBE", "CHN"]
    
};

//Shallow
let obj2 = Object.assign({}, obj1); //shallow
obj2.studentId=[22, 33, 11];

console.log(obj2);

let arr= [1, 3, 2, 5];
arr.shift();
console.log(arr)
arr.unshift(22);
console.log(arr)

Fill missing value
let arr= [1,3,5];
for(let i=1;i<=arr.length; i++){
  if(arr[i-1] != i)
  arr.unshift(i);
  arr.sort();
}
console.log(arr)

let a =10;
let b = Number(10);
let c =10;
 
 
console.log(b);
console.log(b === c);
console.log('NAN' == nan)

console.log(NaN == NaN)
console.log(typeof(NaN))
 


var z=1, y = z  = typeof y;

console.log(y)
console.log(3 - '53')
let a =10;
let b = new Number(10);
let c =10;
 
 
console.log(a === b);
console.log(b === c);

var x=10;

for(let i=0; i<2;i++)
{
    let x = 20;
    console.log(i,x)
}
var x = 90
console.log(x)

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 

