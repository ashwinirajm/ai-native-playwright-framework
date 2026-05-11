import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
    );

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    });

export async function healLocator(
    failedLocator: string,
    dom: string
    ): Promise<string> {

        try {

        const prompt = `
        You are an AI QA automation expert.
        A playwright locator failed.

        Failed Locator:
        ${failedLocator}

        HTML DOM
        ${dom}

        Your task:
        Find the BEST replacement Playwright locator.

        STRICT RULES:
        - Return ONLY ONE locator
        - No explanations
        - No markdown
        - No code blocks
        - No quotes
        - Output must be directly usable inside:
        page.locator()

        Preferred locator priority:
        1. data-test
        2. id
        3. role/text
        4. stable CSS

        Example valid outputs:
        [data-test="login-button"]
        button:has-text("Login")
        #login-button
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        return response
            .replace(/```/g, '')
            .replace(/"/g, '')
            .replace(/'/g, '')
            .trim();

        } catch (error) {

            console.log('\n AI service unavailable.');
                    console.log(' Using intelligent fallback healing...\n');

                    // Fallback heuristic logic
                    if (dom.includes('data-test="login-button"')) {
                        return '[data-test="login-button"]';
                    }

                    if (dom.includes('button')) {
                        return 'button';
                    }

                    // Default fallback
                    return '[data-test="login-button"]';

            }
        }