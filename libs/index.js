import { config as importsConfig } from './imports.js';
import { config as jsConfig } from './js.config.js';
import { config as reactConfig } from './react.config.js';
import { config as tailwindcss } from './tailwindcss.config.js';
import { config as typescriptConfig } from './typescript.config.js';
import { config as unusedConfig } from './unused.js';

const config = [
    ...jsConfig,
    ...typescriptConfig,
    ...tailwindcss,
    ...reactConfig,
    ...importsConfig,
    ...unusedConfig,
];
export { config };
