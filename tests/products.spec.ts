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