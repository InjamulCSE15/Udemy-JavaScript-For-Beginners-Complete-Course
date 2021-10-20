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