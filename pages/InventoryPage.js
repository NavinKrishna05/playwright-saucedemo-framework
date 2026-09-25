import{expect} from '@playwright/test';

export class InventoryPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

    async verifyPageTitle() {
        await expect(this.pageTitle).toHaveText('Products');
    }
    
    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async verifyRemoveBackpackButton() {

   await expect(this.removeBackpackButton).toHaveText('Remove');
    }

    async removeBackpackFromCart() {
        await this.removeBackpackButton.click();
    }

    async verifyAddBackpackButton() {
        await expect(this.addBackpackButton).toHaveText('Add to cart');
    }



}