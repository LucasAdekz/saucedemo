const { test: base, expect } = require('@playwright/test')

const { Login } = require('./actions/Login')
const { Products } = require('./actions/product')

const test = base.extend({
    page: async({page}, use) => {

        const context = page

        context['login'] = new Login(page)
        context['products'] = new Products(page)
        
        await use(context)
    },
})

export { test, expect }