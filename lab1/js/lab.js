/**
 * Author:    Aisha Gilbert and Jia Xu
 * Created:   10.21.2022
 * License: Public Domain
 */

 // Define Variable
 myTransport = ["Subaru Forester", "bus", "bike", "legs"];

 myMainRide= {
   make: "Subaru",
   model: "Forester",
   color: "silver",
   year: 2002,
   age: function() {
     return 2022 - age;
   }
 }

 // Output
 document.writeln("The modes of transportation I use: ", myTransport, "</br>");
 document.writeln("myMainRide: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
