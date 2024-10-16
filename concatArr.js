//concatenate nested array
//concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.

const num1 = [[1],[2]];
const num2 = [3, [4]];
const num3 = 5;

//output: [[1,5], [2], 3 [4]]

num1[0].push(num3);
console.log(num1);
console.log(num2);
const result = num1.concat(num2);
console.log(result);