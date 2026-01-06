import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...tseslint.configs.recommended,
    stylistic.configs.customize({
        semi: true,
        indent: 4,
        quoteProps: 'as-needed',
    }),
    {
        name: 'typescript-eslint-config',
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            // 禁用 unused-vars，由 unused-imports 插件处理
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    {
        name: 'typescript-eslint-config-js-files',
        files: ['**/*.{js,jsx,mjs,cjs}'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
];

export { config };