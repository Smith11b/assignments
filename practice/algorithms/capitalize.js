function capitalize(str){
    newStr = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        if(str[i -1] === " "){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}


console.log(capitalize("wey there matey"));