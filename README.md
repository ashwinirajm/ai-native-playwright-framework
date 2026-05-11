# AI-Native Playwright Framework

AI-assisted automation framework built with Playwright and TypeScript focused on self-healing locators, AI-driven failure analysis, synthetic test generation, and multi-user browser orchestration.

## Features

- AI self-healing locators
- AI failure analysis
- AI-generated test creation
- Synthetic test data generation
- Multi-user bot swarm simulation
- Parallel Playwright execution
- Intelligent fallback recovery

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Gemini API concepts
- GitHub Actions

## Project Structure

```text
ai-native-playwright-framework/
│
├── ai/
├── tests/
│   ├── e2e/
│   └── swarm/
├── screenshots/
├── playwright.config.ts
├── package.json
└── README.md
```

## Setup
```bash id="mini1"
npm install
npx playwright install chromium
```

## Create .env
```bash id="mini1"
GEMINI_API_KEY=your_api_key_here
```

## Run all tests:
```bash id="mini1"
npx playwright test
```

## Run HTML report:
```bash id="mini1"
npx playwright show-report
```

## Test Report







