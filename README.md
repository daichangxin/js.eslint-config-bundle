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

# Usage

> [!CAUTION]
> Keep an empty `.eslintrc.js` file in your project otherwise `import/no-unresolved` will not work, see https://github.com/import-js/eslint-plugin-import/issues/3079.

```bash
npm install @eds-open/eslint-config-bundle -D
```

## eslint

`eslint.config.mjs`

```mjs title='eslint.config.mjs'
import reactEslintConfig from '@eds-open/eslint-config-bundle/libs/react.config.mjs';
import tsEslintConfig from '@eds-open/eslint-config-bundle/libs/typescript.config.mjs';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...reactEslintConfig,
    ...tsEslintConfig,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*', 'eslint.config.mjs'],
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

`.prettierrc.js`

```js
module.exports = require('@eds-open/eslint-config-bundle/libs/prettier');
```

With plugins:

```js
const base = require('@eds-open/eslint-config-bundle/libs/prettier');

module.exports = {
    ...base,
    plugins: [require('prettier-plugin-tailwindcss')],
};
```
