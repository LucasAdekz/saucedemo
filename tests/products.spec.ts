import { test, expect } from '@playwright/test';
import { Login } from '../support/actions/Login'; // Caminho ajustado para a classe Login
import { Products } from '../support/actions/product'; // Caminho ajustado para a classe Products

test('Adicionar produto ao carrinho', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()

})

test('Remover produto do carrinho', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()
    await products.removeProductToCart()
})

test('Finalizar compra', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()
    await products.finishCheckout()
})

test('Filtrar produtos do menor pro maior preço', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page);
    const filter = 'lohi' // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.filterProducts(filter)
})

test('Filtrar produtos de Z a A', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); 
    const filter = 'za'// Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.filterProducts(filter)
})

test('acessar os detalhes de um produto', async ({ page }) => {
    const login = new Login(page); 
    const products = new Products(page); 
    await login.visit(); 
    await login.submit('standard_user', 'secret_sauce');
    await products.productsDetails()
})

test('Adicionar 2 produtos ao carrinho', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()
})

test('validar persistencia do carrinho', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()
    await page.reload()
    await expect(page.locator('[id="shopping_cart_container"]')).toHaveText('2')
})

test('Remover item diretamente da página de inventário', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()
    await products.removeProductInventary()
})

