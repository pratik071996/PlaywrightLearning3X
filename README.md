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
| **HK** | HackerRank | 1 | HackerRank-style problem setup with `processData` and stdin/stdout boilerplate |

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

### HackerRank
- **Hello World**: HackerRank problem boilerplate with `processData()` function, stdin accumulation, and `process.stdin.on("end")` trigger (`Hello_World.js`)

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- A code editor (VS Code recommended)

## 📄 License

MIT
