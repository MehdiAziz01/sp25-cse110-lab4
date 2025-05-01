# DevTools, Part 2: Debugging

## 1. Breakpoint in `calculateSum()`
![Breakpoint on result initialization](../../expand/screenshots/result-calculateSum.png)

## 2. Watch Expressions
![Watching num1, num2, and typeof result](../../expand/screenshots/result-dataType.png)

## Questions

**a) What was the bug?**  
The inputs from the DOM (`.value`) were strings, so `num1 + num2` performed string concatenation (`"5" + "6" → "56"`) instead of numeric addition (`11`).

**b) How would you fix it?**  
Convert those input strings to numbers before adding:

```js
function calculateSum(num1, num2) {
  let result = Number(num1) + Number(num2);
  return result;
}
```

<img width="1920" alt="fix" src="https://github.com/user-attachments/assets/660e074c-7ef7-47ce-91b3-ff47b80cb2cf" />
