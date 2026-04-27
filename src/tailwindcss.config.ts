import tailwind from 'eslint-plugin-tailwindcss';

import type { Linter, TailwindConfigOptions } from './types';

export function createTailwindConfig(options?: TailwindConfigOptions): Linter.Config[] {
    const defaultFiles = ['**/*.{jsx,tsx}'];
    const defaultCallees = ['classnames', 'clsx', 'ctl', 'cn'];

    return [
        ...(tailwind.configs['flat/recommended'] as any),
        {
            name: 'tailwindcss-settings',
            files: options?.files ?? defaultFiles,
            settings: {
                tailwindcss: {
                    callees: options?.callees ?? defaultCallees,
                    config: options?.config ?? 'tailwind.config.js',
                },
            },
            rules: {
                ...(options?.rules ?? {}),
            },
        },
    ];
}

// Default export for backward compatibility
export const config: Linter.Config[] = createTailwindConfig();
