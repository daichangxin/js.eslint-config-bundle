import jsLint from '@eslint/js';
import globals from 'globals';

import type { JsConfigOptions, Linter } from './types';

export function createJsConfig(options?: JsConfigOptions): Linter.Config[] {
    const defaultFiles = ['**/*.{js,jsx,mjs,cjs}'];
    const defaultGlobals = {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
    };

    return [
        jsLint.configs.recommended,
        {
            name: 'js-eslint-config',
            files: options?.files ?? defaultFiles,
            languageOptions: {
                globals: {
                    ...defaultGlobals,
                    ...(options?.globals ?? {}),
                },
                ecmaVersion: options?.ecmaVersion ?? 'latest',
                sourceType: options?.sourceType ?? 'module',
            },
        },
        {
            rules: {
                'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
                ...(options?.rules ?? {}),
            },
        },
    ];
}

// Default export for backward compatibility
export const config: Linter.Config[] = createJsConfig();
