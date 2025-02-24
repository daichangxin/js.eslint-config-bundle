import reactConfig from './libs/react.config.mjs';
import tsConfig from './libs/typescript.config.mjs';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...reactConfig,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*'],
    },
];
export default config;
