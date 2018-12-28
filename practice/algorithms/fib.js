function fib(n){
    let arr = [0, 1];
    let num = 0;
    
    for (let i = 2; i <= n; i++){
        num = arr[i-1] + arr[i -2];
        arr[i] = num;
    }
    return arr[arr.length-1];
}

console.log(fib(10));


function fibRecurse(n){
    if(n < 2){
        return n;
    }
    return fibRecurse(n - 1) + fibRecurse(n - 2);
}

console.log(fibRecurse(10));