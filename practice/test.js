
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;

}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  
  return word + "s";

}

// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++){
    newArr[i] = callback(array[i]);
    
  }
  return newArr;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let i = 0; i < array.length; i++){
    array[i] = callback(array[i]);
  }

}

// see for yourself if your forEach works!
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet)


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  forEach(array, callback)
  return array;
}

console.log(mapWith([1, 2, 3], addTwo));
//Extension 2
function reduce(array, callback, initialValue) {
  for(let i = 0; i < array.length; i++){
    initialValue = callback(initialValue, array[i]);
    }
  return initialValue;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0))

