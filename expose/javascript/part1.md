# Part 1: A Quick Introduction

## Question 1  
**What is printed by line 9?**  
Line 9 is the `console.log('values added: ', result);` inside the `if (add)` block. Since `num1 + num2` is `10 + 10`, it prints:

    values added:  20

## Question 2  
**What is printed by line 13?**  
Line 13 is the `console.log('final result: ', result);` after the `if/else`. Because `var result` is function-scoped (the same `result` remains in scope), it prints:

    final result:  20

## Question 3  
**Why should you not use `var`?**  
- `var` is **function-scoped**, not block-scoped, so declarations “leak” out of `{ … }` blocks and can collide with other variables.  
- `var` is **hoisted** (available before its declaration), which can lead to confusing bugs.  
- **Prefer** `let` and `const` because they are block-scoped and make your code’s behavior more predictable and safer.

## Question 4 *(with `let`)*  
**What is printed by line 9?**  
It still prints:

    values added:  20

## Question 5 *(with `let`)*  
**What is printed by line 13?**  
Because `result` was declared with `let` inside the `if` block and is out of scope here, it throws:

    ReferenceError: result is not defined

## Question 6 *(with `const`)*  
**What is printed by line 9?**  
Nothing—on line 7 the code tries to reassign `result` (declared with `const`), which immediately throws:

    TypeError: Assignment to constant variable.

so line 9’s `console.log` never runs.

## Question 7 *(with `const`)*  
**What is printed by line 13?**  
Also nothing, since the function has already thrown on the reassignment before reaching line 13.



