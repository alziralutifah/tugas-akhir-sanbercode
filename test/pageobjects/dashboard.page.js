class DashboardPage {
    get dashboardPageUrl() {
        return 'https://kasiraja.ajikamaludin.id/dashboard';
    }

    async assertDashboardUrl() {
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }

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

module.exports = new DashboardPage();