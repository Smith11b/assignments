function vowels(str){
    let regex = /[aeiou]/gi;
    return  str.match(regex).length
}

 console.log(vowels("hey man whatsup"));



