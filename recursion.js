//find output of below code

function print(x){
    if(x <= 1){
        print(x+1);
        console.log('x in if block is', x);
    } else if(x >= 10000000000){
        console.log('x in else if block is', x);
    }
    print(x + 1);
}
print(0);

//the js exception too much recursion or 'maximum call stack size exceeded' will be thrown when htere are toommany function calls
