import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
const { resolve } = require('path')

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default {
    plugins: [pugPlugin(options, locals)],
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'another.html')
            }
        }
    }
}