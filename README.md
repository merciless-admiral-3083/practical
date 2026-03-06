# practical

Small JavaScript practice snippets demonstrating default parameters, logical operators, nullish coalescing, nested loops, and a simple FizzBuzz implementation.

## Files

- `one.js` — Defines `calculateTotal(price, deliveryFee = 50)` to show a function with a default parameter and logs example outputs.
- `two.js` — Defines `greetUser(name, greeting = "Hello")` to show default parameters and string concatenation, then logs example greetings.
- `three.js` — Defines `greet(name = "Guest")` and demonstrates how default parameters behave with `undefined`, `null`, and an empty string.
- `four.js` — Logs examples of JavaScript logical OR (`||`) and AND (`&&`) short-circuit behavior with falsy/truthy values.
- `five.js` — Compares `||` versus the nullish coalescing operator (`??`) using `0` and `null` to show the difference.
- `six.js` — Uses `message || "No message provided"` to supply a fallback value when the input is falsy (e.g., an empty string).
- `seven.js` — Uses nested `for` loops to print pairs of indices, illustrating basic looping structure.
- `eight.js` — Implements FizzBuzz from 1–20 using modulo checks and logs the expected output.