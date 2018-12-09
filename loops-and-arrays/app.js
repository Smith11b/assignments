var evens = [];

function createEvenArray(highestNum) {
   
    for(var i = 1; i <= highestNum; i++) {
        if(i % 2 === 0) {
            evens.push(i);
        }
    }


}

createEvenArray(10);



function addOdds(evenArray) {
    var oddArray = [];
    for(var i = 0; i < evenArray.length; i++) {
        var odd = evenArray[i] + 1;
        oddArray.push(odd);
       
    }
   return evenArray.concat(oddArray);
}


console.log(addOdds(evens));