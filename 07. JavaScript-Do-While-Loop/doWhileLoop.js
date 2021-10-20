/*
Checks if condition at the end of the loop.
this loop guaranteed to execute at least one time.

Syntax:

do {
    conditional code...;
}while(condition);

*/

var actualPin = "5432";
var count = 0;
var pin;

do {
    pin = prompt("Enter your pin...", "1234");
    count++;
}while (pin != actualPin && count < 3);
if(pin == actualPin) {
    document.getElementById('doWhile').innerText = "Welcome User";
}else{
    document.getElementById('doWhile').innerText = "Account Locked."
}