import {Page, expect } from '@playwright/test'

export class Login {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(process.env.BASE_URL || 'https://www.saucedemo.com')
        
    }

    async login(username, password) {
        await this.page.fill('standard_user', username)
        await this.page.fill('secret_sauce', password)
        
    }

    async submit(username, password) {

        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)

        await this.page.locator('[id="login-button"]').click()
    }

    async assertLogin() {
        await expect(this.page.getByText('Products')).toBeVisible()
    }

    async assertLoginError() {
        await expect(this.page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    }

    async assertLoginErrorBlocked() {
        await expect(this.page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible()
    }

}