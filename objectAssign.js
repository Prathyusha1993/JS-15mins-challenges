//find outut of below code:

const obj = Object.create(
    {subject: 'Javascript'},
    {lesson: {value: 'hello'}}
);

console.log(obj);

const copy = Object.assign({}, obj);
console.log(copy);

const obj1 = {a:1};
console.log(obj1);
const obj2 = Object.create(obj1);
obj2.b = 2;
obj2.c =3;
console.log(obj2);


const obj3 = Object.create(
    {str: 'hello'},
    {str1: {value: 'world', enumerable: true}}
);
const copy1 = Object.assign(obj3);
console.log(copy1);

//if we set enumarble true it will print str1 value or else it won't print
const copy2 = Object.assign({}, obj3);
console.log(copy2);