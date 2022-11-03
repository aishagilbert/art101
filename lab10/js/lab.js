// Author: Aisha Gilbert and Jia XU
// Date: 11/02/2022
// Email: aikgilbe@ucsc.edu jxu270@ucsc.edu
function nameSorter(nameInputted) {
  var userName = nameInputted;

  console.log("userName =", userName);
  var nameArray = userName.split('')

  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();

  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');

  console.log("nameSorted =", nameSorted);
  return(nameSorted);
}

var buttonEl = document.getElementById("mybutton");
var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function(){
  var enteredName = document.getElementById("username").value;
  var sortedName= nameSorter(nameEntered);
  outputEl.innerHTML=sortedName;
});
