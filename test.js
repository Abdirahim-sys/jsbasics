//  day and time code
// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
// //

//  this function will print the current page
//  function print_the_current_page(){
//     window.print();
//  }


// this function rotates a code
// Define a function that animates the characters of a string
// Define a function that animates the characters of a string
function animate_string(id) {
    // Get the HTML element by its id
    var element = document.getElementById(id);

    // Access the text node inside the element (assuming no other children)
    var textNode = element.childNodes[0];
    
    // Extract the initial text content of the text node
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    setInterval(function () {
        // Move the last character to the beginning of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        textNode.data = text;
    }, 100);
} 

