# js.eslint-config-bundle

ESLint flat config bundle files.

<p>
    <a href="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml">
    <img src="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml/badge.svg" alt="build status"></a>
</p>

<p>
    <a href="https://www.npmjs.com/package/@eds-open/eslint-config-bundle">
    <img src="https://img.shields.io/npm/v/@eds-open/eslint-config-bundle.svg?style=flat-square&colorB=51C838" alt="npm version"></a>
</p>

## Usage

```bash
npm install @eds-open/eslint-config-bundle -D
```

## eslint

`eslint.config.mjs`

```mjs title='eslint.config.mjs'
import { config as base } from '@eds-open/eslint-config-bundle/libs/index.js';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts'],
    },
    {
        // cosmos files run independently
        files: ['**/*.fixture.tsx', '**/__mocks__/*'],
        rules: {
            'import/no-unused-modules': ['off'],
            'import/no-default-export': ['off'],
        },
    },
];

export default config;
```

## prettiter

`.prettierrc.cjs`

```cjs
const base = require('@eds-open/eslint-config-bundle/libs/prettier.cjs');

module.exports = {
    ...base,
};
```
