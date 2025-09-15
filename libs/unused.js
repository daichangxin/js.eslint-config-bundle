import pluginUnusedImports from 'eslint-plugin-unused-imports';
/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    {
        name: 'extend/unused',
        plugins: {
            'unused-imports': pluginUnusedImports,
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
];
export { config };
