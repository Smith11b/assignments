var header = document.createElement("h1");
var p = document.createElement("p");

console.log(header);

var myBody = document.body;

console.log(myBody);



myBody.prepend(p);
myBody.prepend(header);

var name = "Marcus";

p.innerHTML=  "<span class = 'name'>" +name+ "</span>" + " wrote this";
header.innerText = "Javascript Made This";

header.class = "header";

header.setAttribute("class", "header");
p.setAttribute('class', 'header');









