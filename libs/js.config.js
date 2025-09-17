import jsLint from '@eslint/js';
import globals from 'globals';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    jsLint.configs.recommended,
    {
        name: 'js-eslint-config',
        files: ['**/*.{js,jsx,mjs,cjs}'],
        languageOptions: {
            globals: {
                ...globals.builtin,
                ...globals.browser,
                ...globals.node,
                ...globals.worker,
                ...globals.es2020,
                ...globals.es2021,
                ...globals.esnext,
            },
        },
    },
    {
        rules: {
            'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        },
    },
];

export { config };
