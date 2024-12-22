class LogoutPage {
    get profileIcon() {
        return $('div[class="css-0"]');
    }

    get logoutButton() {
        return $('button[data-index="2"]');
    }

    async logout () {
        await this.profileIcon.click();
        await this.logoutButton.click();
    }
}

module.exports = new LogoutPage();