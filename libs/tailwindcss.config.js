import tailwind from 'eslint-plugin-tailwindcss';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...tailwind.configs['flat/recommended'],
    {
        name: 'tailwindcss-settings',
        files: ['**/*.{jsx,tsx}'],
        settings: {
            tailwindcss: {
                callees: ['classnames', 'clsx', 'ctl', 'cn'],
                config: 'tailwind.config.js',
            },
        },
    },
];
export { config };
