import tailwind from 'eslint-plugin-tailwindcss';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const files = ['**/*.{js,jsx,ts,tsx}'];

const rawConfigs = Array.isArray(tailwind.configs?.['flat/recommended'])
    ? tailwind.configs['flat/recommended']
    : (tailwind.configs?.recommended ? [tailwind.configs.recommended] : []);

const recommendedConfigs = rawConfigs.map(cfg => ({
    ...cfg,
    files: cfg.files ?? files,
}));

const config = [
    ...recommendedConfigs,
    {
        name: 'tailwindcss-settings',
        files,
        settings: {
            tailwindcss: {
                callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva', 'tv'],
                config: {},
            },
        },
    },
];
export { config };
