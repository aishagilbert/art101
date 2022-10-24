/**
 * Author:  Aisha Gilbert and Jia Xu
 * Created: 10.21.2022
 * License: Public Domain
 */

 function nameSorter() {
   var userName = window.prompt("Hey! What's your name?");
   console.log("userName =", userName);
   var nameArray = userName.split('')
   console.log("nameArray =", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return(nameSorted);
 }

 // Output
 document.writeln("Here is your corrected and updated name in the system: ",
    nameSorter(), "</br>");
