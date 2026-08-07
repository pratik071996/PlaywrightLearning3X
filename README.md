# 🎯 Playwright Learning 3X — JavaScript Fundamentals

A hands-on, beginner-to-intermediate JavaScript fundamentals tutorial structured as progressive chapters. Each file is a self-contained `.js` example with explanatory comments — run them directly with Node.js.

## 📂 Chapter Overview

| Chapter | Topic | Files | Key Concepts |
|---------|-------|-------|--------------|
| **00** | Generative AI (placeholder) | — | Reserved for future GENAI topics |
| **01** | Hello World | 1 | `console.log`, first JS program |
| **02** | `let` Keyword | 1 | Block-scoped variables, loops |
| **03** | Identifiers & Comments | 4 | Naming rules, conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, Hungarian Notation), single/multi-line/JSDoc comments, interview Q&A |
| **04** | Literals | 6 | String, boolean, numeric literals; `null` vs `undefined`; decimal/binary/octal/hex; floating-point; BigInt; `NaN`, `Infinity` |
| **05** | Operators | 24 | Assignment, arithmetic, comparison (coercion gotchas), logical, string, ternary (single & nested), `typeof`, increment/decrement, nullish coalescing (`??`), interview-style IQ exercises |
| **06** | Statements | 3 | `if/else` conditional logic, nested `if/else`, multiple conditions (grading system) |
| **07** | Switch | 9 | `switch` statement basics, strict (`===`) comparison, switch grouping, real-world API status codes, interview-style IQ exercises |
| **08** | User Input | 4 | `readline` / `process.stdin`, Node.js UI interaction, `prompt()` in browser, `fs.readFileSync(0)` for stdin |
| **09** | Loops | 12 | `for` loop basics, `while` / `do-while` loops, `break` to exit, `while(true)` infinite loops, nested `for` loops, loop condition ranges |
| **10** | Arrays | 16 | Array literals & constructors, `at()`, `push`/`pop`/`shift`/`unshift`/`splice`, searching (`indexOf`, `includes`, `find`), iteration (`for...of`, `forEach`, `entries`), `map`/`filter`, sorting, slicing, destructuring |
| **11** | Functions | 12 | Function types (param/return combos), arrow functions, function expressions, template literals, IIFE, real-world examples |
| **12** | Fn Closure | 5 | Scope, closures, counters, retry/rate-limit trackers |
| **13** | Strings | 3 | String properties, `charAt`/`charCodeAt`, searching with `includes`/`startsWith`/`indexOf` |
| **HK** | HackerRank | 3 | HackerRank-style problem setup with `processData` and stdin/stdout boilerplate |

## 🚀 How to Use

```bash
# Run any file with Node.js
node "01_chapter_Javascript/01_HelloWorld.js"

# Or navigate to a chapter and run files sequentially
cd "05_chapter_Operator"
node 13_DataType.js
```

## 📝 Chapters Detail

### 00 — Generative AI *(placeholder)*
Empty directory reserved for future content on AI/GENAI topics.

### 01 — Hello World
Your starting point. A single `console.log` to confirm Node.js is working.

### 02 — `let` Concepts
Introduces **block-scoped variable declaration** with `let`, including usage inside `for` loops.

### 03 — Identifiers & Comments
- Valid/invalid identifier rules (letters, `$`, `_`, Unicode, no leading digits)
- All major naming conventions with examples
- Three comment styles: `//`, `/* */`, `/** */`
- Interview-style Q&A covering edge cases (reserved keywords, invalid characters, Unicode)

### 04 — Literals
- **String literals**: single/double quotes
- **Numeric literals**: decimal, binary (`0b`), octal (`0o`), hex (`0x`), exponential, numeric separators (`1_000_000`)
- **BigInt**: `123n` syntax
- **Special values**: `Infinity`, `-Infinity`, `NaN`, `null` vs `undefined` quirks
- The famous `typeof null === "object"` historical bug

### 05 — Operators *(largest chapter — 24 files)*
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Comparison**: `==` vs `===`, `!=` vs `!==`, `<`, `>`, with type coercion gotchas
- **Logical**: `&&`, `||`, `!`
- **String**: concatenation with `+`
- **Ternary/Conditional**: single ternaries (`22_Ternary.js`)
- **Nested Ternary**: multi-condition nested ternary (`28_Nested_Terny_Op.js`)
- **Interview Questions (IQ)**: HTTP status categorization, temperature checks, CI headless mode, environment URLs, SLA validation — covering basic (`23_IQ.js`, `24.IQ2.js`, `25_IQ3.js`, `26_IQ4.js`, `27.IQ5.js`) and nested ternary IQs (`29_IQ_NT.js`, `30_NT_IQ2.js`)
- **Increment/Decrement**: prefix (`++a`) vs postfix (`a++`), compound expressions (`32_Inc_Dec_Op.js`, `33_Ad_Incre.js`, `34_Incre_Part2.js`, `35_Decrement.js`)
- **Nullish Coalescing (`??`)**: default values for `null`/`undefined` (`36_Null_Coalescing.js`)
- **`typeof` operator**: including array/`null` quirks

