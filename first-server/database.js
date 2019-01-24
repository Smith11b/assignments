const uuid = require("uuid");

function CosmicBeverage(beverage) {
  this._id = uuid();
  this.name = beverage.name;
  this.origin = beverage.origin;
  this.price = beverage.price;
}

const Database = function() {
  this.cosmicBeverages = [];
};

Database.prototype.find = function() {
  return this.cosmicBeverages;
};

Database.prototype.findOne = function(id){
    let foundBeverage = this.cosmicBeverages.find(beverage => {
        return beverage._id === id;
    })
    return foundBeverage;
}

Database.prototype.save = function(beverage) {
  const newBeverage = new CosmicBeverage(beverage);
  this.cosmicBeverages.push(newBeverage);
  return newBeverage;
};

Database.prototype.findByIDAndRemove = function(id){
    let foundBeverage = this.cosmicBeverages.find(beverage => {
        return beverage._id === id;
    });
    if (foundBeverage === undefined){
        return
    } else {
    let index = this.cosmicBeverages.indexOf(foundBeverage);
    this.cosmicBeverages.splice(index, 1);
    }
}

Database.prototype.findByIDAndUpdate = function(id, updates){
    let foundBeverage = this.cosmicBeverages.find(beverage => {
        return beverage._id === id;
    });
    if (foundBeverage === undefined){
        return
    } else {
    let index = this.cosmicBeverages.indexOf(foundBeverage);
    newFoundBeverage = {...foundBeverage, ...updates};
    this.cosmicBeverages[index] = newFoundBeverage;
    }

    return newFoundBeverage;

}

    

module.exports = new Database();
