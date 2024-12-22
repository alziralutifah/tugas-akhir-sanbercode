const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');
const Page = require('../pageobjects/page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');
const LogoutPage = require('../pageobjects/logout.page.js');


Given(/^I open KasirAja website$/, async () => {
    await Page.open('/');
})

When(/^I login with (.*) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should be redirected to the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl();
    await LogoutPage.logout();
})

Then(/^I should see an (.*)$/, async (errorMessage) => {
    await LoginPage.assertErrorMessage(errorMessage);
})


