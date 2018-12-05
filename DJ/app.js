var square = document.querySelector("#square");

square.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "blue";
})


square.addEventListener("mousedown", function(e){
    e.target.style.backgroundColor= "red";
})
square.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor= "yellow";
})
square.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor= "green";
})


window.addEventListener("scroll", function(e){
    square.style.backgroundColor = "orange";
})


window.addEventListener("keyup", function(e) {
    if(e.keyCode === 82) {
        square.style.backgroundColor = "red";
    } else if(e.keyCode === 66) {
        square.style.backgroundColor = "blue";
    } else if(e.keyCode === 89) {
        square.style.backgroundColor = "yellow";
    } else if (e.keyCode === 71) {
        square.style.backgroundColor = "green";
    } else {
        return null;
    }
})