import tailwind from 'eslint-plugin-tailwindcss';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [...tailwind.configs['flat/recommended']];
export { config };
