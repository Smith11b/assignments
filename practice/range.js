Number.prototype[Symbol.iterator] = function*(){
    if(this === 0){
        return 0;
    } else if(this > 0){
        for (let i = 0; i <= this; i++){
            yield i;
        }
    } else {
        for (let i = 0; i >= this; i--){
            yield i;
        }
    }
};


var arr = [...10];


console.log(arr);