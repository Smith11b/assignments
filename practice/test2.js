function productOfOthers(input) {
    let result = input.map((item, i) => {
        return item  * input[i +1];
    })
    return result;

}

console.log(productOfOthers([3,5,11]));