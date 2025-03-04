import { config as cssConfig } from './css.config.js';
import { config as jsConfig } from './js.config.js';
import { config as reactConfig } from './react.config.js';
import { config as typescriptConfig } from './typescript.config.js';

const config = [
    ...jsConfig,
    ...typescriptConfig,
    ...cssConfig,
    ...reactConfig,
];
export { config };
