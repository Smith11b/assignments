for(i = 0; i < 10; i++) {
    console.log(i);
}

for(i = 9; i >= 0; i--) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"]

for(i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

var num = [];

for(i = 0; i < 10; i++) {
    num.push(i)
}
console.log(num)

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  
  for(i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name);
  }
var names = [];
var occ = [];
  for(i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occ.push(peopleArray[i].occupation)
    
}

console.log(names);
console.log(occ);

namesTwo = [];
occTwo = [];

for(i = 0, f = 1; i < peopleArray.length; i+= 2, f+= 2) {
    namesTwo.push(peopleArray[i].name);
    occTwo.push(peopleArray[f].occupation)
    
}

console.log(namesTwo);
console.log(occTwo);