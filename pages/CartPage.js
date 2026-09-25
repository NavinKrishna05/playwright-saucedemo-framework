import{expect} from '@playwright/test';

export class CartPage {

    constructor(page) {
        this.page = page;
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.cartPageTitle = page.locator('[data-test="title"]');
        this.cartItem = page.locator('[data-test="inventory-item"]');
        this.cartItemName = page.locator('[data-test="item-4-title-link"]');
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }

    async verifyPageTitle() {
          await expect(this.cartPageTitle).toHaveText('Your Cart');
    }

    async verifyCartItem() {
        await expect(this.cartItem).toBeVisible();
    }

    async verifyCartItemName() {
        await expect(this.cartItemName).toHaveText('Sauce Labs Backpack');
    }



}