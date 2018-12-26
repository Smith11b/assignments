
 function makeCharacterMap(string){ //helper function that takes a string and returns a character map of it.
    let charMap = {}
    for (let char of string) {
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    return charMap;
}


function anagram(stringA, stringB){
    let charMapA = makeCharacterMap(stringA);
    let charMapB = makeCharacterMap(stringB);
    let firstString = stringA.replace(/[^\w]/g).toLowerCase()
    let secString = stringB.replace(/[^\w]/g).toLowerCase()


   

    if(firstString.length !== secString.length){    // if the strings lengths aren't equal than they cannot be anagrams
        return false;                               // so return false
    } else {
        for (let el in charMapB){                  // other wise iterate through the maps, if the amounts of each property
            if(charMapB[el] !== charMapA[el]){     // are not the same than it is not an anagram, return flase.
                return false;
            }
        }
    }
    return true;
}

console.log(anagram("helllllo", "helllllo"));