// function matrix(n){
//     const results = [];
//     for(let i = 0; i < n; i++){
//         results.push([]);
//     }

//     let counter = 1;
//     let startCol = 0;
//     let startRow = 0;
//     let endRow = n - 1;
//     let endCol = n - 1;

//     while(startCol <= endCol && startRow <= endRow){
//         // Make the top row
//         for(let i = startCol; i <= endCol; i++){
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;

//         //right colomng

//         for(let i = startRow; i <= endRow; i++){
//             results[i][counter] = counter;
//             counter++
//         }
//         endCol--;

//         for(let i = endCol; i >= startCol; i--){
//             results[endRow][i] = counter;
//             counter++;
        
//         }
//         endRow--;

//         for(let i = endRow; i >= startRow; i--){
//             results[i][startCol] = counter;
//             counter++;
//         }
//         startCol++;
//     }
// }

console.log(matrix(5));


function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;
  }


  var merge = function(nums1, m, nums2, n) {
    nums1.concat(nums2);
    nums1.sort();
    
    for(char of nums1){
        if(char === 0){
            nums1.shift();
        }
    }
    
};