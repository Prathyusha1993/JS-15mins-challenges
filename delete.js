//find the output of code

//non configurable property can not be deleted, but configurable property can be deleted(inside objects)
delete console.log(1);
{
    let name = 'javascript';
    delete  name;
    console.log(name);
}


const obj = {
    tutorial: 'JS',
    lesson: 'delete'
}
console.log(obj.tutorial);
delete obj.tutorial;
console.log(obj.tutorial);

var detials = 'test';
console.log(delete details);