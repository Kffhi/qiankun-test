import { defineConfig } from 'vite';
import vue3 from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env.SUB_ENTRY': JSON.stringify(
            process.env.NODE_ENV === 'development' ? `//localhost:3738/` : ''
        ),
    },
    base: './',
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: '~@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: /^~/,
                replacement: '',
            },
        ],
    },
    plugins: [
        vue3(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        port: 3737
    },
});
