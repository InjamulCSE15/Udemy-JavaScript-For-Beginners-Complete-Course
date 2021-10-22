/*

Break   :   The break is used to terminate the loops and switch statement

Continue:   It forces to the next iteration of the loop to take place, skipping any code in between

*/

// Without break or continue statements:

document.getElementById('demo').innerText = "Without break or continue statements:"
var i;
var demoText = "";
for( i = 1; i <= 10; i++) {
   demoText += "i = "+ i + "<br>";
}

document.getElementById('demoText').innerHTML = demoText;

// With break statement:

document.getElementById('break').innerText = "With break statement:"
var a;
var breakText = "";
for( a = 1; a <= 10; a++) {
    if (a == 5) {
        break;
    }
    breakText +="a = "+ a + "<br>";
}

document.getElementById('breakText').innerHTML = breakText;

// With continue statement:

document.getElementById('continue').innerText = "With continue statement:"
var x;
var continueText = "";
for( x = 1; x <= 10; x++) {
    if (x == 5) {
        continue; // Skip 5 from the loop
    }
    continueText +="x = "+ x + "<br>";
}

document.getElementById('continueText').innerHTML = continueText;