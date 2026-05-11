import { test, expect, chromium } from '@playwright/test';

test('AI multi-user bot swarm simulation', async () => {

    const browser = await chromium.launch();

    // Create multiple users
    const user1 = await browser.newContext();
    const user2 = await browser.newContext();
    const user3 = await browser.newContext();

    const page1 = await user1.newPage();
    const page2 = await user2.newPage();
    const page3 = await user3.newPage();

    // Parallel execution
    await Promise.all([

        simulateUser(page1, 'User-1'),

        simulateUser(page2, 'User-2'),

        simulateUser(page3, 'User-3')
    ]);

    await browser.close();
});

async function simulateUser(page: any, user: string) {

    console.log(`\n ${user} starting session...\n`);

    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]')
        .fill('standard_user');

    await page.locator('[data-test="password"]')
        .fill('secret_sauce');

    await page.locator('[data-test="login-button"]')
        .click();

    await expect(page).toHaveURL(/inventory/);

    console.log(` ${user} logged in successfully`);

    // Simulate concurrent cart activity
    await page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    console.log(` ${user} added product to cart`);
}