let arr= [2,2,5,1,1,3,4,5,6,8,9,10,2];
let count=[];
let max = 0;
max=Math.max(...arr);

for(let i=0;i<=max;i++)
count[i]=0;

arr.map((val,index)=>{
        count[val]++
})

let unique = [];
unique = [...new Set(arr)];

for(let i=0;i<unique.length;i++){
    console.log(unique[i], count[unique[i]], "time");
}
