//find last element in array without using length property

const arr = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown'];
console.log(arr[arr.length-1]);

console.log(arr.findLast(element => element));

console.log(arr.slice(9));

console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.slice(-1).pop());
console.log(arr.slice(-1).shift());
console.log(arr.slice(-1).join());


console.log(arr.at(-1));
arr.push('voilet');
console.log(arr.at(-1));
console.log(arr.at(-2));