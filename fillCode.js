//find output of below code
//the fill() method fills all the elements of an array from a start index to an end index with a static value.
//if first parameter is an object then each slot in the array will reference that object

const arr = Array(5).fill({});
arr[4].product = 'laptop';
console.log(arr);