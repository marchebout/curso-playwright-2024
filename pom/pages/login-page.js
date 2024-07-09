const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    /**
     * Login class
     */
    constructor(page){
        this.page = page;
        this.user = page.locator('[data-test="username"]');
        this.pass = page.locator('[data-test="password"]');
        this.loginButton = page.getByRole('button', { name : 'LOGIN' });
        this.wrongmessage = page.locator('[data-test="error"]')
    }

    async submitLoginForm(user, pass) {
        await this.user.fill(user);
        await this.pass.fill(pass);
        await this.loginButton.click();
    }
}