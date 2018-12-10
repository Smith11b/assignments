function randomPasswordGenerator(number) {
    //creates a password
    var possible = "abcdefghijklmnopABCDEFGHIJKLMNOP12345";
    var password = " ";

    for(i = 0; i < number; i++){
         password += possible.charAt(Math.floor(Math.random()* possible.length));
    }
    //number specifies length
    return password;
}
console.log(randomPasswordGenerator(5))
console.log(randomPasswordGenerator(10))
//Returns a password with the length of 5
//Example: s*3Lj