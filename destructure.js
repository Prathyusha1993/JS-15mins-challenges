//find output of code

let place = 'USA';
let department = { [getStudentPlace()]: 'India', [place + 'Department']: 'English', standard: 100};
function getStudentPlace(){
    return place;
};
let division = 'standard';

let {[getStudentPlace()]: placeDetails, [place + 'Department']: departmentDetails, [division]:standard} = department;

console.log(placeDetails + ' & ' + departmentDetails + ' & ' + standard);

const arr = [1, 2];
[a,b] = arr;
console.log(a);
console.log(b);

//we can mutate values also 
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

//we can also destructure objects
const obj = {
    a:'test',
    b:'hello',
};
let {a: c, b: d} = obj;
console.log(c + ' & ' + d);