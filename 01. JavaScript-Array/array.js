
// Writing Data:

    var fruits = new Array ("apple", "Banana", "Mango");

    // Or we can create an array with another way:

    var fruitsLike = new Array(5);
        fruitsLike[0] = "Orange";
        fruitsLike[1] = "Apple";
        fruitsLike[2] = "Pine-apple";
        fruitsLike[3] = "Mango";
        fruitsLike[4] = "Banana";


    var cars = ["BMW", "Toyota", "Mazda"];

// Reading Data: 

    console.log(fruits[0]); // It is the first element
    console.log(fruits[1]); // It is the second element
    console.log(fruits[2]); // It is the third element
    
    //This is not include in the course.
    
    var textFruits = "";
    for (var x = 0; x <fruits.length; x++) {
        textFruits += fruits[x] + "<br> ";
    }
    
    document.getElementById('fruits'). innerHTML = textFruits;
    
    var textFruitsLike = "";
    for (var x = 0; x <fruitsLike.length; x++) {
        textFruitsLike += fruitsLike[x] + "<br> ";
    }

    document.getElementById('fruitsLike'). innerHTML = textFruitsLike;
    