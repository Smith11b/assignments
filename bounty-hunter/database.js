const uuid = require('uuid');

Bounty = function(person){
    this._id = uuid();
    this.fName = person.fName;
    this.lName = person.lName;
    this.living = person.living;
    this.bounty = person.bounty;
    this.type = person.type;

}

class Database{
    constructor(){
      this.bounties = [];
    }

    find(){
        return this.bounties;
    }

    findOne(id){
        let foundPerson = this.bounties.find(person => {
            return person._id === id;
        })
        return foundPerson;
    }
    save(person){
        let newPerson = new Bounty(person);
        this.bounties.push(newPerson)
        return newPerson;
    }

    findByIDAndRemove(id){
        let foundBounty = this.bounties.find(person => {
            return person._id === id;
        })
        if (foundBounty === undefined) return;
        let index = this.bounties.indexOf(foundBounty);
        this.bounties.splice(index, 1);
    }

    findByIDAndUpdate(id , updates){
        let foundBounty = this.bounties.find(person => {
            return person._id === id;
        })
        if (foundBounty === undefined) return
        let index = this.bounties.indexOf(foundBounty);
        let newFoundBounty = {...foundBounty, ...updates}
        this.bounties[index] = newFoundBounty;

    }
}

module.exports = new Database();