function findUnique(str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        // If the last time this character is in this string is also the first time...
        //then the characher only shows up once in the string at that location,
        // therefore it is unique.
      if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
        unique += str[i];
      }
    }
    return unique;
  }
  
  console.log(findUnique('baraban'));
  console.log(findUnique('anaconda'));
  console.log(findUnique("base"));
  