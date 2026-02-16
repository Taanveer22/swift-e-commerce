# JavaScript Questions

This document contains commonly asked JavaScript interview questions and concepts.

## Questions

### 1) What is the difference between `null` and `undefined`?

Null means someone has declared a variable and assigned that variable value direct null . Undefined means someone has declared a variable and not assigned any value . Null set intentionally and undefined set not intentionally.

### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

map() and forEach() both are js array methods . map() method returns something and forEach() method does not return anything .

### 3) What is the difference between `==` and `===`?

`==` means loose equality . It checks only data value . `===` means strict equality . It checks both data type and data value .

### 4) What is the significance of `async`/`await` in fetching API data?
`async`/`await` makes fetching api data easier by providing cleaner and readable syntax for asynchronous operations . It protects us from  callback hell and simplified error handling . `async` returns a promise and `await` waits for a promise . This is their working mechanism .

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Scope determines visibility in JavaScript . We can explain it easily by variable declaretion . If a variable is declared outside of any block or function,  we can access that variable from anywhere in a js program , then it's called global scope . If a variable is declared inside a js block , we can only access it from that particular block not any outside block, then it's called block scope . And if a variable is declared inside a function block , we can only access it from that function block not any outside block, then it's called function scope .
