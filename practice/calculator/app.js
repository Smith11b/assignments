function insert(val){
    document.getElementById("exp").value +=val;
}
 
function insertPlus(){
    insert("+");
}

function insertMinus(){
    insert("-");
}

function insertMultiply(){
    insert("*");
}

function insertDivide(){
    insert("/");
}

function insertDecimal(){
    insert(".");
}

function clearInput(){
    document.getElementById("exp").value = " ";
}


function equals(){
    var expression = document.getElementById("exp").value;
    var operation = eval(expression)
    if(operation === undefined){
        
        alert("Sorry cannot compute, self destruction in 5... 4... 3... 2... 1...");
    } else {
        document.getElementById("exp").value = operation;
    }
}

