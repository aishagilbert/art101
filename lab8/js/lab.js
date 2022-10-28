/**
 * Author:  Aisha Gilbert and Jia Xu
 * Created: 10.21.2022
 * License: Public Domain
 */

 function isAdded(x){
    var results = x + 9
    return results;
  }

// test function
console.log("What is the sum when 9 is added? ", isAdded(4));
console.log("What is the sum when 9 is added? ", isAdded(53));

array = [10, 13, 98, -16, 64]
console.log("My Array", array);

var result = array.map(isAdded);
console.log("Add 9 to the array:", result);

var result = array.map(function(x) {
  return x / 10;
})

console.log("What is the quotient when 10 is divided? ", result);
