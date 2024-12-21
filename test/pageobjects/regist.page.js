class RegistPage {
    get inputNamaToko () {
        return $('input[placeholder="nama toko"]');
    }

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get daftarButton () {
        return $('button[type="submit"]');
    }

    get successMessage() {
        return $('div[class="css-njbp03"]');
    }

    get errorMessage() {
        return $('div[class="chakra-alert css-qwanz3"]');
    }

    get linkDaftar() {
        return $('a[href="/register"]');
    }

    async clickDaftar() {
        await this.linkDaftar.click();
    }

    async daftar (namaToko, email, password) {
        if (namaToko) {
            await this.inputNamaToko.setValue(namaToko);  
        }
        if (email) {
            if (email==='random_email') {
                email = this.generateRandomEmail();
            }
            await this.inputEmail.setValue(email); 
        }
        if (password) {
            await this.inputPassword.setValue(password);
        }     
    }

    async clickOnDaftarButton() {
        await this.daftarButton.click();
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }

    get loginUrl() {
        return 'https://kasiraja.ajikamaludin.id/login';
    }

    async assertLoginUrl() {
        await expect(browser).toHaveUrl(this.loginUrl);
    }

    async assertSuccessMessage(expectedSuccessMessage) {
        await expect(this.successMessage).toBeExisting();
        await expect(this.successMessage).toHaveText(expectedSuccessMessage);
    }

    async getSuccessMessage() {
        return this.successMessage.getText();
    }

    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10); // Adds more randomness
        return `user${randomString}@example.com`; // Returns as a string
    };
}

module.exports = new RegistPage();
