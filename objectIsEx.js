console.log(Object.is(NaN, NaN));
console.log(Object.is('Test', 'Test'));
console.log(Object.is(1,1));;
console.log(Object.is({a:1}, {a:1}));
console.log(Object.is(undefined, undefined));

console.log(Object.is(null, null));
console.log(Object.is(1, '1'));
console.log(Object.is('Hello', 'World'));
console.log(Object.is(1, 5));
console.log(Object.is('hiii', 'Hiii'));
console.log(Object.is({name: 'JS'}, {name: 'JS'}));
console.log(Object.is(+0, -0));
console.log(+0 === -0);