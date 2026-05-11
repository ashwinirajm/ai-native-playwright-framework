export async function analyzeFailure(
    errorMessage: string
    ): Promise<string> {

        console.log('\n Running AI Failure Analysis...\n');

        //Simulated AI reasoning
        if (errorMessage.includes('timeout')) {

            return `
            Root CAUSE:
            Element interaction timed out.console

            LIKELY ISSUE:
            Broken locator or slow-loading page

            SEVERITY:
            Medium

            SUGGESTED FIX:
            Add better wait strategy or self-healing locator fallback
            `;
            }

        if (errorMessage.includes('expect')) {

            return `
            ROOT CAUSE:
            Assertion validation failed.

            LIKELY ISSUE:
            Unexpected application behavior or incorrect expected state.

            SEVERITY:
            High

            SUGGESTED FIX:
            Review assertion logic and application flow.
            `;
            }

        return `

        ROOT CAUSE:
        Unknown automation failure.

        SEVERITY:
        Medium

        SUGGESTED FIX:
        Review logs and screenshots.
        `;

        }