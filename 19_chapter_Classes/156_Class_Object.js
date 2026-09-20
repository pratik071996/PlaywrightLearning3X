// Every object gets its own copy of the properties
class Browser {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }

    launch() {
        console.log(this.name + " launched, version " + this.version);
    }
}

let chrome = new Browser("Chrome", 120);
let firefox = new Browser("Firefox", 118);

chrome.launch();
firefox.launch();

// changing one object does not touch the other
chrome.version = 121;
console.log(chrome.version);
console.log(firefox.version);

// object properties are still dot/bracket accessible
console.log(chrome.name);
console.log(chrome["name"]);
