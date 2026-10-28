import betterTailwind from 'eslint-plugin-better-tailwindcss';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    {
        name: 'better-tailwindcss/recommended',
        files: ['**/*.{js,jsx,ts,tsx,vue,svelte,astro,html}'],
        ...betterTailwind.configs.recommended,
        settings: {
            'better-tailwindcss': {
                detectComponentClasses: true,
            },
        },
    },
];
export { config };
