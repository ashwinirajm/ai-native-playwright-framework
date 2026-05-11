import { test } from '@playwright/test';
import { generateTestData } from '../../ai/testDataGenerator';

test('AI synthetic test data generation demo', async () => {

    const invalidEmails =
        await generateTestData('invalid-email');

    console.log('\n Invalid Emails:\n');
    console.log(invalidEmails);

    const sqlPayloads =
        await generateTestData('sql-injection');

    console.log('\n SQL Injection Payloads:\n');
    console.log(sqlPayloads);

    const unicodeData =
        await generateTestData('unicode');

    console.log('\n Unicode Test Data:\n');
    console.log(unicodeData);
});