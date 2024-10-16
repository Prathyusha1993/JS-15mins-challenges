let arr = [[0,1], [2,3],[4,5]];

let flattenedArray = arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
console.log(flattenedArray);

const output = arr.flat();
console.log(output);