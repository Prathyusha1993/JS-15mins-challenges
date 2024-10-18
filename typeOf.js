// find outputbelow code:

let a = 5;
let b = 2;

//numbers shouldbe converted to binary:
console.log(a.toString(2)); //101
//10100

console.log(a << b); //20 left shift operator
console.log(typeof(a << b)); //number

//shortest experssion for left shift opertor bitwise opertor is
//a * (2 ** b) = 5 * (2 ** 2) = 5 * 4 = 20


//find outputbelow code:

function A(){ console.log('A'); return false; };
function B(){ console.log('B'); return true; };
function C(){ console.log('C'); return 5; };
function D(){ console.log('D'); return 2; };

console.log((C() > D()));
console.log(undefined);
console.log(undefined || B() || A()); //short circuit evaluation (false || true || A()) here its not executing A() because B() is true and with or operator false and true is true

console.log((C() > D()) && (undefined || B() || A())); //C D B true