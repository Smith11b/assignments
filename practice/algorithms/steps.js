// var plusOne = function(digits) {
//     let digitsPlusOne = digits.join("");
//     console.log(Number(digitsPlusOne));
//     return digitsPlusOne.toString().split("");
    
    
// };


// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

var plusOne = function(digits) {
    let last = digits.length -1;     //last equals the last digit in digits
    for(i = last; i >= 0; i--){      // iterate throug the array starting with the last digit
        digits[i] += 1               // add one to the last digit
        if(digits[i] < 10){          // if the last digit is less than 9, we are done. return the array.
           return digits
        }
        else{
            if(i === 0){digits[i] = 0;   // otherwise, if theres one thing in to iterate through and it's 10 or more
                digits.unshift(1)}       // change it to zero and add 1 in front of it.
         else{
           digits[i-1] += digits[i] % 10;   //otherwise add the remainder of the current number to the digit to the left
             digits[i] = 0;                 //(this is equivilant to carrying the 1, 2, or whatever number it is.).
         }                                  //lastly change the the current number to zero as it goes over 9.
            
        }
    }
      return digits
  };

  console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))