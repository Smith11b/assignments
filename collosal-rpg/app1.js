var matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [9, 8, 4]
]


for(i = 0; i < matrix.length; i++){
    for(f = 0; f < matrix[i].length; f++){
        matrix[i][f]= 0;
    }
}

console.log(matrix);


function speak(){
    console.log(this.name)
}

Person.prototype.speak = speak;