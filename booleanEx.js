//find output of below code:

const falsy = new Boolean(false); //its a boolean object
console.log(falsy);

const falsy2 = new Boolean([])
console.log(falsy2);

const truthy = Boolean(true); //its a boolean primitive
console.log(truthy);

if(falsy){
    if([]) console.log('Array [] is empty');;
    if([] == false) console.log('empty []is compared with false');
}

if(truthy) {
    if([]) console.log('Array [] is empty');;
    if([] == false) console.log('empty []is compared with false');
}
