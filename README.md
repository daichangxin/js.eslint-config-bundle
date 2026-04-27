# js.eslint-config-bundle

ESLint flat config bundle files with TypeScript support.

<p>
    <a href="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml">
    <img src="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml/badge.svg" alt="build status"></a>
</p>

<p>
    <a href="https://www.npmjs.com/package/@eds-open/eslint-config-bundle">
    <img src="https://img.shields.io/npm/v/@eds-open/eslint-config-bundle.svg?style=flat-square&colorB=51C838" alt="npm version"></a>
</p>

## Installation

```bash
npm install @eds-open/eslint-config-bundle -D
# or
pnpm add @eds-open/eslint-config-bundle -D
```

## Usage

### Basic Usage (Default Bundle)

Use the default configuration that includes all configs:

```js
// eslint.config.js
import { config } from '@eds-open/eslint-config-bundle';

export default [
    ...config,
    {
        ignores: ['**/*.d.ts', 'dist/**'],
    },
];
```

### Custom Bundle with Options

Create a customized bundle using the factory function:

```js
// eslint.config.js
import { createConfig } from '@eds-open/eslint-config-bundle';

export default [
    ...createConfig({
        // Customize JS config
        js: {
            globals: { myGlobal: 'readonly' },
            rules: { 'no-console': 'warn' },
        },
        // Customize TypeScript config
        typescript: {
            stylistic: {
                semi: true,
                indent: 2,
            },
        },
        // Disable specific configs
        tailwind: false,
    }),
    {
        ignores: ['**/*.d.ts', 'dist/**'],
    },
];
```

### Individual Configs

Import and use individual configs:

```js
// eslint.config.js
import { 
    createJsConfig, 
    createTypeScriptConfig, 
    createReactConfig 
} from '@eds-open/eslint-config-bundle';

export default [
    ...createJsConfig(),
    ...createTypeScriptConfig({
        files: ['**/*.ts', '**/*.tsx'],
    }),
    ...createReactConfig({
        version: '18.0.0',
    }),
];
```

### Direct Config Imports

You can also import configs directly from their subpaths:

```js
import { createJsConfig } from '@eds-open/eslint-config-bundle/js';
import { createTypeScriptConfig } from '@eds-open/eslint-config-bundle/typescript';
import { createReactConfig } from '@eds-open/eslint-config-bundle/react';
```

## Available Configs

- `js` - JavaScript configuration
- `typescript` - TypeScript configuration with stylistic rules
- `react` - React and JSX configuration
- `imports` - Import sorting and organization
- `unused` - Unused imports detection
- `tailwindcss` - Tailwind CSS class validation
- `prettier` - Prettier configuration (not an ESLint config)

## TypeScript Support

This package is written in TypeScript and provides full type definitions. You'll get autocomplete and type checking for all configuration options.

```typescript
import type { BundleConfigOptions } from '@eds-open/eslint-config-bundle';

const options: BundleConfigOptions = {
    js: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    typescript: {
        stylistic: {
            semi: true,
            indent: 4,
        },
    },
};
```

## Prettier Configuration

```js
// prettier.config.js
import prettierConfig from '@eds-open/eslint-config-bundle/prettier';

export default prettierConfig;
```
