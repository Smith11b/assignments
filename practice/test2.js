


class Sword{
    constructor(name, description){
        this.attack = 100;
        this.defense = 10;
        this.name = name;
        

    }

    attackEnemy(enemy){
        enemy.hp -= this.attack;
    }

}


const mySword = new Sword("HailBringer");



console.log(mySword.name)


function Sword2(name){
    this.attack = 100;
    this.defense = 10;
    this.name = name;

}


Sword2.prototype.attackEnemy = function(enemy){
    enemy.hp -= this.attack;
}


const mySecondSword = new Sword2;




var person = "who's this?"


function sayHi(){
    console.log('hi');

    // random stuff
}




{

    ///random code

    //sayHi()   
}



const inventory = ["belt", "shoes", "shirt", "boat", "car", "got"];

let storageBag = [...inventory, "toothbrush"]

var name = "Waylon";


storageBag = [...inventory, name];

console.log(storageBag);


const items = [
    {name: "Sword",
    attack: 30,
    defense: 20}, 
    
    {name: "armor",
    defense: 40}, 
    
    {name: "speed-boost",
    defense: 50,
   
}];
    
function equip(item){
    

}


if (input === player.inventory.filter((item)=> {return item.name === input}))



function giveRandomItem(items){
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex];
};


console.log(giveRandomItem(items));

const newItem = giveRandomItem(items);









