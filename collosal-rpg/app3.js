var readline = require("readline-sync");

// Player and game setup =======================================

var playerName = readline.question("What is your name Padawan?");

var isAlive = true; // Track if the player is alive
var isEnemyHere = false;
var hasWon = false; // Track if the player has won
var enemyTypes = ["Sith Apprentice", "Sith Lord", "Sith Master"];
var playerAttacks = ["Slash", "Force Push", "Lightsaber Throw", "Repulse"];
var enemyAttacks = ["Dark Slash", "Dark Push", "Force Lightning", "Force Choke"];
var lootDrops = [{                                             // This is an array of loot drops to pull randomnly from
    name: "Bacta Fluid",
    use: "adds 10 hp",
    useThis: function(){                // in the game loop, if player types use backta fluid and they have it in inventory
        player.hp += 10; 
        console.log("Your hp was restored by 10 pts!\n")
        this.print()               // it will cal this function and add 10 hp to their current health. Same below.
    }}, {
    name: "Lightsaber Crystal",
    use: "adds 3 to attack power",
    useThis: function(){
        player.attack += 3;
        console.log("Your attack just went up 3 pts!\n")
        this.print()     
    }
    }, {
    name: "Force Crystal",
    use: "adds 10 to force power",
    useThis: function(){
        player.force+= 10;
        console.log("Your force power was restored by 10 pts!\n")
        this.print()     
    }
    }]

    
    
    function Player() {                                      // The player prototype
        name = playerName;
        hp = 100;
        attack = 10;
        inventory = [];
        force = 20;
        enemiesKilled = 0;  
    };
    
    var player = new Player();                               //instance a new player called player.

function Enemy(name, level){             /// The Enemy prototype
    this.name = name;
    this.attack = 3 * level;
    this.force = 10 * this.level;
    this.level = level;
};

// Game Utility Functions

function getRandomElement(arr){
    var index = Math.floor(Math.random() * arr.length); // takes an array and returns an item at a randomn index
    return arr[index];
}

function randomEnemyGenerator(arr){
    var enemyType = getRandomElement(arr);
    if(enemyType === "Sith Apprentice"){
        return new Enemy("Sith Apprentice", 2);
    } else if(enemyType === "Sith Lord"){
        return new Enemy("Sith Lord", 5, );
    } else {
        return new Enemy("Sith Master", 10);
    }
}

function randomAttacks(arr){
    var attack = getRandomElement(arr);
    if(attack = "Slash"){
        player.slash(enemy);
    } else if(attack === "Force Push"){
        player.forcePush(enemy);
    } else if (attack === "Lightsaber Throw"){
        player.lightsaberThrow(enemy);
    } else if (attack === "Repulse"){
        player.forceRepulse(enemy);
    } else if (attack === "Dark Slash"){
        enemy.slash();
    } else if (attack === "Dark Push"){
        enemy.forcePush();
    } else if (attack === "Force Lightning"){
        enemy.forceLightning();
    } else if (attack === "Force Choke"){
        enemy.forceChoke();
    }
}

function useItem(itemName, inventoryArr){
    var hasItem = false;
    for(i = 0; i < inventoryArr.length; i++){
        if(itemName === inventoryArr[i]){
            inventoryArr[i].useThis();
            hasItem = true;

        }
        
    }
    if(hasItem = false){
        console.log("You don't have one of those!");
    }
    
}

function print(){
    console.log(player.name + "Health = " + player.hp + " Force = " + this.force + " Inventory: " + this.inventory);
}

function walk(){
    if(Math.floor(Math.random() < .40)){
        var enemy = randomEnemyGenerator(enemyTypes);
        console.log("A " + enemy.name + " is standing here, you feel the dark side pooring out of him\n")
        isEnemyHere = true;
        
    }
    
}

function fight(){
    var loop = setInterval(function(){      //Set an interval so player can see the fight. code runs ever second.
        if (player.hp <= 0){                //if the player is dead, tell him he's dead, and change isAlive to false. Then break the interval.
            console.log(enemy.name + " Just killed you. You have died");
            isAlive = false;
            clearInterval(loop)
        }

        if (enemy.hp <= 0){                  //Check if the enemy is dead. If so. Tell the player and add randomn item
            console.log("You ended a" + enemy.name + "'s life") // to the players inventory. Also add 1 to players kill count.
            var newItem = getRandomElement(lootDrops)
            console.log("You just got a " + newItem + "!");
            player.inventory.push(newItem);
            enemiesKilled++;
            clearInterval(loop);
        }

        randomAttacks(playerAttacks);
        randomAttacks(enemyAttacks);

        
    }, 1000)


}

function run(){
    var runChance = Math.floor(Math.random() * 10);
    if(runChance <= 5){
        console.log("You escape!\n");
        isEnemyHere = false;
    } else{
        console.log("You try to get away, but the " + enemy.name + "manages to keep up\n");
    }

}




// Enemy attacks =================================================

function darkslash(){
    if(Math.random() > .333){
        console.log(this.name + " slashes you for " + this.attack + "damage!" + " Health = " + this.hp + "\n")
        player.hp -= this.attack;
    } else {
        console.log(this.name + " tries to slash you but misses" + " Health = " + this.hp + "\n");
    }
}

