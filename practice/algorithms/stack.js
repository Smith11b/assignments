

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

//implement a queue from a stack

class Queue {
    constructor(){
        this.data = new Stack;
    }

    add(record){
       let newStack = new Stack;
       newStack.sPush(record);
       this.data.sPush(newStack);
    
    }

    remove(){
        if(this.data.data[0]){
        let last = this.data.data.shift();
        return last.sPop();
        }
        else {
            return undefined;
        }
    } 

    peek(){
        return this.data.data[0].sPeek();;
    }
}

firstQ = new Queue;

firstQ.add("my girl");
firstQ.add("yo girl");
console.log(firstQ.peek())
firstQ.add("girls");
firstQ.add("but why?")
console.log(firstQ.peek())
firstQ.remove();
console.log(firstQ.peek());