export async function generateTestData(
    type: string
): Promise<string[]> {

    console.log('\n Generating AI synthetic test data...\n');

    switch (type.toLowerCase()) {

        case 'invalid-email':

            return [
                'plainaddress',
                '@missingusername.com',
                'user@.com',
                'user@invalid',
                'verylongemailaddressssssssssssssssssssssssssssss@example.com'
            ];

        case 'sql-injection':

            return [
                "' OR '1'='1",
                "'; DROP TABLE users; --",
                "' OR 1=1 --",
                "\" OR \"\"=\""
            ];

        case 'unicode':

            return [
                'こんにちは',
                '🚀🔥💀',
                '测试数据',
                'данные',
                'مرحبا'
            ];

        default:

            return [
                'sample-data'
            ];
    }
}