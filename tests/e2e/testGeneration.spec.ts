import { test } from '@playwright/test';
import { generateTest } from '../../ai/testGenerator';

test('AI test generation demo', async () => {

    const generatedTest = await generateTest(
        'Add product to cart'
    );

    console.log(generatedTest);
});