import pluginUnusedImports from 'eslint-plugin-unused-imports';

import type { Linter, UnusedConfigOptions } from './types';

export function createUnusedConfig(options?: UnusedConfigOptions): Linter.Config[] {
    const config: Linter.Config = {
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
                    ignoreRestSiblings: true,
                },
            ],
            ...(options?.rules ?? {}),
        },
    };

    if (options?.files) {
        config.files = options.files;
    }

    return [config];
}

// Default export for backward compatibility
export const config: Linter.Config[] = createUnusedConfig();
