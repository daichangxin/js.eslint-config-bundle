import pluginAntfu from 'eslint-plugin-antfu';
import * as pluginImport from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import type { ImportsConfigOptions, Linter } from './types';

export function createImportsConfig(options?: ImportsConfigOptions): Linter.Config[] {
    const config: Linter.Config = {
        name: 'extend/import',
        plugins: {
            'simple-import-sort': simpleImportSort,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            'import-x': pluginImport as any,
            antfu: pluginAntfu,
        },
        rules: {
            'sort-imports': 'off',
            'import-x/order': 'off',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            'import-x/first': 'error',
            'import-x/newline-after-import': 'error',
            'no-duplicate-imports': 'off',
            'import-x/no-duplicates': 'error',
            'antfu/import-dedupe': 'error',

            'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

            'antfu/no-import-dist': 'error',
            'antfu/no-import-node-modules-by-path': 'error',

            ...(options?.rules ?? {}),
        },
    };

    if (options?.files) {
        config.files = options.files;
    }

    return [config];
}

// Default export for backward compatibility
export const config: Linter.Config[] = createImportsConfig();
