class LoginPage {
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('button[type="submit"]');
    }

    get errorMessage() {
        return $('div[role="alert"]');
    }

    async login (email, password) {
        if (email) {
            await this.inputEmail.setValue(email);  
        }
        if (password) {
            await this.inputPassword.setValue(password);
        }     
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }

}

module.exports = new LoginPage();
