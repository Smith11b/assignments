var romanToInt = function(s) {
    var roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    
    let char = [...s];
    let result = 0;

    
    char.forEach((c, i) => {
        if(roman[char[i+ 1]] > roman[c]){
            result -= roman[c];
    
        } else {
            result += roman[c];
        }
    })
    
    return result
    };
    

    console.log(romanToInt("IV"));