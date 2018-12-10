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

message1 = document.getElementById("message-1");
message2 = document.getElementById("message-2");
message3 = document.getElementById("message-3");
message4 = document.getElementById("message-4");


message1.innerText = "Hey how's it going?";
message2.innerText = "Pretty good how about you??";
message3.innerText = "Pretty good, want to hang?";
message4.innerText = "Hell yea!";



var clearButton = document.getElementById("clear-button")



clearButton.addEventListener('click', function(){
      message1.innerText = " ";
      message2.innerText = " ";
      message3.innerText = " ";
      message4.innerText = " ";
})


selectButton = document.getElementById("theme-drop-down");

selectButton.addEventListener("change", function(e){
      if(selectButton.value = "theme-one") {
            message1.style.backgroundColor = "blue";
            message2.style.backgroundColor = "brown";
            message3.style.backgroundColor = "blue";
            message4.style.backgroundColor = "brown";

      }
})


messageBox = document.getElementById("message-box");
send = document.getElementById("send");


send.addEventListener('click', function(e){
      e.preventDefault();
      var div = document.createElement("div");
      var message = document.getElementById("send-this").value;
      div.innerText = message;
      div.className = "message right";
      messageBox.appendChild(div)
})








