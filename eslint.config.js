import { config as base } from './libs/index.js';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*'],
    },
    // {
    //     rules: {
    //         'import-x/extensions': 'off',
    //     },
    // },
];
export default config;
