var aboutMe = {
    "name" : "Injamul Alam",
    "age" : 25,
    "profession"  : "Lecturer"
};

document.write('Name : ' +aboutMe.name);
document.write('<br> <br>');

document.write('Age : ' +aboutMe.age);
document.write('<br> <br>');

document.write('Profession : ' +aboutMe.profession);
document.write('<br> <br>');

var text = "";
var x;

document.write("After using for loop: <br>");

for(x in aboutMe) {
    text += aboutMe[x] + " , ";
}
document.write(text);