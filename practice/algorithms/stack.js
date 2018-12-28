

class Stack {
    constructor(){
        this.data = [];
    }

    sPop(){
        return this.data.pop();
    }

    sPush(record){
        this.data.push(record);
    }

    sPeek(){
        return this.data[this.data.length -1]
    }
}