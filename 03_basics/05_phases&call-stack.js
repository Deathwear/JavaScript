// ----- Lec: 25 (Phases of Execution) -----
// JavaScript code execution goes through several phases, which are crucial for understanding how the code is executed and how variables and functions are handled. The main phases of execution in JavaScript are:
// 1. **Creation Phase**: In this phase, the JavaScript engine scans the code and creates memory space for variables and functions. It initializes variables with `undefined` and hoists function declarations to the top of their scope.
// 2. **Execution Phase**: In this phase, the JavaScript engine executes the code line by line. It evaluates expressions, executes function calls, and updates variable values as needed. The execution phase is where the actual logic of the code is processed.
// 3. **Call Stack**: The call stack is a data structure that keeps track of function calls in JavaScript. When a function is called, it is added to the top of the call stack, and when the function execution is complete, it is removed from the stack. This allows JavaScript to keep track of which function is currently being executed and return to the previous function when done.
// 4. **Event Loop**: The event loop is responsible for handling asynchronous operations in JavaScript. It allows the JavaScript engine to execute code, collect and process events, and execute queued sub-tasks. The event loop ensures that the main thread is not blocked by long-running tasks, allowing for a smooth user experience.
// 5. **Execution Context**: Each time a function is called, a new execution context is created. This context contains information about the function's scope, variables, and the value of `this`. The execution context is crucial for understanding how variables are accessed and how functions are executed in JavaScript.
// 6. **Global Execution Context**: The global execution context is the default context in which JavaScript code runs. It is created when the JavaScript engine starts executing the code and contains global variables and functions. There is only one global execution context in a JavaScript program.
// 7. **Function Execution Context**: Each time a function is called, a new execution context is created for that function. This context contains information about the function's parameters, local variables, and the value of `this` within the function.
// Understanding these phases of execution is essential for writing efficient and effective JavaScript code. It helps developers to understand how variables are scoped, how functions are executed, and how asynchronous operations are handled in JavaScript. By grasping these concepts, developers can write better code that is easier to maintain and debug.

// -----  (Call Stack) -----
// The call stack is a fundamental concept in JavaScript that helps to manage function calls and execution contexts. It is a data structure that keeps track of the order in which functions are called and executed. When a function is called, it is added to the top of the call stack, and when the function execution is complete, it is removed from the stack. This allows JavaScript to keep track of which function is currently being executed and return to the previous function when done.
// The call stack operates in a Last In, First Out (LIFO) manner, meaning that the last function added to the stack is the first one to be executed. This is similar to a stack of plates, where you can only add or remove the top plate.
// The call stack is crucial for understanding how JavaScript handles function calls, especially in the context of asynchronous operations. When a function is called, a new execution context is created, which contains information about the function's scope, variables, and the value of `this`. This execution context is pushed onto the call stack, and when the function execution is complete, it is popped off the stack.
// If a function calls another function, the new function's execution context is pushed onto the call stack, and the previous function's context is paused until the new function completes its execution. This allows JavaScript to manage nested function calls and maintain the correct order of execution.
// The call stack is also essential for error handling in JavaScript. If an error occurs during the execution of a function, the call stack can provide information about the sequence of function calls that led to the error. This is useful for debugging and understanding the flow of execution in a JavaScript program.
// ----- Lec: 27 (Call Stack Example) -----
// Let's look at an example to understand how the call stack works in JavaScript. Consider the following code snippet:
function firstFunction() {
  console.log("First function called");
  secondFunction();
}
function secondFunction() {
  console.log("Second function called");
  thirdFunction();
}
function thirdFunction() {
  console.log("Third function called");
}
firstFunction();
// In this example, we have three functions: `firstFunction`, `secondFunction`, and `thirdFunction`. When we call `firstFunction`, the following happens in the call stack:
// 1. `firstFunction` is pushed onto the call stack.
// 2. Inside `firstFunction`, we log "First function called" to the console.
// 3. `secondFunction` is called, so it is pushed onto the call stack.
// 4. Inside `secondFunction`, we log "Second function called" to the console.
// 5. `thirdFunction` is called, so it is pushed onto the call stack.
// 6. Inside `thirdFunction`, we log "Third function called" to the console.
// 7. `thirdFunction` completes its execution and is popped off the call stack.
// 8. Control returns to `secondFunction`, which completes its execution and is popped off the call stack.
// 9. Control returns to `firstFunction`, which completes its execution and is popped off the call stack.
// The final output in the console will be:
// ```
// First function called
// Second function called
// Third function called
// ```
// This example illustrates how the call stack manages function calls and execution contexts. Each function call creates a new execution context that is pushed onto the stack, and when the function completes, its context is popped off the stack. This allows JavaScript to maintain the correct order of execution and manage nested function calls effectively.
// Understanding the call stack is essential for debugging and optimizing JavaScript code, as it helps developers to trace the flow of execution and identify potential issues in their code. By keeping track of function calls and execution contexts, the call stack provides valuable insights into how JavaScript executes code and manages asynchronous operations.
