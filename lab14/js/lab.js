// Author: Aisha Gilbert and Jia XU
// Date: 11/07/2022
// Email: aikgilbe@ucsc.edu jxu270@ucsc.edu

function sortingHat(str) {
  len = str.length;
  mod = len % 4 ;
  if (mod==0) {
    return "no prize :("
  }
  else if (mod==1) {
    return "YOU WON GIRL!!!"
  }
  else if (mod==2) {
    return "sadly, you have lost."
  }
  else if (mod==3) {
    return "hah, loser"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementbyId("input").value;
  var house = sortingHat(name);
  newText = "<p> Your results are... " + "</p>";
  document.getElementById("output").innerHTML = newText;
})
