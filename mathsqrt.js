

let num1 = Math.sqrt(-9); //square toot of less than zero is not a number
let num = Math.sqrt(-0);
let num2 = Math.sqrt(9);
console.log(num1); //NaN
console.log(num2); //3

if(num1 + num2 >= 0){
    console.log('Positive Value');
} else if(num1 + num2 < 0){
    console.log('Negative Value');
} else  {
    console.log('Not number value')
}
