//find output of the following code that exisits only once in arrary


const arr = [1,2,3,4,5,3,2]; //output: [1,4,5]

const existOnlyOnce = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(existOnlyOnce);