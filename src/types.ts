import type { Linter } from 'eslint';

// Re-export ESLint types for convenience
export type { Linter };

// Common option types
export interface BaseConfigOptions {
    files?: string[];
    rules?: Linter.RulesRecord;
}

// JS Config Options
export interface JsConfigOptions extends BaseConfigOptions {
    globals?: Record<string, boolean | 'readonly' | 'writable' | 'off'>;
    ecmaVersion?: 'latest' | number;
    sourceType?: 'module' | 'script' | 'commonjs';
}

// TypeScript Config Options
export interface TypeScriptConfigOptions extends BaseConfigOptions {
    stylistic?: {
        semi?: boolean;
        indent?: number;
        quoteProps?: 'as-needed' | 'consistent' | 'consistent-as-needed' | 'always';
    };
}

// React Config Options
export interface ReactConfigOptions extends BaseConfigOptions {
    version?: string;
}

// Imports Config Options
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ImportsConfigOptions extends BaseConfigOptions {}

// Unused Config Options
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UnusedConfigOptions extends BaseConfigOptions {}

// Tailwind Config Options
export interface TailwindConfigOptions extends BaseConfigOptions {
    callees?: string[];
    config?: string;
}

// Bundle Config Options
export interface BundleConfigOptions {
    js?: JsConfigOptions | false;
    typescript?: TypeScriptConfigOptions | false;
    react?: ReactConfigOptions | false;
    imports?: ImportsConfigOptions | false;
    unused?: UnusedConfigOptions | false;
    tailwind?: TailwindConfigOptions | false;
}
