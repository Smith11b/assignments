
var span = document.querySelector('span');
var button = document.querySelector('button');

var clicks = localStorage.getItem('clicks') || 0;

span.textContent = clicks;


window.addEventListener("click", function(){
    clicks++;
    localStorage.setItem('clicks', clicks)
    span.textContent = clicks;
   
})


button.addEventListener('click', function(){
    clicks = 0;
    localStorage.setItem('clicks', clicks)
    span.textContent = clicks;
})