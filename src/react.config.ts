import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksAddons from 'eslint-plugin-react-hooks-addons';

import type { Linter, ReactConfigOptions } from './types';

export function createReactConfig(options?: ReactConfigOptions): Linter.Config[] {
    const defaultFiles = ['**/*.{jsx,tsx}'];
    const files = options?.files ?? defaultFiles;

    return [
        {
            name: 'react-recommended',
            files,
            ...reactPlugin.configs.flat.recommended,
            settings: {
                react: {
                    version: options?.version ?? 'detect',
                },
            },
        },
        {
            name: 'react-jsx-runtime',
            files,
            ...reactPlugin.configs.flat['jsx-runtime'],
        },
        {
            name: 'jsx-a11y-recommended',
            files,
            ...jsxA11yPlugin.flatConfigs.recommended,
        },
        {
            name: 'react-hooks-recommended',
            files,
            ...reactHooks.configs.flat.recommended,
        },
        {
            name: 'react-hooks-addons',
            files,
            ...reactHooksAddons.configs.recommended,
        },
        {
            name: 'react-rules',
            files,
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

                ...(options?.rules ?? {}),
            },
        },
    ];
}

// Default export for backward compatibility
export const config: Linter.Config[] = createReactConfig();
