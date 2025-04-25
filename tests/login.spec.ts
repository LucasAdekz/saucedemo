import { test, expect } from '@playwright/test';
import { Login } from '../support/actions/Login'; // Caminho ajustado para a classe Login
import { Products } from '../support/actions/product'; // Caminho ajustado para a classe Products

test('deve logar como administrador no site', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'

    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await login.assertLogin(); // Chama o método 'assertLogin' da classe Login 
});

test('Logar com senha errada', async ({ page }) => {
    const login = new Login(page);

    await login.visit(); 
    await login.submit('standard_user', 'secret_sauceerrada');
    await login.assertLoginError(); 
});

test('Adicionar produto ao carrinho', async ({ page }) => {
    const login = new Login(page); // Instancia a classe Login e passa o objeto 'page'
    const products = new Products(page); // Instancia a classe Products e passa o objeto 'page'
    await login.visit(); // Chama o método 'visit' da classe Login
    await login.submit('standard_user', 'secret_sauce');
    await products.addProductToCart()

})