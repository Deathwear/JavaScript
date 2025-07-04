//------ Lec:24 (Immediately Invoked Function Expression) ------
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It is a design pattern that helps to avoid polluting the global scope.
(function() {
    console.log("I am an IIFE");
})();
// This function is executed immediately after it is defined, and it does not pollute the global scope. IIFE is often used to create a private scope for variables and functions, preventing them from being accessible from the global scope. This is particularly useful in JavaScript to avoid variable name conflicts and to encapsulate functionality.
// Example of using IIFE to create a private scope:
(function() {
    let privateVariable
    function privateFunction() {
        console.log("This is a private function");
    }
    privateVariable = "I am private";
    console.log(privateVariable);   


})();// In this example, `privateVariable` and `privateFunction` are not accessible from the global scope. They are encapsulated within the IIFE, preventing any potential conflicts with other variables or functions in the global scope. This is a common pattern used in JavaScript to create modules or libraries that do not interfere with the global namespace. IIFE can also accept parameters, allowing you to pass values into the function at the time of invocation:
(function(param) {
    console.log("I am an IIFE with a parameter: " + param);
})("Hello, IIFE!"); // This will log: "I am an IIFE with a parameter: Hello, IIFE!"
// In this example, the IIFE takes a parameter `param` and logs it to the console. This allows you to pass values into  the IIFE at the time of invocation, making it more flexible and reusable. IIFE is a powerful tool in JavaScript that helps to create private scopes, avoid global namespace pollution, and encapsulate functionality.
// In modern JavaScript, you can also use the `let` and `const` keywords to create block-scoped variables, which can help to avoid some of the issues that IIFE was originally designed to solve. However, IIFE is still a useful pattern for creating private scopes and encapsulating functionality, especially in older codebases or when working with libraries that do not support modern JavaScript features like `let` and `const`. It is a fundamental concept in JavaScript that every developer should be familiar with.

//using Arrow function syntax with IIFE
(() => {
    console.log("I am an IIFE using Arrow function syntax");
})();

//detailed (using parameters with Arrow in IIFE):
((name) => {
    console.log(`welcome ${name} to our website`);
})(`Aamir`); 

// This is an example of using the arrow function syntax to create an IIFE. The arrow function syntax is a more concise way to write functions in JavaScript. The arrow function syntax does not have its own `this` context, so it inherits `this` from th  e parent scope, which can be useful in certain scenarios.

// Using IIFE with parameters
(function(param1, param2) {
    console.log("I am an IIFE with parameters: " + param1 + ", " + param2);
})("Hello", "World");
// This example demonstrates how to use IIFE with parameters. You can pass values into the IIFE at the time of invocation, allowing you to create more flexible and reusable code. The parameters `param1` and `param2` are passed into the IIFE, and they can be used within the function body just like regular function parameters. This allows you to create IIFE that can accept different values each time they are invoked, making them more versatile and adaptable to different scenarios. It is a powerful feature of IIFE that enhances their usability in JavaScript development.
// By using IIFE, you can create a self-contained unit of code that can be easily reused and maintained. It allows you to define private variables and functions that are not accessible from the global scope, preventing potential conflicts with other code. This encapsulation of functionality is a key benefit of using IIFE in JavaScript development.
// IIFE can also be used to create self-executing functions that perform specific tasks without the need for explicit invocation. This can be useful in scenarios where you want to execute a piece of code immediately without having to call it later. It allows you to create reusable code that can be executed on demand, making it a versatile tool in JavaScript development.
