//find output of code:


const str = '123';
const result1 = str.repeat(0);
const result2 = str.repeat(3.5);
// const result3 = str.repeat(-1);  //less than 0 means it gives error value shouls 0 and infinty

console.log(result1);
console.log(result1.length);
console.log(result2);
console.log(result2.length);
console.log((result1 + result2).length); 