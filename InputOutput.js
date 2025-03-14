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
 


