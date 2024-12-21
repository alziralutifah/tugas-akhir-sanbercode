const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page.js');
const Page = require('../pageobjects/page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');


Given(/^I open KasirAja website$/, async () => {
    await Page.open('/');
})

When(/^I login with (.*) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should be redirected to the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl();
    await DashboardPage.logout();
})

Then(/^I should see an (.*)$/, async (errorMessage) => {
    await LoginPage.assertErrorMessage(errorMessage);
})

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });

