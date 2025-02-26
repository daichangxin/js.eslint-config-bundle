import jsLint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pretterPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import pluginImportConfig from './plugin-import-config.mjs';
import { compat } from './utils/compat.mjs';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    jsLint.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.extends('airbnb-base'),
    stylistic.configs['disable-legacy'],
    stylistic.configs.customize({
        semi: true,
        indent: 4,
        quoteProps: 'as-needed',
    }),
    pluginImportConfig,
    {
        name: 'typescript-eslint-config',
        plugins: {
            prettier: pretterPlugin,
            '@stylistic': stylistic,
        },
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        rules: {
            // Disable no-undef since TypeScript handles it
            'no-undef': 'off',

            // Note: you must disable the base rule as it can report incorrect errors
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': [
                'error',
                {
                    ignoreTypeReferences: true,
                },
            ],
        },
    },
    {
        rules: {
            // switch to typescript version rules
            // camelcase
            camelcase: 'off',
            'no-spaced-func': 'off',
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
            // no-unused-vars
            // Note: you must disable the base rule as it can report incorrect errors
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'none',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            // no-unused-expressions
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': ['error'],
            // no-useless-constructor
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': ['error'],
            // no-shadow
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            // TypeScript compilation already ensures that named imports exist in the referenced module
            'import/named': 'off',
            'no-bitwise': 'off',
            // https://typescript-eslint.io/rules/no-explicit-any/
            '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
            'arrow-body-style': 'off',
        },

        settings: {
            // Append 'ts' extensions to Airbnb 'import/resolver' setting
            'import/resolver': {
                node: {
                    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.native.js'],
                },
                typescript: {
                    alwaysTryTypes: true,
                },
            },
            // Append 'ts' extensions to Airbnb 'import/extensions' setting
            'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.native.js'],

            // use typescript parser for ts, tsx import
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
        },
    },
];
export default config;
