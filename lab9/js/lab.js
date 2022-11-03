/**
 * Author:  Aisha Gilbert and Jia Xu
 * Created: 10.21.2022
 * License: Public Domain
 */

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML = "hi how are you";
new2El.innerHTML = "Nice to meet you";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "blue";
new2El.style.fontSize = "60px";
