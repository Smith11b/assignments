if(5 > 3) {
    console.log("is greater than")
}

// Ternary version
5 > 3 ? console.log("is greater than") : console.log("is not greater than")

if( "cat".length === 3) {
    console.log("is the length")
}

// Ternary version
"cat".length === 3 ? console.log("is the length") : console.log("is not the lenth")


if("cat" === "dog") {
    console.log("yep they're equal")
} else {
    console.log("not the same")
}

// Ternary version
"cat" === "dog" ? console.log("yep they're equal") : console.log("not the same")


// Bronze Medal ----------------------------------------

var person = {
    name: "Bobby",
    age: 12
}

if(person.name[0]=== "B" && person.age === 18) {
    console.log(person.name+ " " + "is allowed to go to the movie")
}




// Silver Medal ---------------------------------------

if(1 === "1") {
    console.log("strict")
} else if(1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4 || (3 * 4) > 10 && (5 + 10) > 10) {
    console.log("yes")
}




// Gold medal ----------------------------------------

var dog = "dog"

if (typeof dog === "string") {
    console.log("dog is a string")
}

if (typeof true === "boolean") {
    console.log("true is a boolean")
}

if(dog === undefined) {
    console.log("this variable is undefined")
}


var myNum = 10;

myNum % 2 === 0 ? console.log("it's even") : console.log("it's odd")