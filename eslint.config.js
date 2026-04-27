import { config as base } from './dist/index.js';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*', '**/node_modules/**/*', '**/libs/**/*'],
    },
    // {
    //     rules: {
    //         'import-x/extensions': 'off',
    //     },
    // },
];
export default config;
