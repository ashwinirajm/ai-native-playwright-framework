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
│   ├── locatorHealer.ts
│   ├── failureAnalyzer.ts
│   ├── testGenerator.ts
│   └── testDataGenerator.ts
│
├── tests/
│   ├── e2e/
│   │   ├── login.spec.ts
│   │   ├── selfHealing.spec.ts
│   │   ├── failureAnalysis.spec.ts
│   │   ├── testGeneration.spec.ts
│   │   └── testDataGeneration.spec.ts
│   │
│   └── swarm/
│       └── multiUserSwarm.spec.ts
│
├── screenshots/
├── .github/workflows/
│
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
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
<img width="1091" height="773" alt="Test_Report" src="https://github.com/user-attachments/assets/2f07818f-67f7-4cc0-a5b0-eddabf0d7cc8" />

All test flows execution are available in screenshots








