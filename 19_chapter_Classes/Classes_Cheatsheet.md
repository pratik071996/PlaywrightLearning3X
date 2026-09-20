# JavaScript Classes & OOP — Complete Cheatsheet (SDET)

A **class** is a *blueprint* for making objects. Think of a cookie cutter (class) and the cookies (objects) — one cutter, many cookies. A class is not the thing itself; `new` is what actually builds the object.

```js
class Person {
    constructor(name) {
        this.name = name;   // this = the object being built
    }
    hello() {
        return "Hi " + this.name;
    }
}

let p = new Person("Pramod");
console.log(p.hello());       // 'Hi Pramod'
console.log(typeof Person);   // 'function'  ← classes are functions under the hood
```

---

## 1. Class Anatomy

| Part | What it is | Example |
|---|---|---|
| `class Name { }` | the blueprint | `class LoginPage {}` |
| `constructor(...)` | runs **once** when you call `new`, sets up fields | `constructor(page) { this.page = page }` |
| fields | properties on each object | `this.username = "#user"` |
| methods | functions on the object | `async login() { ... }` |
| `new Name(...)` | creates an instance | `let lp = new LoginPage(page)` |

⚠️ Only **one** constructor per class. You cannot overload it — use default parameters or an options object instead.

⚠️ `this` inside a method points to **whoever called it**. `let f = p.hello; f()` loses `this` → `TypeError`. Arrow-function class fields fix this: `hello = () => "Hi " + this.name`.

---

## 2. The Four Pillars (in plain words)

| Pillar | Plain-English meaning | How you do it |
|---|---|---|
| **Encapsulation** | keep data safe, expose only what's needed | private fields `#apiKey` |
| **Inheritance** | child reuses parent's stuff | `class B extends A` |
| **Polymorphism** | same method name, different behaviour | override `hello()` in child |
| **Abstraction** | hide messy details behind a clean method | `login()` hides 3 steps |

```js
class BaseTest {
    start() { console.log("start"); }
}
class LoginTest extends BaseTest {
    start() {           // override → child version runs
        super.start();  // optionally also run the parent version
        console.log("login setup");
    }
}
```

---

## 3. `super` — Talking to the Parent

| Call | When | Why |
|---|---|---|
| `super(args)` | **first line** of a child constructor | runs the parent constructor, sets up inherited fields |
| `super.method()` | inside an overridden method | run the parent's version too |

⚠️ Forget `super()` in a child constructor and every `this.` access throws `ReferenceError: Must call super constructor`.

⚠️ `super()` must come **before** any `this` usage — the object doesn't exist yet.

---

## 4. `this` — The Trickiest Part

| Situation | `this` is |
|---|---|
| Inside a method, called as `obj.method()` | `obj` ✅ |
| Method pulled out: `let f = obj.method; f()` | `undefined` (strict) ❌ |
| Arrow function inside a method | the method's `this` (inherited) ✅ |
| Static method | the class itself |
| `new` constructor | the brand-new object |

```js
class Counter {
    count = 0;

    // normal method → this is fragile
    inc() { this.count++; }

    // arrow field → this is locked to the instance (great for callbacks)
    incSafe = () => { this.count++; };
}

let c = new Counter();
let f = c.incSafe;
f();                 // works, count = 1
console.log(c.count);
```

**Rule of thumb for Playwright:** any method you pass to `setTimeout`, `.then()`, or an event listener should be an **arrow class field** so `this` stays correct.

---

## 5. Static

`static` members belong to the **class**, not the object.

```js
class Config {
    static env = "staging";          // class property
    static getEnv() { return Config.env; }
}

Config.getEnv();     // ✅ 'staging'
// new Config().getEnv();  ❌ TypeError — not on the instance
```

**Use it for:** constants, factories (`User.fromJSON()`), and helpers that don't need object data.

---

## 6. Private Fields `#`

A `#name` field can only be read/written **inside** the class body — the true way to encapsulate.

```js
class Wallet {
    #balance = 0;
    deposit(n) { this.#balance += n; }
    get balance() { return this.#balance; }   // read-only from outside
}

let w = new Wallet();
w.deposit(100);
console.log(w.balance);   // 100
// console.log(w.#balance); // ❌ SyntaxError outside the class
```

| Modifier | Visible where | Typical use |
|---|---|---|
| `name` (public) | everywhere | normal data |
| `#name` (private) | inside the class only | secrets, internal state |
| `static` | on the class name | constants, factories |

---

## 7. Getters & Setters

Methods that *look* like properties.

```js
class User {
    #age = 0;
    set age(v) {
        if (v < 0) throw new Error("bad age");
        this.#age = v;
    }
    get age() { return this.#age; }
}

let u = new User();
u.age = 30;            // calls the setter (no parentheses)
console.log(u.age);    // calls the getter
```

**Use it for:** validation on write, computed values on read. Great for QA assertions like `user.age`.

---

## 8. Class vs Object vs Function

| | Function | Object | Class |
|---|---|---|---|
| Hoisted? | ✅ declaration | — | ❌ (TDZ) |
| Callable without `new`? | ✅ | — | ❌ `TypeError` |
| `typeof` | `'function'` | `'object'` | `'function'` |
| Best for | behaviour | simple data | data + behaviour blueprint |

⚠️ Classes are **not hoisted** like function declarations — using one before its line throws `ReferenceError` (temporal dead zone, same as `let`).

---

## 9. Playwright Page Object Model (POM)

The #1 real use of classes in test automation — one class per page.

```js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#username";
        this.loginBtn = "#login";
    }
    async open(url) { await this.page.goto(url); }
    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.click(this.loginBtn);
    }
}

class DashboardPage extends LoginPage {
    constructor(page) { super(page); this.title = ".dashboard-title"; }
    async getTitle() { return await this.page.textContent(this.title); }
}

// in a test
let dash = new DashboardPage(page);
await dash.open("https://app.example.com/login");
await dash.login("pramod", "secret");
```

**Why POM wins:** selectors live in one place, tests read like plain English, and a UI change means editing one file — not fifty tests.

---

## 10. Common Mistakes

| Mistake | Error | Fix |
|---|---|---|
| No `super()` in child constructor | `ReferenceError` | add `super(...)` first |
| `this` before `super()` | `ReferenceError` | move `this` after `super()` |
| Calling class without `new` | `TypeError` | use `new Name()` |
| Using class before its line | `ReferenceError` (TDZ) | define above, or move usage down |
| `obj.staticMethod()` | `TypeError` | call on the class: `Name.staticMethod()` |
| Reading `#private` outside | `SyntaxError` | expose via a getter |
| Losing `this` in a callback | `TypeError: Cannot read ... of undefined` | use an arrow class field |

---

## 11. Quick SDET Recipe Card

```js
class ApiClient {
    static baseURL = "https://api.example.com";
    #token;

    constructor(token) { this.#token = token; }

    get authHeader() { return { Authorization: `Bearer ${this.#token}` }; }

    async get(path) {
        const res = await fetch(ApiClient.baseURL + path, { headers: this.authHeader });
        if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
        return res.json();
    }
}

let api = new ApiClient("abc123");
let user = await api.get("/users/1");
```

Covers it all: **static constant**, **private token**, **getter**, **async method**, **error throw**. That's a real-world class worth memorising.
