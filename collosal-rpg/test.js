function getRandomElement(arr){
    var index = Math.floor(Math.random() * arr.length); // takes an array and returns an item at a randomn index
    console.log(arr[index]);
    return arr[index];
}


var stuff = ["me", "you", "us"];

var logThis = getRandomElement(stuff);

console.log(logThis === "you");