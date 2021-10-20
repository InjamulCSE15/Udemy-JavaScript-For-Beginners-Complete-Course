/* 
Repeatedly executes statements as long as given condition is true:
============
Syntax:

while (condition) {
    conditional code....;
}

*/

var number = parseInt(prompt("Enter the number", "Here..."));
var temp = number;
var count = 0;

while (number > 0) {
    number = Math.trunc(number / 10);
    count++;
}

document.getElementById('whileLoop').innerText = "Your " +temp + " number has "+count + " digits.";