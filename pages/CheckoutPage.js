import{expect}from"@playwright/test";
export class CheckoutPage{
    constructor(page){
        this.page=page;
        this.checkoutButton=page.locator('[data-test="checkout"]');
        this.checkoutTitle=page.locator('[data-test="title"]');
        this.checkfirstNameInput=page.locator('[data-test="firstName"]');
        this.checklastNameInput=page.locator('[data-test="lastName"]');
        this.checkpostalCodeInput=page.locator('[data-test="postalCode"]');
        this.continueButton=page.locator('[data-test="continue"]');
        this.checkoutOverviewTitle=page.locator('[data-test="title"]');
        this.finishButton=page.locator('[data-test="finish"]');
        this.completeTitle=page.locator('[data-test="title"]');
        this.successMessage=page.locator('[data-test="complete-header"]');

    }

 async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async verifyCheckoutTitle(){
        await expect(this.checkoutTitle).toHaveText("Checkout: Your Information");
    }

    async verifyCheckoutOverviewTitle(){
        await expect(this.checkoutOverviewTitle).toHaveText("Checkout: Overview");
    }

 async fillCheckoutInformation(
    firstName,
    lastName,
    postalCode  
) {
    await this.checkfirstNameInput.fill(firstName);
    await this.checklastNameInput.fill(lastName);
    await this.checkpostalCodeInput.fill(postalCode);
}
 async clickContinueButton(){
        await this.continueButton.click();
    } 

    async clickFinishButton(){
        await this.finishButton.click();
    }

    async verifycompleteTitle(){
        await expect(this.completeTitle).toHaveText("Checkout: Complete!");
    }

    async verifysuccessMessage(){
        await expect(this.successMessage).toHaveText("Thank you for your order!");
    }

}