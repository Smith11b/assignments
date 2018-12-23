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


function count(arr) {
    if (arr.length === 1){
        return 1
    } else {
        arr.pop()
        return 1 + count(arr)
    }
}

array = [5, 5, 5, 3, 2];



console.log(count(array))




array = [2, 4, 5, 3, 7, 8, 3, 9];



function qSort(arr){
    if(arr.length < 2){
        return arr;
    } 
    const [pivot, ...other] = arr;
    const less = []
    const greater = []

    other.forEach(element => element < pivot ? less.push(element) : greater.push(element));

    return qSort(less).concat(pivot).concat(qSort(greater));
}

console.log(qSort(array));



array = [2, 4, 6, 12, 5, 3, 6, 8, 9, 3]


function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const [pivot, ...rest] = arr;
    const less = [];
    const greater = [];
    rest.forEach(el => el < pivot ? less.push(el) : greater.push(el));

    return quickSort(less).concat(pivot).concat(quickSort(greater));
}

console.log(quickSort(array));

