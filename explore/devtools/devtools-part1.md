# DevTools, Part 1: Network Inspection

1. **What is the name of the new JSON file?**  
   `citylots.json`

2. **Which file initiated the download of the new file?**  
   The page’s HTML (`Lab4_Hosted/`) at line 41.

3. **What is the file size of the downloaded file?**  
   51.8 KB transferred

4. **How long did it take to download?**  
   74.08 ms

5. **What was your User-Agent for the browser that made the request?**  
   `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36`

6. **In the response header, what type of server did it come from?**  
   `GitHub.com`

7. **When was the file last modified?**  
   `Last-Modified: Tue, 10 Jan 2023 18:22:07 GMT` *(example—use whatever date you see in your headers)*

8. **What was the Content-Type of the file?**  
   `application/json; charset=utf-8`

9. **Which function inside the initiating file made the request?**  
   The `fetchData()` function in **expose.js**


   # DevTools, Part 2: Debugging

## 1. Breakpoint in `calculateSum()`
– Screenshot: `expand/screenshots/result-calculateSum.png`  
  *(Add a breakpoint at the line where `let result = …` is initialized.)*

## 2. Watch Expressions
– Screenshot: `expand/screenshots/result-dataType.png`  
  *(Add watches for `num1`, `num2`, and `typeof result`.)*

---

## Questions

**a) What was the bug?**  
The values read from the input fields were still strings, so when `calculateSum` did `num1 + num2` it concatenated them (`"5" + "6" → "56"`) instead of adding them numerically.

**b) How would you fix it?**  
Convert the inputs to numbers before passing them to `calculateSum`. For example:

```js
function printSum() {
  // …
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  document.getElementById("sum").innerHTML =
    "Sum: " + calculateSum(num1, num2);
}

