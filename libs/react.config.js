import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksAddons from 'eslint-plugin-react-hooks-addons';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    {
        name: 'react-recommended',
        files: ['**/*.{jsx,tsx}'],
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        name: 'react-jsx-runtime',
        files: ['**/*.{jsx,tsx}'],
        ...reactPlugin.configs.flat['jsx-runtime'],
    },
    {
        name: 'jsx-a11y-recommended',
        files: ['**/*.{jsx,tsx}'],
        ...jsxA11yPlugin.flatConfigs.recommended,
    },
    {
        name: 'react-hooks-recommended',
        files: ['**/*.{jsx,tsx}'],
        ...reactHooks.configs['recommended-latest'],
    },
    {
        name: 'react-hooks-addons',
        files: ['**/*.{jsx,tsx}'],
        ...reactHooksAddons.configs.recommended,
    },
    {
        name: 'react-rules',
        files: ['**/*.{jsx,tsx}'],
        rules: {
            // allow non-dom to use autoFocus prop
            'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

            // prefer syntax (shorthand) mode for fragments
            'react/jsx-fragments': ['error', 'syntax'],

            // enforce self closed tags
            'react/self-closing-comp': 'error',

            'react/display-name': 'off',

            // react-hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            
            // prop-types checked by tsc in compile time
            'react/prop-types': 'off',

            // prefer destructuring in function parameters
            'react/destructuring-assignment': ['error', 'always'],
        },
    },
];

export { config };