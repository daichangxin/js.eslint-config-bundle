import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            include: ['src/**/*'],
            outDir: 'dist',
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                'js.config': resolve(__dirname, 'src/js.config.ts'),
                'typescript.config': resolve(__dirname, 'src/typescript.config.ts'),
                'react.config': resolve(__dirname, 'src/react.config.ts'),
                'imports.config': resolve(__dirname, 'src/imports.config.ts'),
                'unused.config': resolve(__dirname, 'src/unused.config.ts'),
                'tailwindcss.config': resolve(__dirname, 'src/tailwindcss.config.ts'),
                'prettier.config': resolve(__dirname, 'src/prettier.config.ts'),
            },
            formats: ['es'],
            fileName: (format, entryName) => `${entryName}.js`,
        },
        rollupOptions: {
            external: [
                '@babel/eslint-parser',
                '@babel/eslint-plugin',
                '@eslint/eslintrc',
                '@eslint/js',
                '@stylistic/eslint-plugin',
                'eslint',
                'eslint-plugin-antfu',
                'eslint-plugin-import-x',
                'eslint-plugin-jsx-a11y',
                'eslint-plugin-react',
                'eslint-plugin-react-hooks',
                'eslint-plugin-react-hooks-addons',
                'eslint-plugin-simple-import-sort',
                'eslint-plugin-tailwindcss',
                'eslint-plugin-unused-imports',
                'globals',
                'typescript-eslint',
            ],
        },
        sourcemap: false,
        minify: false,
    },
});
