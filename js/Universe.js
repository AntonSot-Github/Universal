'use strict'
const a = '12px';
const b = '10.5px';
console.log(parseInt(a) + parseFloat(b)+ 'px');

let str = '12345678';
let arr = Array.from(str);
let sum = 0;
arr.forEach(function(i){
    sum += Number([i])
})
console.log(sum);

console.log( +(0.1 * 0.2).toFixed(3));
console.log(+(0.3 - 0.1).toFixed(4));

let arr1 = ['1', '2', '5',];
/* let arr2 = [];

for (let i = 0; i <= arr1.length - 1; i++){
    arr2.push(+arr1[i] + 3);
}
console.log(arr2); */

arr1.forEach((element, index, array) => {
    array[index] = Number(element) + 3; 
})
console.log(arr1);

arr1.forEach(function(element,index,array){
    array[index]++;
})
console.log(arr1);

let arr2 = [];
for ( let i = 0; i <= 2; i++){
    
    arr2.push(arr[i] ++ );
}
console.log(arr2);
arr2[arr2.length] = 4;
arr2[arr2.length] = 5;
console.log(arr2);

let key1 = 1,
    key2 = 2;
console.log(arr2[key1] + arr2[key2]);
