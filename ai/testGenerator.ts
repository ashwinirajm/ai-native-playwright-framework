export async function generateTest(
    userPrompt: string
): Promise<string> {

    console.log('\n Generating AI test case...\n');

    // Simulated AI generation
    if (
        userPrompt.toLowerCase().includes('add product')
    ) {

        return `
        import { test, expect } from '@playwright/test';

        test('AI generated add to cart test', async ({ page }) => {

            await page.goto('https://www.saucedemo.com');

            await page.locator('[data-test="username"]')
                .fill('standard_user');

            await page.locator('[data-test="password"]')
                .fill('secret_sauce');

            await page.locator('[data-test="login-button"]')
                .click();

            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
                .click();

            await expect(
                page.locator('.shopping_cart_badge')
            ).toContainText('1');
        });
        `;
    }

    return `
    No suitable AI test generation available.
    `;
}