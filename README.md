# js.eslint-config-bundle

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
