function fiveAndGreaterOnly(arr) {
    var fivePlus = arr.filter(function(num){
        if(num >= 5){
            return num;
        }
    })
    return fivePlus;

}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    var evens = arr.filter(function(num){
        if (num % 2 === 0){
            return num;
        }
    })
    return evens;
}

console.log(evensOnly([3, 6, 8, 2]));


function fiveCharactersOrFewerOnly(arr) {
    var fiveChar = arr.filter(function(str){
        if(str.length <= 5){
            return str;
        }

    })
    return fiveChar;

}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));


function peopleWhoBelongToTheIlluminati(arr){
    var clubMembers = arr.filter(function(person){
        if(person.member){
            return person;
        }
    })
    return clubMembers;

}

console.log(peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]));

function ofAge(arr){
    var oldEnough = arr.filter(function(person){
        if(person.age >= 18){
            return person
        
        }
        
    })
    return oldEnough;
}

console.log(ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));