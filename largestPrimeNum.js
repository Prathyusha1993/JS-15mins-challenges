let array = [4, 5,7,8,9,11,12,17,97,47,56, 103, 113];

function isPrime(num) {
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(array.filter(isPrime).reduce((a,b) => Math.max(a,b)));

function largestPrimeNum(num) {
    if(num % 2 === 0 || num < 2) return false;

    for(let i=3; i<= Math.sqrt(num); i+=2){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
console.log(array.sort((a,b) => a - b).findLast(largestPrimeNum));