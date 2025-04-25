import {Page, expect } from '@playwright/test'

export class Products {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async addProductToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await expect(this.page.locator('[id="shopping_cart_container"]')).toHaveText('1')
    }

    async removeProductToCart() {
        await this.page.locator('[id="shopping_cart_container"]').click()
        await this.page.locator('[id="remove-sauce-labs-backpack"]').click()
        await expect(this.page.locator('[id="shopping_cart_container"]')).toHaveText('')
    }

    async finishCheckout() {
        await this.page.locator('[id="shopping_cart_container"]').click()
        await this.page.locator('[id="checkout"]').click()
        await this.page.getByPlaceholder('First Name').fill('Lucas Gaspar')
        await this.page.getByPlaceholder('Last Name').fill('Lima')
        await this.page.getByPlaceholder('Zip/Postal Code').fill('12345678')    
        await this.page.locator('[id="continue"]').click()
        await this.page.locator('[id="finish"]').click()
        await expect(this.page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible()
    }
}