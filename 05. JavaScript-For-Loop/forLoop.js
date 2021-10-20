/*
Declaration:

for(initialization; condition; increment ) {
    conditional code...
}

*/
var text ="";
for(var x = 1; x <= 10; x++){
    text += "x = "+ x + "<br>";
}
document.getElementById('forLoop').innerHTML = text +"<br>";

// Odd numbers:
var odd = "";
for(var i = 1; i <= 10; i+=2){
    odd += "i = "+ i + "<br>";
}
document.getElementById('forLoopOdd').innerHTML = odd +"<br>";

// Even numbers:
var even = "";
for(var y = 1; y <= 10; y++){
    if( y % 2 == 0) {
        even += "y = "+ y + "<br>";
    }
}
document.getElementById('forLoopEven').innerHTML = even +"<br>";

// Sum of Even numbers:
var even = "";
var sum = 0;
for(var y = 1; y <= 10; y++){
    if( y % 2 == 0) {
        sum = sum + y;
        even += "y = "+ y + "<br>";
    }
}
document.getElementById('forLoopEvenSum').innerHTML = "Sum of even numbers from 1 to 10, Total: " +sum;

// Factorial: 

var a;
var product = 1;
var number = parseInt(prompt("Enter a number","1"));

for (a = 1; a <= number; a++) {
    product = product * a;
}

document.querySelector('#factorial').innerHTML = number+ " factorial is: " +product;