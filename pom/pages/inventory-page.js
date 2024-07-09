const { expect } = require('@playwright/test');

exports.InventoryPage = class InventoryPage {
    /**
     * Inventory Page
     */
    constructor(page){
        this.page = page;
        this.title = page.locator('.title');
    }

    async validateTitle(){
        await expect(this.title).toHaveText('Products');
    }
}