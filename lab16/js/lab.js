// Author: Aisha Gilbert and Jia XU
// Date: 11/07/2022
// Email: aikgilbe@ucsc.edu jxu270@ucsc.edu

var domain = "https://xkcd.com/";
var linkEnd = "info.0.json";

function comicGen(number) {
    var URL = domain + comicNum + linkEnd;
    $.ajax({
        url: URL,
        type: "GET",
    dataType : "json",
    success: function(data) {
      $("#output").html("")
      var comicObj = data;
      $("#output").append('<button id="prev">Previous</button>');
      $("#output").append('<button id="next">Next</button>');
      $("#prev").click(function(){
          comicGen(comicObj.num - 1);
      });
      $("#next").click(function(){
          comicGen(comicObj.num - 1);
      });
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
