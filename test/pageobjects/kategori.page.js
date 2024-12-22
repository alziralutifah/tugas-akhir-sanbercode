class KategoriPage {
    get sidebarCategoryMenu() {
        return $('a[href="/categories"]'); 
    }

    get categoryPageUrl() {
        return 'https://kasiraja.ajikamaludin.id/categories';
    }

    get categoryTable() {
        return $('table[role="table"]'); 
    }

    get categoryColumns() {
        return $$('table thead th'); 
    }

    async navigateToDashboard() {
        browser.url('/dashboard'); 
    }

    async clickCategoryMenu() {
        this.sidebarCategoryMenu.click(); 
    }

    async assertCategoryUrl() {
        await expect(browser).toHaveUrl(this.categoryPageUrl);
    }

    isOnCategoryPage() {
        return this.dashboardPageTitle.getText() === 'dashboard / kategori'; 
    }

    async getTableColumns(column1, column2) {
        await expect(this.categoryColumns).toHaveText(column1, column2);
    }
    
    async assertKategoriTitle() {
        await expect(this.categoryTable).getText();
    }

    get tambahButton() {
        return $('a[href="/categories/create"]'); 
    }

    get nameField() {
        return $('#nama'); 
    }

    get descriptionField() {
        return $('#deskripsi'); 
    }

    get simpanButton() {
        return $('button[class="chakra-button css-l5lnz6"]'); 
    }

    get successMessage() {
        return $('class="chakra-alert__desc css-zycdy9"'); 
    }

    get errorMessage() {
        return $('div[role="alert"]'); 
    }

    async clickTambahButton() {
        await this.tambahButton.click(); 
    }

    async fillCategoryForm(nama, deskripsi) {
        if (nama) {
            await this.nameField.setValue(nama);
        }
        if (deskripsi) {
            await this.descriptionField.setValue(deskripsi);
        }
    }

    async clickSimpanButton() {
        await this.simpanButton.click(); 
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }

    async getSuccessMessage() {
        return this.successMessage.getText();
    }

    async assertSuccessMessage(message) {
        await expect(this.successMessage).toHaveText(message);
    }

    get categoryRow() {
        return $('td[class="css-u3dlpe"]'); 
    }

    async getCategoryRowByName(nama) {
        await expect(this.categoryRow).toHaveText(nama);
    } 

    async getRowName() {
        return this.categoryRow.getText();
    }

    get actionButton() {
        return $('button[class="chakra-button chakra-menu__menu-button css-pu8osu"]'); 
    }   

    async clickActionButton() {
        await this.actionButton.click();
    }

    get ubahButton() {
        return $('a[data-index="0"]');
    }

    async clickUbahButton() {
        await this.ubahButton.click();
    }

    async editCategory(ubahNama) {
        await this.nameField.clearValue();
        if (ubahNama) {
            await this.nameField.setValue(ubahNama);
        }
    }
    

}

module.exports = new KategoriPage();
