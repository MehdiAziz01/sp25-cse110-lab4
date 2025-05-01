# Part 2: A Little More of a Challenge

## Question 1  
**What will happen at line 12 and why?**  
Line 12 is:
```js```
console.log(i); // prints 3

## Question 2  
**What will happen at line 13 and why?**  
Line 13 is:
```js
console.log(discountedPrice);
```
It prints:
```text
150
```
Because `discountedPrice` was declared with `var` (function-scoped), its final value after the loop (300 × (1 − 0.5) = 150) persists outside the loop.

## Question 3  
**What will happen at line 14 and why?**  
Line 14 is:
```js```
console.log(finalPrice); // prints 150

## Question 4  
**What will this function return? Give a brief explanation why. If the code causes an error, explain why.**  
It returns:
```text```
[50, 100, 150]

## Question 5  
**What will happen at line 12 and why?**  
Line 12 is:
```js```
console.log(i);
loop line throws: ReferenceError: i is not defined

## Question 6  
**What will happen at line 13 and why?**  
Line 13 is:
```js```
console.log(discountedPrice);
It throws: ReferenceError: discountedPrice is not defined

## Question 7  
**What will happen at line 14 and why?**  
Line 14 is:
```js```
console.log(finalPrice);
It prints: 150

## Question 8  
**What will this function return? Give a brief explanation.**  
It returns:
[50, 100, 150]

Because for each price in the array it computes `price * (1 - discount)` (100 → 50, 200 → 100, 300 → 150), rounds that value, pushes it into `discounted`, and finally returns the `discounted` array.

## Question 9  
**What will happen at line 11 and why?**  
Line 11 is:
```js```
console.log(i);
It throws a ReferenceError:

ReferenceError: i is not defined
Because i was declared with let inside the for loop, it’s block-scoped and not accessible outside that block.

## Question 10  
**What will happen at line 12 and why?**  
Line 12 is:
```js```
console.log(length);
It prints: 3
Because length was declared with const in the function scope (outside the loop), its value (prices.length, which is 3) remains accessible and is logged.

## Question 11  
**What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
It returns:  
[50, 100, 150]

Because the function calculates `prices[i] * (1 - discount)` for each element (100→50, 200→100, 300→150), pushes those values into the `discounted` array, and then returns that array.

## Question 12
**Given the above Object, write the notation for:**

a) `student.name`  
b) `student["Grad Year"]`  
c) `student.greeting();`  
d) `student["Favorite Teacher"].name`  
e) `student.courseLoad[0]`  

## 13. Arithmetic

- **a) `'3' + 2`**  
  - **Output:** `"32"`  
  - **Why:** `2` is coerced to `"2"`, then string-concatenated with `"3"`.

- **b) `'3' - 2`**  
  - **Output:** `1`  
  - **Why:** `"3"` is coerced to `3`, so `3 - 2 = 1`.

- **c) `3 + null`**  
  - **Output:** `3`  
  - **Why:** `null` → `0`, so `3 + 0 = 3`.

- **d) `'3' + null`**  
  - **Output:** `"3null"`  
  - **Why:** `null` → `"null"`, then `"3" + "null" = "3null"`.

- **e) `true + 3`**  
  - **Output:** `4`  
  - **Why:** `true` → `1`, so `1 + 3 = 4`.

- **f) `false + null`**  
  - **Output:** `0`  
  - **Why:** `false` → `0` and `null` → `0`, so `0 + 0 = 0`.

- **g) `'3' + undefined`**  
  - **Output:** `"3undefined"`  
  - **Why:** `undefined` → `"undefined"`, then `"3" + "undefined"`.

- **h) `'3' - undefined`**  
  - **Output:** `NaN`  
  - **Why:** `undefined` → `NaN`, so `3 - NaN = NaN`.

---

## 14. Comparison

- **a) `'2' > 1`**  
  - **Output:** `true`  
  - **Why:** `"2"` → `2`, and `2 > 1`.

- **b) `'2' < '12'`**  
  - **Output:** `false`  
  - **Why:** String comparison is lexicographical; `"2"` > `"1"`.

- **c) `2 == '2'`**  
  - **Output:** `true`  
  - **Why:** Loose `==` coerces `'2'` → `2`.

- **d) `2 === '2'`**  
  - **Output:** `false`  
  - **Why:** Strict `===` requires same type (number vs string).

- **e) `true == 2`**  
  - **Output:** `false`  
  - **Why:** `true` → `1`, so `1 == 2` is false.

- **f) `true === Boolean(2)`**  
  - **Output:** `true`  
  - **Why:** `Boolean(2)` → `true`; strict equality holds.

---

## 15. Difference between `==` and `===`

- `==` (loose equality) **performs type coercion** before comparing values.  
- `===` (strict equality) **does not coerce**; both **value** and **type** must match.