function darkForcePush(){
    if(this.force < 5){
        console.log(this.name + "puts his hand out to force push you, but he's out of energy" + " Health = " + this.hp + "\n");
    } else if(Math.random() > .333){
        player.hp -= this.attack * this.level * 2;
        console.log(this.name + " force pushes you, you slam into the wall! You take " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 5;
    } else {
        console.log(this.name + " tries to force push you, but you block it!" + " Health = " + this.hp + "\n");
        this.force -= 5;
    }
}

function forceChoke(){
    if(this.force < 15){
        console.log(this.name + "puts his hand out to force choke, but he's out of energy" + " Health = " + this.hp + "\n");
    } else if(Math.random() > .333){
        player.hp -= this.attack * this.level * 3;
        console.log(this.name + " force chokes you, you can't breath You take " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 15;
    } else {
        console.log(this.name + " tries to force choke you, but you block it!" + " Health = " + this.hp + "\n");
        this.force -= 15;
    }
}

function forceLightning(){
    if(this.force < 19){
        console.log(this.name + "puts his hand out to use lightning, but he's out of energy" + " Health = " + this.hp + "\n");
    } else if(Math.random() > .333){
        player.hp -= this.attack * this.level * 4;
        console.log(this.name + "put's his hand out, lighting strikes you! You take " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 19;
    } else {
        console.log(this.name + " tries to use force lightning, but you block it!" + " Health = " + this.hp + "\n");
        this.force -= 19;
    }

}


// Appending enemy attacks to enemy prototype

Enemy.prototype.slash = darkslash;
Enemy.prototype.forcePush = darkForcePush;
Enemy.prototype.forceChoke = forceChoke;
Enemy.prototype.forceLightning = forceLightning;

//player attacks ==============================================================


function slash(enemy){
    if(Math.random() > .20){
        console.log("You slash " +  enemy.name + " with your lightsaber for " + this.attack + " damage!" + " Health = " + this.hp + "\n")
        enemy.hp -= this.attack;
    } else {
        console.log(" you try to slash but you miss" + " Health = " + this.hp + "\n");
    }
}


function forcePush(enemy){
    if(this.force < 5){
        console.log("You put your hand out to force push " + enemy.name + "but you don't have enough energy" + "\n");
    }
    if(Math.random() > .20){
        enemy.hp -= this.attack * this.level * 2;
        console.log("You put your hand out and force push " + enemy.name + " they slam into the wall! " + enemy.name + " takes " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 5;
    } else {
        console.log("You try to force push " + enemy.name + " but they block it!" +  "Health = " + this.hp + "\n");
        this.force -= 5;
    }
}
function lightsaberThrow(enemy){
    if(this.force < 15){
        console.log("You try use the force to throw your lightsaber at " + enemy.name + "but you don't have enough energy" + "\n");
    }
    if(Math.random() > .20){
        enemy.hp -= this.attack * this.level * 2;
        console.log("You use the force to throw your lightsaber " + enemy.name + " it impales them! " + enemy.name + " takes " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 15;
    } else {
        this.force -=15
        console.log("You throw your lightsaber at " + enemy.name + " but they block it!" +  "Health = " + this.hp + "\n");
    }
}

function forceRepulse(enemy){
    if(this.force < 19){
        console.log("You try use force repulse on " + enemy.name + "but you don't have enough energy" + "\n");
    }
    if(Math.random() > .20){
        enemy.hp -= this.attack * this.level * 2;
        console.log("You explode outward with force energy in all directions. " + enemy.name + " is sent flying!" + enemy.name + " takes " + (this.attack * this.level) + "damage!" + " Health = " + this.hp + "\n")
        this.force -= 19;
    } else {
        this.force -=19
        console.log("You explode outward with force energy, it hits " + enemy.name + " but they block it!" +  "Health = " + this.hp) + "\n";
    }
}

// Appending player attacks AND UTILITIES to player prototype

Player.prototype.slash = slash;
Player.prototype.forcePush = forcePush;
Player.prototype.lightsaberThrow = lightsaberThrow;
Player.prototype.forceRepulse = forceRepulse;
Player.prototype.useItem = useItem;
Player.prototype.print = print;


//Game Loop


while(true){

    var input = readline.question("What would you like to do? [W to walk|F to fight| U + item to use an item| R to run]\n");

    if(input === "w" || input === "W"){
        walk();
    }
    
    if (input === "F" || input === "f"){
        if(isEnemyHere){
            fight();        
        } else{
            console.log("No one is here but you\n");
        }
    }

    if(enemiesKilled === 3){            //Check if the kill count is 3 if it is, break the loop and set hasWon to true;
        hasWon = true;
        break;
    }
    
    if (input === "U Bacta" || input === "U Bacta Fluid"){
            player.useItem("Bacta Fluid", this.inventory);
    }
    
    if (input === "U Force" || input === "U Force Crystal"){
            player.useItem("Force Crystal", this.inventory);
    }
    
    if (input === "U Light" || input === "U Lightsaber Crystal"){
            player.useItem("Lightsaber Crystal", this.inventory);
    }
    
    if (input === "R" || input === "Run" || input === "r" && isEnemyHere === true){
        run();
           
    }
    if (hasWon){
            console.log("You did it young Padawan, You are now a full fledged Jedi Knight");
            hasWon = true;
            break;
        }
        var reg = new RegExp(/[^wfur]ig/);
    if (reg.test(input)){
        console.log("That's not a valid thing you can do.");
        }
    };
        