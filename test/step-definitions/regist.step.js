const { Given, When, Then } = require('@wdio/cucumber-framework');
const RegistPage = require('../pageobjects/regist.page.js');
const Page = require('../pageobjects/page.js');

Given(/^I open Kasiraja website and click the Daftar link$/, async () => {
    await Page.open('/'); 
    await RegistPage.clickDaftar();
});

When(/^I fill in (.*) and (.*) and (.*)$/, async (namaToko, email, password) => {
    await RegistPage.daftar(namaToko, email, password);
});

When(/^I click daftar button$/, async () => {
    await RegistPage.clickOnDaftarButton();
});

Then(/^I should be redirected to login page$/, async () => {
    await RegistPage.assertLoginUrl();
});

Then(/^I should see a validation (.*)$/, async (expectedErrorMessage) => {
    await RegistPage.assertErrorMessage(expectedErrorMessage);
});
