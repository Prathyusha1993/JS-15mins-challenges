let arr = [2,3,5,3,6,8,9,2,11,5];

function removeDuplicate(arr){
    let unique = [];
    for(let i=0; i<arr.length; i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicate(arr)); // [2,3,5,6,8,9,11]

function removeDuplicateSet(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicateSet(arr)); // [2,3,5,6,8,9,11]

let strArr = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl', 'Mike'];

const resultArr = [...new Set(strArr)];
console.log(resultArr);