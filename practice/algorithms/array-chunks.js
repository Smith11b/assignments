

function chunk(arr, size) {
    let chunked = [];
    arr.forEach(el => {
        if(!(chunked[chunked.length -1]) || chunked[chunked.length -1].length === size){
            chunked.push([el]);
        } else {
            chunked[chunked.length -1].push(el)
        }
    })

    return chunked;
}

var array = [2, 4, 5, 3, 4, 3, 5, 3, 2, 3, 4, 4, 5];

console.log(chunk(array, 4))


// To boil this code down. I'm trying to return the new array chunked into smaller arrays that are the length of whatever
// is passed to into the size argument.

// first step, I need a new array because the chunked arrays are going to go in this array.
// second step. I'm going to have to iterate through each element of the passed array and do something with it.
// for that I'll use a for each loop.
// third step. I need to check to see if the chunked array is empty. if it is I'm going to push a new array into
// it containing the current element. I will do the same thing, if the last element in chunked has a length that
// is the same as the size argument. I do this because if it does, I need to push a new array in there.
// if either of those are true, I push a new array containing the current element in to the chunked array.
// if those are both false, then that means there is an array in chunked that has not reached the length equale
// to size, and I need to add the current element to that array.