 axios.get("https://api.vschool.io/Mark/todo").then(function(res, req) {// get request, need to get data from todo api
   const div = document.getElementById("root"); // grab the div on the index.html and store it the div variable.
   const p = document.createElement("div"); // create a new div and store in the p variable. This div is not on the page yet. It's just in javascript
  p.innerText = res.data[0].title // the p div, add the data in the response in between the tags, so it desplays on the page.
  div.appendChild(p); // add the p div to the div that;s on the page.
});

 const arr = [
  {
    name: "mark",
    height: "short"
  },
  {
    name: "Mikey"
  },
  {
    name: "Luke"
  }
];


const newArr = arr.map(function(people){
    return people.name
})





const mark = arr.find(function(person){
    return person.name ==="mark"
})

console.log(mark)



