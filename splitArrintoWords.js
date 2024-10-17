
//split array itemsinto words:

const arr1 = ['I want to become', 'a professional front end', 'developer'];

const result = arr1.map((item) => item.split(' '));
console.log(result.flat());

//another way to do it:
const result1 = arr1.join(' ').split(' ');
console.log('result1:', result1);

//another way:
const result2 = arr1.flatMap((item) => item.split(' '));
console.log('result2:', result2);

//another way:
const result3 = arr1.reduce((acc, item) => acc.concat(item.split(' ')));
console.log('result3:', result3);