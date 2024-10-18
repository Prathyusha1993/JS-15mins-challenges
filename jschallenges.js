//find the output of below code:

var a = 'test';
class Test {
    a = 'any';
    prop() {
        console.log(this.a);
        return a;
    }
    static get prop() {
        console.log(a);
        return a;
    }
}

const test = new Test();
Test.prop = 'bar';
test.prop();
Test.prop;

//ex:
var x = 'test';
var y = function func() {
    console.log('func');
}

if(y) {
    x+= typeof (y);
}
console.log(x);

//ex:
var x = new Promise((resolve, reject) => {
    resolve('resolve');
    reject('reject');
});

const res = x.then(x => console.log('fulfilled' + ' ' + x) )
.catch(x => console.log('rejected' + ' ' + x));
// console.log(res);

//...
function test2(x,x){
    console.log(x + ' ' + x);
}
test2(1,2); //second value will be overweritten the first value so here x is 2 means it prints 2 2

'use strict';
function test1(x,x){
    console.log(x + ' ' + x);
}
test1(3,4); //second value will be overweritten the first value so here x is 2 means it prints 4 4


//....
class A {
    constructor(){
        console.log(new.target.name); //A B
    }
}

class B extends A {}
new A();
new B();

//....
function func([x=1, y=2] = []){
    console.log(x+y); //3
}
func([], [2,3]);

function func([x=1, y=2] = []){
    console.log(x+y); //5
}
func([2,3]);

function func([x=1, y=2] = [], [z,a] = []){
    console.log(x+y+z+a); //8
}
func([], [2,3]);


//......
async function async1() {
    setTimeout(() => {
        console.log('async1');
    }, 0);
}

async function async2() {
   console.log('start');
   await async1();
   console.log('end');
}

async2();

//...

var greeting = 'understanding of this keyword';

const obj = {
    greeting: 'Hello world',
    getGreeting(greeting) {
        var greeting = 'Hello India';
        console.log(this);
        return this.greeting;
        
    }
}
console.log(this); //this refers to window object

console.log(obj.getGreeting('welocme to javascript'));

//..
var greeting = 'understanding of this keyword';

const obj2 = {
    greeting: 'Hello world',
    getGreeting: (greeting) =>  {
        var greeting = 'Hello India';
        console.log(this);
        return this.greeting; //here this is refrring to global object which is window object //undersatnding of this keyword will print
        
    }
}

console.log(obj2.getGreeting('welocme to javascript'));