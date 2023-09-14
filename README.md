# js.eslint-config-bundle

<p>
    <a href="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml">
    <img src="https://github.com/daichangxin/js.eslint-config-bundle/actions/workflows/npm%20publish.yml/badge.svg" alt="build status"></a>
</p>

<p>
    <a href="https://www.npmjs.com/package/@eds-open/eslint-config-bundle">
    <img src="https://img.shields.io/npm/v/@eds-open/eslint-config-bundle.svg?style=flat-square&colorB=51C838" alt="npm version"></a>
</p>

# Sample

## eslint

`.eslintrc.js`

Basic:

```
module.exports = {
    extends: ['@eds-open/eslint-config-bundle/libs/react'],
};

```

Without babel config:

```
module.exports = {
    extends: ['@eds-open/eslint-config-bundle/libs/react'],
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env'],
        },
    },
};

```

## prettiter

`.prettierrc.js`

Basic:

```
module.exports = require('@eds-open/eslint-config-bundle/libs/prettier');

```

With plugins:

```
const base = require('@eds-open/eslint-config-bundle/libs/prettier');

module.exports = {
    ...base,
    plugins: [require('prettier-plugin-tailwindcss')],
};

```
