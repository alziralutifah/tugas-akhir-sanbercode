const { Given, When, Then } = require('@wdio/cucumber-framework');
const RegistPage = require('../pageobjects/regist.page.js');
const Page = require('../pageobjects/page.js');

Given(/^I open Kasiraja website and click the Daftar link$/, async () => {
    await Page.open('/'); 
    await RegistPage.clickDaftar();
});

When(/^Input data (.*) and (.*) and (.*)$/, async (namaToko, email, password) => {
    await RegistPage.daftar(namaToko, email, password);
});

When(/^I click daftar button$/, async () => {
    await RegistPage.clickOnDaftarButton();
});

Then(/^The system be redirected to login page$/, async () => {
    await RegistPage.assertLoginUrl();
});

Then(/^The system displays a validation (.*)$/, async (expectedErrorMessage) => {
    await RegistPage.assertErrorMessage(expectedErrorMessage);
});
