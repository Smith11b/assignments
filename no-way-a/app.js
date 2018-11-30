function removeA(str) {
    // Your code here
    var newStr = "";

    for (i = 0; i < str.length; i++) {
        if(str[i] !== "a" && str[i] !== "A") {
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(removeA("Aye matey!"))  // displays "ye mtey!"