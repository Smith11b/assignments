



class Queue {
    constructor(){
        this.data = [];
    };


    add(record){
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek(){
        let last = this.data[this.data.length - 1];
        if (last){
        console.log(last)
        return last
        } else {
            return undefined
        }
    }

}

qOne = new Queue;
qOne.add("hi");
qOne.add("there");
qOne.add("how");
qOne.add("are");
qOne.add("you");

qTwo = new Queue;
qTwo.add("no");
qTwo.add("really");
qTwo.add("i'm");
qTwo.add("fine");
qTwo.add("you?")
qTwo.add("me");

function weave(sourceOne, sourceTwo) {
    weavedQ = new Queue;
    while(sourceOne.peek() || sourceTwo.peek()){  // while either of the two queues have something in them
        if (sourceOne.peek() !== undefined){                    // if the first q has something in it add it to the weaved q.
        weavedQ.add(sourceOne.remove())              // and if the second q has something in it that to the weave q.
        }
        
        if(sourceTwo.peek() !== undefined){
        weavedQ.add(sourceTwo.remove())
        }
    }
    return weavedQ;
    
}

console.log(weave(qOne, qTwo));