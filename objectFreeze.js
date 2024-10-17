//find output of below code
// strict mode is enabled

'use strict';
const obj = {
    name: {}
};

Object.freeze(obj);
obj.name.firstName = 'Test';
console.log(obj.name.firstName);


const obj1 = {
    subject: 'JS',
    rating: 9
}

obj1.subject = 'React';
delete obj1.rating;
console.log(obj1);

//we cannot delete or add new properties to the object when it si freeezed
// Object.freeze(obj1);
// obj1.subject = 'Angular';
// console.log(obj1);