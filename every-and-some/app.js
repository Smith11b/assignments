function every(arr, callback){
    for(i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            continue
        } else {
            return false;
        }
    }
}

console.log(every([1,2,"3"], (num)=>{
    return typeof num === "number";
  }));


function some(arr, callback){
    for(i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return true;
        } else {
            continue
        }
    }
}

console.log(some(["ben", "jacob", "bob"], (name)=>{
    return name === "jacob";
  }));