var reverse = function(x) {
    var arr1 = [];
    var arr2 = [];
    var num1 = x.toString()
    
    for(var i = 0; i < num1.length; i++ ) {
        arr1.push(num1[i]);
      
    } 
    
   for(var i = 0; i < num1.length; i++ ) {
        arr2.push(arr1.pop());
       }

       if(arr2[arr2.length -1] === "-"){
           arr2.pop();
           arr2.unshift("-");
       }
       
       num1 = arr2.join("");
       return +num1
};

console.log(reverse(-321))