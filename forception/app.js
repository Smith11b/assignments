
var myPeople = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var myAlphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    newArray = [];
    for(i = 0; i < people.length; i++) {
        newArray.push(people[i] += ":")
        for(f = 0; f < alphabet.length; f++){
            newArray.push(alphabet[f]);
        }
    }
    console.log(newArray);
}

forception(myPeople, myAlphabet);