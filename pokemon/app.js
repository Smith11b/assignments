var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonData = xhttp.responseText;
        var data = JSON.parse(jsonData);
        var pokemon = data.objects[0].pokemon;
        postListitems(pokemon);
        
        
        // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "https://api.vschool.io/pokemon", true);
xhttp.send();



function postListitems(arr){
    list = document.getElementById("list");
    for(i = 0; i < arr.length; i++){
        var li = document.createElement("li");
        li.innerHTML = arr[i].name;
        list.appendChild(li);
    }
}