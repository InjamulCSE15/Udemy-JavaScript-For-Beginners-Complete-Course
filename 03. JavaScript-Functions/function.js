/*

--> It is a set of statements perform specific task
--> Can be invoked whenever code  execution is required
--> Provides reusability 
--> Makes the code modular
--> Can pass values through parameters
--> Can return value from a function using 'return' keyword

*/

function sayHello () {
    document.querySelector('#sayHello').innerText = "Hello There!";
}

// Function with passing two value:

function sayHelloAgain (name, age) {

    if(name == "" || age == "")
    return;
    document.querySelector('#message').innerText = (name + ' is ' + age + ' years old.');
}

