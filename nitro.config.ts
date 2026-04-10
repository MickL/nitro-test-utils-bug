import { defineConfig } from 'nitro';

export default defineConfig({
  serverDir: './',
  runtimeConfig: {
    databaseUrl: '',
    overwritten: '',
    something: 'else',
  },
});
