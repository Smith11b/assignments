// var num = 2;


// function addOne(){
//     num++;
// }


// function addOne1(n){
//     n++
//     return n;
// }


// console.log(addOne1(3) + addOne1(4));



function countDown(x){
    if (x < 2) {
        console.log(1);
        return 1
    }
     console.log(x)
     return countDown(x -1) + countDown(x - 2);
}


countDown(5);