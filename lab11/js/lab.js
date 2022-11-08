// Author: Aisha Gilbert and Jia XU
// Date: 11/07/2022
// Email: aikgilbe@ucsc.edu jxu270@ucsc.edu

$("#challenges").append('<button id="buttonChallengeEl">Press me!</button>')

$("#problems").append('<button id="buttonProblemEl">Press me too!</button>')

$("#results").append('<button id="buttonResultEl">Press me three!</button>')


$('#buttonChallengeEl').click(function() {
  $('#challenges').toggleClass("special");
});

$('#buttonProblemEl').click(function() {
  $('#problems').toggleClass("kindofspecial");
});

$('#buttonResultEl').click(function() {
  $('#results').toggleClass("veryspecial");
});
