/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
    name: 'plugin-import-rules',
    settings: {
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.native.js'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.native.js'],

        // use typescript parser for ts, tsx import
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        // class member, allow single line member don't have empty line between each other
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // import ignore resolving asset files
        'import/no-unresolved': [
            'error',
            {
                caseSensitive: true,
                ignore: ['.png$', '.jpe?g$', '.gif$', '.webp$', '.md$'],
            },
        ],

        // import js(x), ts(x) files without extension
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        // prefer named export
        // why?:
        // named export is more friendly when you want to search for
        // all usages of a class or a function, it works better when
        // we want to refactor code with a large project
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',

        'import/no-unused-modules': [
            'error',
            {
                unusedExports: true,
                missingExports: false,
            },
        ],

        // sort imports in alphabetize
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],

        // max lines allowed
        'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['warn', { max: 80, skipBlankLines: true, skipComments: true }],

        // ignore use this check for class methods
        'class-methods-use-this': 'off',

        // allow param-reassign for props
        'no-param-reassign': ['error', { props: false }],
    },
};
export default config;
