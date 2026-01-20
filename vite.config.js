import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(
        __dirname,
        'mcpgateway/static/admin.js'
      ),

      external: [
        'marked',
        'DOMPurify',
        'htmx',
        'Alpine',
        'Chart',
        'CodeMirror',
      ],

      output: {
        dir: 'mcpgateway/static',
        entryFileNames: 'bundle.js',
        format: 'iife',
        name: 'AdminBundle',

        globals: {
          marked: 'marked',
          DOMPurify: 'DOMPurify',
          htmx: 'htmx',
          Alpine: 'Alpine',
          Chart: 'Chart',
          CodeMirror: 'CodeMirror',
        },
      },
    },

    outDir: 'mcpgateway/static',
    emptyOutDir: false,
    sourcemap: true,
  },
});
