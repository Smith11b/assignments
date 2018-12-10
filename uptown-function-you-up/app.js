var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function splitArray(arr){
    return arr.join(' ');
}

console.log(splitArray(lyrics));


function reverseArray(arr) {
    var newArr = [];
    for(i = arr.length; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}

console.log(reverseArray(lyrics));


function everyOther(arr) {
    var skip = [];
    for(i = 0; i < arr.length; i+=2) {
        skip.push(arr[i]);

    }
    return skip.join(" ");
}

console.log(everyOther(lyrics));