import { test, expect } from '@playwright/test';
import { analyzeFailure } from '../../ai/failureAnalyzer';

test('AI failure analysis demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')

    try {

        // Intentional failure
                await expect(page).toHaveURL(/dashboard/);

            } catch (error: any) {

                console.log('\n Test failed.\n');

                const analysis = await analyzeFailure(
                    error.message
                );

                console.log(analysis);
        }

    });