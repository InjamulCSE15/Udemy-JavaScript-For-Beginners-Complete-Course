/*
onchange    :	An HTML element has been changed
onclick	    :   The user clicks an HTML element
onmouseover	:   The user moves the mouse over an HTML element
onmouseout	:   The user moves the mouse away from an HTML element
onkeydown	:   The user pushes a keyboard key
onload	    :   The browser has finished loading the page

*/

function MouseOver() {
    document.images["img1"].src = "./images/pic1.jpg";
}

function MouseOut () {
    document.images["img1"].src = "./images/pic2.jpg";
}

function Load() {
    document.images["img1"].src = "./images/pic2.jpg";
}