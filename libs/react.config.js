import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksAddons from 'eslint-plugin-react-hooks-addons';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    jsxA11yPlugin.flatConfigs.recommended,
    reactHooks.configs['recommended-latest'],
    reactHooksAddons.configs.recommended,
    {
        name: 'react-eslint-config',
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
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
        },
    },
];

export { config };
