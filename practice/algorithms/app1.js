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

array = [2, 4, 7, 7,3, 7, 4, 77, 23]

function quikSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];

    rest.forEach(el => el < pivot ? left.push(el) : right.push(el));
    return quikSort(left).concat(pivot).concat(quikSort(right));
}

function binarySearch(arr, num , start, end){
    if(start > end){
        return false;
    }

    let mid = Math.floor(start + end) / 2;
    if(arr[mid]=== num) return true;

    if (arr[mid] > num) {
        return binarySearch(arr, num, start, mid)
    } else {
        return binarySearch(arr, num, mid + 1, end)
    }


}

let myArr = [1, 4, 6, 7,9, 10, 30, 50]
let myNum = 11

if (binarySearch(myArr, myNum, 0, myArr.length -1)){
    console.log("Found IT!")
} else {
    console.log("Not found")
}



console.log(quikSort(array));
