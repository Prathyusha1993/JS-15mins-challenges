//Guess the array.from output

//Array.from() lets you create arrays from:
// array-like objects (objects with a length property and indexed elements)
// iterable objects (objects where you can get its elements, such as Map and Set).

const result = Array.from({length: 10}, (v, i) => i);
console.log(result);

const strFrom = Array.from('hello how are you');
console.log(strFrom);

const arrFrom = Array.from([1,2,3,45,6,7,8], x => x*2);
console.log(arrFrom);

const arrFrom1 = Array.from([1,2,3,45,6,7,8], x => x+5+x);
console.log(arrFrom1);