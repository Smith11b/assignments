
function pyramid(n){
    const midpoint = Math.floor((2 * n -1) / 2);             //find the midpoint because the middle is always a hash
    for (let row = 0; row < n; row++){                      //iterate through the rows (from top to bottom)
        let level = '';                                    //start each row with a new string to be console logged
       for (let col = 0; col < (n * 2 - 1); col++){        // iterate through the colomns, you need n*2 -1 columns on each level
           if (midpoint - row <= col && midpoint + row >= col){  //if we're still within the left and right bounds and
               level+= '#';                                     // 
            } else {
                level += " ";
            }
        }
        console.log(level)
    }
}

pyramid(2);