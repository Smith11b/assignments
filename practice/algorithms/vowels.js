function vowels(str){
    let regex = /[aeiou]/gi;
    return  str.match(regex).length
}

 console.log(vowels("hey man whatsup"));



function vowel2(str){
    let count = 0;
    let checker = "aeiou";
    let newStr = str.toLowerCase();

    for(let char of newStr){
        if(checker.includes(char)){
            count++
        }
    }
    return count;
}

console.log(vowel2("hey girl whatsup"));