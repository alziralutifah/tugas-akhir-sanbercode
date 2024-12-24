const Page = require('../pageobjects/page.js');
const KategoriPage = require('../pageobjects/kategori.page.js');
const LoginPage = require('../pageobjects/login.page.js');
const LogoutPage = require('../pageobjects/logout.page.js');
const { Given, When, Then } = require('@wdio/cucumber-framework');
const DashboardPage = require('../pageobjects/dashboard.page.js');

Given(/^I am logged in to the application$/, async () => {
    await Page.open('/');
});

When(/^I have success login with valid credentials$/, async () => {
    await LoginPage.login("bakery@gmail.com", "qwerty123#");
});


Then(/^I should be redirected to the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl();
})

Then(/^I click on the category menu in the sidebar$/, async () => {
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

Then(/^I should see the new category (.*) in the table$/, async (nama) => {
    await KategoriPage.getCategoryRowByName(nama);
});

Then(/^The system displays an (.*)$/, async (errorMessage) => {
    await KategoriPage.assertErrorMessage(errorMessage);
});

Then(/^The category (.*) exist in the category table$/, async (oldCategory) => {
    await KategoriPage.getCategoryRowByName(oldCategory);
});

Then(/^I click the action button$/, async () => {
    await KategoriPage.clickActionButton();
});

Then(/^I choose ubah button$/, async () => {
    await KategoriPage.clickUbahButton();
});

Then(/^I update the category name to (.*)$/, async (newCategory) => {
    await KategoriPage.editCategory(newCategory);
});

Then(/^The category has been successfully changed$/, async () => {
    await KategoriPage.getCategoryRowByName();
});

Then(/^I click the delete button$/, async () => {
    await KategoriPage.clickDeleteButton();
});

Then(/^I confirm the deletion$/, async () => {
    await KategoriPage.confirmDeletion();
});

Then(/^The category has been successfully deleted$/, async () => {
    await KategoriPage.verifyCategoryNotInTable();
});

Then(/^I log out of the application$/, async () => {
    await LogoutPage.logout();  
});




