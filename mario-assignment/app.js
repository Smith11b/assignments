var goomba = {
    tag : document.getElementById("goomba"),
    price : 5   
}
var cheeps = {
    tag : document.getElementById("cheep-cheep"),
    price : 11
}
var bombs = {
    tag : document.getElementById("bomb-omb"),
    price : 7
}
var total = document.getElementById("total");

var h1 = document.getElementById("total-h1");


total.addEventListener("click", function (e) {
    var pay = (+goomba.tag.value * +goomba.price) + (+cheeps.tag.value * +cheeps.price) + (+bombs.tag.value * +bombs.price);
    h1.innerText = "Mario made: " + pay + " Coins";
    
// Nice clean, organized, simple code! Try to get rid of some of the extra unnecessary empty lines, though.
    
})


