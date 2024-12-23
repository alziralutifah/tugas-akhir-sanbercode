const { Given, When, Then, Before, After } = require('@wdio/cucumber-framework');
const Page = require('../pageobjects/page.js');
const KategoriPage = require('../pageobjects/kategori.page.js');
const LoginPage = require('../pageobjects/login.page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');
const LogoutPage = require('../pageobjects/logout.page.js');

Before({tags: '@kategori'}, async () => {
    await Page.open('/');
    await LoginPage.login('bakery@gmail.com', 'qwerty123#');
});

Given(/^I am logged in to the application$/, async () => {

});

Given(/^I am on the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl();
});

When(/^I click on the category menu in the sidebar$/, async () => {
    await KategoriPage.clickCategoryMenu();
});

Then(/^I should be redirected to the category page$/, async () => {
    await KategoriPage.assertCategoryUrl();
});

// Given(/^I am on the category page$/, async () => {
//     await KategoriPage.assertCategoryUrl();
// });

Then(/^I click the tambah button$/, async () => {
    await KategoriPage.clickTambahButton();
});

Then(/^I fill in (.*) and (.*)$/, async (nama, deskripsi) => {
    await KategoriPage.fillCategoryForm(nama, deskripsi);
});

Then(/^I click the simpan button$/, async () => {
    await KategoriPage.clickSimpanButton();
});

// Then(/^I should see the notif success$/, async () => {
//     await browser.getAlertText();
// });

Then(/^I redirected to categori page$/, async () => {
    await KategoriPage.assertCategoryUrl();
});

Then(/^I should see the new category (.*) in the table$/, async (nama) => {
    await KategoriPage.getCategoryRowByName(nama);
});

Then(/^I should see the (.*)$/, async (errorMessage) => {
    await KategoriPage.assertErrorMessage(errorMessage);
});

Then(/^The category (.*) exist in the category table$/, async (nama) => {
    await KategoriPage.getCategoryRowByName(nama);
});

Then(/^I click the action button$/, async () => {
    await KategoriPage.clickActionButton();
});

Then(/^I choose ubah button$/, async () => {
    await KategoriPage.clickUbahButton();
});

Then(/^I edit the category name to (.*)$/, async (ubahNama) => {
    await KategoriPage.editCategory(ubahNama);
});

Then(/^The category name has been successfully changed to (.*)$/, async (ubahNama) => {
    await KategoriPage.getCategoryRowByName(ubahNama);
});









Then(/^I log out of the application$/, async () => {
    
});

After({tags: '@kategori'}, async () => {
    await LogoutPage.logout();  
});


