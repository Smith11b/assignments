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

function backSpace(){
    let value = document.getElementById("exp").value;
    value.substring(0, value.length)
}


function equals(){
    var expression = document.getElementById("exp").value;
    try{
        if(/\/\//.test(expression)) throw Error("Invalid Expression");
        var operation = eval(expression);
        document.getElementById("exp").value = eval(expression);
        
    } catch(err){
        alert(err.message)

    }
    console.log(operation);
    
    
    
}






