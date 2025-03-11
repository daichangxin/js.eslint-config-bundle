import importPlugin from 'eslint-plugin-import';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    {
        name: 'plugin-import-rules',
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.native.js'],
                },
                typescript: {
                    project: ['**/*.tsconfig.json', '**/tsconfig.json'],
                    alwaysTryTypes: true,
                },
            },
            'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.native.js'],
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
                'always',
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

            // // see https://github.com/airbnb/javascript/issues/2376#issuecomment-1250548375
            // 'import/no-extraneous-dependencies': [
            //     'error',
            //     {
            //         devDependencies: [
            //             'test.{ts,tsx}', // repos with a single test file
            //             'test-*.{ts,tsx}', // repos with multiple top-level test files
            //             '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
            //             '**/jest.config.ts', // jest config
            //             '**/jest.setup.ts', // jest setup
            //         ],
            //         optionalDependencies: false,
            //     },
            // ],
        },
    },
    {
        files: ['eslint.config.*'],
        rules: {
            'import/no-default-export': 'off',
            'import/no-unused-modules': 'off',
        },
    },
];
export { config };
