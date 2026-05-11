import { test, expect } from '@playwright/test';
import { healLocator } from '../../ai/locatorHealer';

test('AI self-healing locator demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    // Fill login form
    await page.locator('[data-test="username"]')
        .fill('standard_user');

    await page.locator('[data-test="password"]')
        .fill('secret_sauce');

    try {

        // Intentionally broken locator
        await page.locator('#wrong-login-button').click({ timeout: 2000 });

    } catch {

        console.log('\n Locator failed. Asking AI to heal...\n');

        // Capture page DOM
        const dom = await page.content();

        // Ask Gemini for healed locator
        let healedLocator = await healLocator(
            '#wrong-login-button',
            dom
        );

        // Cleanup Gemini formatting
        healedLocator = healedLocator
            .replace(/```/g, '')
            .replace(/typescript/g, '')
            .replace(/javascript/g, '')
            .replace(/"/g, '')
            .replace(/'/g, '')
            .trim();

        console.log('\n AI Suggested Locator:\n');
        console.log(healedLocator);

        // Retry with healed locator
        await page.locator(healedLocator).click();
    }

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    console.log('\n Self-healing flow completed successfully.\n');
});