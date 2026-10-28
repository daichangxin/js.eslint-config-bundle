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
                ...globals.browser,
                ...globals.node,
                ...globals.es2025,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    {
        name: 'js-rules',
        files: ['**/*.{js,jsx,mjs,cjs}'],
        rules: {
            'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        },
    },
];

export { config };
