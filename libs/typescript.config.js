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
    {
        files: ['**/*.{ts,tsx,mts,cts,mjs}'],
        rules: {
            // Note: you must disable the base rule as it can report incorrect errors
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': [
                'error',
                {
                    ignoreTypeReferences: true,
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
                    leadingUnderscore: 'allowSingleOrDouble',
                },
                {
                    selector: 'variable',
                    modifiers: ['destructured'],
                    format: null,
                },
                {
                    selector: [
                        'classProperty',
                        'objectLiteralProperty',
                        'typeProperty',
                        'classMethod',
                        'objectLiteralMethod',
                        'typeMethod',
                        'accessor',
                        'enumMember',
                    ],
                    modifiers: ['requiresQuotes'],
                    format: null,
                },
                // SomeEnum.ENUM_VALUE
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE'],
                },
                // variableLike
                {
                    selector: 'variableLike',
                    format: ['camelCase', 'PascalCase'],
                    leadingUnderscore: 'allow',
                },
                // - const variable allows UPPER_CASE
                {
                    selector: 'variable',
                    modifiers: ['const'],
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                // Type, Interface
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
                // object literal
                {
                    selector: 'objectLiteralProperty',
                    format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
                },
                {
                    selector: 'objectLiteralProperty',
                    format: null,
                    // __html used in React is a sepcial case
                    filter: {
                        regex: '__html',
                        match: true,
                    },
                },
            ],
            // array type
            '@typescript-eslint/array-type': ['error'],
            // prefer type imports
            '@typescript-eslint/consistent-type-imports': ['error'],
            // https://typescript-eslint.io/rules/no-explicit-any/
            '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
        },
    },
];

export { config };