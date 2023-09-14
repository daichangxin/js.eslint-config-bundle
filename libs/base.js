const typescriptEslint = require('./typescript');

module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier', require.resolve('./rules')],

    settings: Object.assign({}, typescriptEslint.settings, {
        // additional settings
    }),

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./typescript')],
        },
    ],
};
