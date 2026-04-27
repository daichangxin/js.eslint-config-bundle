import { createImportsConfig } from './imports.config';
import { createJsConfig } from './js.config';
import { createReactConfig } from './react.config';
import { createTailwindConfig } from './tailwindcss.config';
import { createTypeScriptConfig } from './typescript.config';
import { createUnusedConfig } from './unused.config';
import type { BundleConfigOptions, Linter } from './types';

// Export all factory functions
export { createImportsConfig, createJsConfig, createReactConfig, createTailwindConfig, createTypeScriptConfig, createUnusedConfig };
export { config as importsConfig } from './imports.config';
export { config as jsConfig } from './js.config';
export { config as reactConfig } from './react.config';
export { config as tailwindConfig } from './tailwindcss.config';
export { config as typescriptConfig } from './typescript.config';
export { config as unusedConfig } from './unused.config';

// Export types
export type * from './types';

/**
 * Create a complete ESLint config bundle with all configs
 * @param options - Configuration options for each config type
 * @returns Combined ESLint config array
 */
export function createConfig(options?: BundleConfigOptions): Linter.Config[] {
    const configs: Linter.Config[] = [];

    // Add each config if not explicitly disabled
    if (options?.js !== false) {
        configs.push(...createJsConfig(options?.js));
    }

    if (options?.typescript !== false) {
        configs.push(...createTypeScriptConfig(options?.typescript));
    }

    if (options?.imports !== false) {
        configs.push(...createImportsConfig(options?.imports));
    }

    if (options?.unused !== false) {
        configs.push(...createUnusedConfig(options?.unused));
    }

    if (options?.react !== false) {
        configs.push(...createReactConfig(options?.react));
    }

    if (options?.tailwind !== false) {
        configs.push(...createTailwindConfig(options?.tailwind));
    }

    return configs;
}

// Default config export for backward compatibility
export const config: Linter.Config[] = createConfig();