### 06 — Statements
- **Basic `if/else`**: age check example (`37_IQ.js`)
- **Nested `if/else`**: age + drinking eligibility check (`38_IQ2.js`)
- **Multiple Conditions**: grade classification with `if/else if/else` using `&&` (`38_Multiple_Condition,JS`)

### 07 — Switch
- **`switch` basics**: block-scoped variables inside `case` blocks (`39_Switch.js`)
- **Strict comparison**: `switch` uses `===`, not `==` — `0` vs `false` gotcha (`40_IQ.js`)
- **Interview Questions**: switch-based logic exercises (`41_IQ2.js` through `47_IQ4.js`)
- **Real-world API testing**: mapping status codes to descriptive messages (`42_REAL_API_Testing.js`)
- **Switch grouping**: multiple `case` values mapping to the same output (`43_Switch_Group.js`)

### 08 — User Input
- **Node.js stdin**: reading user input via `process.stdin` / `readline` (`48_JS.js`)
- **Browser prompt**: using `prompt()` for browser-based UI interaction (`49_Node_UI.js`)
- **Interactive prompts**: accepting and processing user-provided values (`50_Prompt.js`)
- **`fs` stdin**: reading input synchronously with `fs.readFileSync(0, 'utf8')` + Ctrl+D (`51_Fs.js`)

### 09 — Loops
- **Motivation**: why loops exist — printing numbers 1–10 without repetition (`52_Loops.js`)
- **`for` loop basics**: INIT / CONDITION / INCREMENT structure, printing 0–9, odd/even detection with `if/else` inside the loop (`53_For_Loop.js`)
- **Increment in loops**: prefix (`++a`) vs postfix (`a++`) recap with an expression table (`54_Increment.js`)
- **Loop condition ranges**: comparing `i < 10`, `i <= 10`, and `i = 1` start values with a `somya` counter variable (`55_For_Loops.js`)
- **`for` loop variations**: infinite loops, unreachable conditions, and a conditional-gift example with `if/else` (`56_For_Loops2.js`)
- **`while` loop**: equivalent `for` vs `while` syntax, printing 0–9 (`57_While.js`)
- **`while` with a counter**: retry/attempt patterns with a fixed limit (`58_While.js`)
- **`while` with `<=`**: counting 1–10 with a named variable (`59_While3.js`)
- **`while(true)` + `break`**: infinite loop exited via `break` when `age > 10` (`60_While_VS_For.js`)
- **`do-while`**: runs the body at least once before checking — retry pattern (`61_Do_While.js`)
- **`do-while` vs `while`**: a `do-while` executes even when the condition starts false (`62_Do_While_VS_While.js`)
- **Nested `for` loops**: inner loop runs fully for each outer iteration — prints a 3×3 grid (`63_Nested_For_Loop.js`)

### 10 — Arrays
- **Basics**: creating arrays, `browsers[0]`, `.at(-1)` for negative indexing, `.length` (`64_Array.js`)
- **Indexing**: 0-based access, out-of-range → `undefined`, `.at()` with negatives, mixed-type arrays (`65_Array.js`)
- **Creation**: array literal vs `new Array()` constructor, `Array.of()`, `Array.from("hello")` (`66_Array_Creation.js`)
- **Access & modify**: `arr[i]`, `.at()`, assigning by index (`67_Array_Access_Modify.js`)
- **Add/remove**: `push`/`pop` (end), `unshift`/`shift` (front), `splice` (insert/delete in the middle) (`68_Array_Add_Remove.js`)
- **Real-world example**: a browser list — `pop`/`shift` mutations plus a `for` loop with `if` (`69_Array_Real.js`)
- **Searching**: `indexOf`, `lastIndexOf`, `includes` (`70_Array_Searching.js`)
- **IQ**: `find`, `findIndex`, `findLast`, `findLastIndex` for first/last matches (`71_IQ.js`)
- **Iteration**: classic `for`, `for...of` (values), `forEach`, `entries()` (index + value), `for...in` (keys) (`72_Array_Iterate.js`)
- **Transform**: `map` (same-size transform) and `filter` (keep matching items) (`73_Array_Transform.js`)
- **Sorting**: default lexicographic sort, numeric sort with comparator `(a,b) => a-b` / `b-a`, `reverse()` (`74_Sorting.js`)
- **Slicing**: `slice(start, end)` returns a new array without mutating, negative indexes (`75_Slicing.js`)
- **Concat & join**: `concat()`, spread `[...a, ...b]`, `join(" | ")` to string (`76_Array_Concat.js`)
- **Checking**: `Array.isArray`, `every` (all pass), `some` (at least one passes), ASI gotcha (`77_Array_Checking.js`)
- **Copying**: shallow copies via spread/`slice`/`Array.from`/`concat` vs reference alias (`78_Copy.js`)
- **Destructuring**: array destructuring, rest pattern `...rest`, default values, skipping holes, swapping without temp (`79_Destructuring.js`)

