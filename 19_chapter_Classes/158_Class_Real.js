// Real-world Page Object Model style class
class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#username";
        this.password = "#password";
        this.loginBtn = "#login";
    }

    async open(url) {
        await this.page.goto(url);
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }
}

class DashboardPage extends LoginPage {
    constructor(page) {
        super(page);
        this.title = ".dashboard-title";
    }

    async getTitle() {
        return await this.page.textContent(this.title);
    }
}

// fake page object, so it runs in plain Node.js
let fakePage = {
    goto: (url) => console.log("goto " + url),
    fill: (sel, val) => console.log("fill " + sel + " = " + val),
    click: (sel) => console.log("click " + sel),
    textContent: (sel) => "Welcome " + sel
};

(async () => {
    let dash = new DashboardPage(fakePage);
    await dash.open("https://app.example.com/login");
    await dash.login("pramod", "secret123");
    console.log(await dash.getTitle());
})();
