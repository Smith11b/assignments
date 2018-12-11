function doubleNumbers(arr){
    var doubles = arr.map(function(num){
        return num * 2;
    })
    return doubles;
}

console.log(doubleNumbers([2, 5, 100]));


function stringItUp(arr){
    var strArr = arr.map(function(num){
        return num.toString();
    })
    return strArr

}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
    caps = arr.map(function(name){
        return name[0].toUpperCase() + name.slice(1);
    })
    return caps;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"])

function namesOnly(arr){
    var names = arr.map(function(person){
         return person.name;
    })
    return names;

}


console.log(namesOnly([
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
]) )


function makeStrings(arr){
    var permission = arr.map(function(person){
        if(person.age >= 18){
            return person.name + " can go to the Matrix";
        } else {
            return person.name + " is uner age!!";
        }
    })
    return permission;
}

console.log(makeStrings([
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
]) );

function readyToPutInTheDOM(arr){
    var element = arr.map(function(person){
        return "<h1>" + person.name + "</h1>" + " <h2>" + person.age + "</h2>";
    })
    return element;

}


console.log(readyToPutInTheDOM([
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
]) )