### 11 — Functions
- **Why functions**: avoiding repeated logic — a `getResult(score)` pass/fail helper (`78.Fn.js`)
- **Parameters**: `sayHello(name)` called with different names (`79_Fn.js`)
- **Type 1**: no params, no return — implicitly returns `undefined` (`80_Type1_Basic_Fn.js`)
- **Type 2**: params, no return — `greetByName(name)` (`81_Type2_Basic_Fn.js`)
- **Type 3**: no params, with return — returning strings and arrays (`82_Type3_Basic_Fn.js`)
- **Type 4**: params + return — `sumOfTwoNumbers(a, b)` (`83_Type4_Basic.Fn.js`)
- **Template literals**: placeholder file (`84_Template_Literal.js`)
- **Function expressions**: placeholder file (`85_Fn_Exp.js`)
- **Arrow functions**: placeholder file (`86_Fn_Arrow.js`)
- **Arrow functions**: concise `=>` syntax, no-param arrows, multi-line arrow with `if/else` (`87_Fn_Arrow.js`)
- **Real-world example**: placeholder file (`88_REAL.js`)
- **IIFE**: Immediately Invoked Function Expression — anonymous and arrow functions that run the moment they're defined (`89_Fn_IIFE.js`)
- **Spread & rest**: `...` unpacks an array when *calling* a function, packs arguments into an array when *declaring* — `hasError(...codes)` HTTP-code check (`90_Spread_Fn.js`)
- **`var` vs `let` vs `const`**: function scope vs block scope, re-declaration/re-assignment rules, `const` array mutation (`92_Var_Let_Const.js`)
- **Hoisting**: the two-phase mental model (memory creation → execution), `var` → `undefined`, function declarations hoisted with their body, arrow/function expressions not hoisted (`93.Hoisting.js`, `94_Var_Hoisting.js`, `95_Function_Hoisting.js`)
- **TDZ (Temporal Dead Zone)**: `let`/`const` exist but hold no value until their line runs — touching them throws `ReferenceError`; `typeof` also throws inside the TDZ (`96_Let_Hoisting.js`, `97_Var_TDZ.js`, `98_TDZ.js`, `101_Const_TDZ.js`)
- **Deep-dive notes**: markdown reference covering hoisting, TDZ, spread & rest, `var`/`let`/`const`, plus interview Q&A and a practice checklist (`102_Hoisting_TDZ.md`)

### 12 — Fn Closure
- **Scope**: placeholder for scope discussion (`104_Scope_Fn.js`)
- **Closure basics**: an inner function (`installBrowser`) capturing `name` from its outer function — `startBrowser()` returns the inner function, which still remembers `name` after the outer call finished (`105_Closure.js`)
- **Closures remember**: `makeCounter()` returns an object of functions sharing one private `count` — increment/decrement/get keep updating the same value across calls (`106_Closure_Remembers.js`)
- **Real-world retry tracker**: `maxRetryTRacker(max)` returns a `tryAgain(testName)` that counts attempts and stops after `max` — Playwright-style retry logic (`107_Fn_Closure_REAL.js`)
- **Rate limiter**: `makeRateLimiter(limit)` returns a `check()` that only lets the first `limit` calls through (`108_Fn_Simple.js`)

### 13 — Strings
- **String basics**: placeholder file (`109_String.js`)
- **Properties & access**: `.length`, bracket indexing `str[0]`, `.at(-1)` negative indexing, `charAt()`, `charCodeAt()` (ASCII — `A` is 65) (`110_String_Fn.js`)
- **Searching & checking**: `includes()`, `startsWith()` / `endsWith()`, `indexOf()` / `lastIndexOf()` on a real API login URL (`111_Str_Searching.js`)

### HackerRank
- **Hello World**: HackerRank problem boilerplate with `processData()` function, stdin accumulation, and `process.stdin.on("end")` trigger (`Hello_World.js`)
- **If/Else Statement**: empty problem skeleton for the HackerRank if/else challenge (`If_Else_Statement.js`)
- **Print The Input**: `processData` that echoes the raw stdin input back to stdout (`Print_The_Input.js`)

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- A code editor (VS Code recommended)

## 📄 License

MIT
