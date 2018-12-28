function fib(n){
    let arr = [0, 1];
    let num = 0;
    
    for (let i = 2; i <= n; i++){
        num = arr[i-1] + arr[i -2];
        arr[i] = num;
    }

    return arr[n -1];
}

console.log(fib(5))