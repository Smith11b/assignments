function sum(arr){
    if (arr.length === 1) {
        return arr[0];
    } else {
    let num = arr.shift();
    
    return num + sum(arr)
    }

}



let array = [5, 5, 5, 3, 2];

console.log(sum(array));