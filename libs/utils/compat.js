import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname, // optional; default: process.cwd()
    resolvePluginsRelativeTo: __dirname, // optional;
});

// eslint-disable-next-line import/no-unused-modules
export { compat };
