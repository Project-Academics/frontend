// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 1000,
            },
            proxy: {
                '/api': {
                    target: 'http://academia-backend:8080',
                    changeOrigin: true,
                },
            },
        },
    },
});
