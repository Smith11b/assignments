// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
  function sayHello(){
    console.log("hello")
  }
  return sayHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 var function1 = createFunction();
 function1();



function createFunctionPrinter(input) {

  function closure(){
    console.log(input);
  }
  return closure;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 var printSample = createFunctionPrinter('sample');
 printSample();
 var printHello = createFunctionPrinter('hello');
 printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
  function add(input){
    return input + x;
  }
  return add;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(2))