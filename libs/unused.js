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
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
];
export { config };
