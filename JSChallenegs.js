function f(a, b = () => console.log(a)) {
    var a=1;
    console.log(a);
    b();
}
f(2); //1 2

//ex:
var a=5;
const x = (a) =>
console.log(a); // 1 //this is only one line due to no curly braces const x = (a) => console.log(a);
console.log(a); //5

const y = function (b) {console.log(b)}; //3

x(1);
y(3);

//ex:

const x1 = function (a, b=3) { //3 will be overwrited by 2
    console.log(arguments[0] + '' + arguments[1]); //12
    arguments[0] = 4; //this will not change or update the value of a, argments object is getting updated but not the value of a
    console.log(a); //1
    console.log(b); //2
}
x1(1,2);

//arguments obect are not availble in arrow functions it wiill guve refrence error
const x2 = (a, b=3) => { 
    console.log(arguments[0] + '' + arguments[1]); //12
    arguments[0] = 4;
    console.log(a); //1
    console.log(b); //2
}
x1(1, 2);

//
const x3 = function(a, b=3) { 
    console.log(arguments[0] + '' + arguments[1]); //1undefined
    arguments[0] = 4;
    console.log(arguments.length);
    console.log(a); //1
    console.log(b); //3 here it is default value
}
x1(1);


//Ex:
console.log('start');
setTimeout(() => {console.log('String1');}, '1000'); //non number value will be converted to number
setTimeout(() => {console.log('String2');}, '1 second'); //this is string so it will be converted to zero
setTimeout(() => {console.log('Number');}, 1000);
console.log('End');