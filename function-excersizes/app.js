// Sum function

function addNum(x, y) {
    return x + y;

}

// Test--------------------------
var sum = addNum(5, 5)
console.log(sum)

// Largest Number function

function largestNum (x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

//Test---------------------

var biggestNum = largestNum(34, 23, 59);

console.log(biggestNum);

// evenOrOdd Function -----

function evenOrOdd(x) {
    if (x % 2 === 0) {
        console.log(x + " is even");
    } else {
        console.log(x + " is Odd");
    }

}

// Tests-----------------------
evenOrOdd(4);
evenOrOdd(5);


function manipulateString(word) {
    if(word.length <= 10) {
        return word + word;
    } else {
        var half = Math.floor(word.length / 2);
        return word.substring(0, half);
    }
}

console.log(manipulateString("Goldenbubblegumcherry"))