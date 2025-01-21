1. Explain the scope in javascript?
   Scope is a term that refers to the visibility and accessibility of variables, functions, and objects in a program.
    There are three types of scope,they are:
      * Global scope : A variable declared outside a function, becomes GLOBAL.
      * Function scope :Variables defined inside a function are not accessible from outside the function.
                        Variables declared with var, let and const are quite similar when declared inside a function.
      * Block scope : Block scope in JavaScript refers to the scope of variables and functions that are defined within a block of code, such as within a pair of curly braces {} . Variables and functions declared with let and const keywords have block scope.

2. What is a callback?
    A JavaScript callback is a function which is to be executed after another function has finished execution.

3. Explain context in javascript?
   JavaScript Execution Context is the environment in which JavaScript code is executed.
   There are two types of context,they are:
    * Global context : This is the default context created when a JavaScript script starts to run. It represents the global scope and handles all code that is not inside a function
    * Execution context : This context is created whenever a function is called, representing the function's local scope.

4. Explain lexical scope?
   lexical scope is the area where the variables and value that are accessable during the exceution of the code

5. What is scope chaining?
   In JavaScript, the scope chain is a set of rules that determines how variables and functions are accessed and used in a program. It's a hierarchical structure that lists the scopes available to the current scope, with the current scope at the beginning. 

6. Explain closure?
   A closure in JavaScript is a function that can access the variables of its parent function, even after the parent function has finished executing. Closures are created when a function is defined inside another function.

7. What is the difference between undefined and not defined in javascript?
   In JavaScript, "undefined" means a variable has been allocated memory but no value has been assigned to it, while "not defined" means a variable has not been declared or allocated memory.   

8. What is hoisting in javascript?
   Hoisting is a JavaScript feature that moves variable and function declarations to the top of their scope before code execution. This allows you to use variables and functions before they are declared. 

9. Explain spread and rest operator?
    * The spread operator is used to expand elements of an iterable  into individual elements. It’s particularly useful for tasks like copying arrays, merging arrays, and passing array elements as arguments to functions.   
    * The rest operator collects multiple elements and condenses them into a single array. It’s often used in function parameters to handle an indefinite number of arguments.

10. Explain 'this' keyword in javascript?
    In JavaScript, this keyword refers to the current object in context. Its value depends on how it’s used: in methods, it refers to the object; in global scope, it refers to the global object.

