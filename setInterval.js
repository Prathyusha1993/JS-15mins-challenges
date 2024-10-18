
//setInterval(cb, dealy, arg0,arg1, .....argn);
const interval = setInterval(cb, 0, 'first', 'second');
console.log(typeof(interval));

function cb(a, b) {
    console.log(a);
    console.log(b);
    clearInterval(interval);
}
console.log(typeof(interval));
//nmber, number, first second