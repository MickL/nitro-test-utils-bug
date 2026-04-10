import { defineConfig } from 'nitro-test-utils/config';

export default defineConfig(
  {
    resolve: { tsconfigPaths: true },
    test: {
      globalSetup: 'test/global-setup.ts',
    },
  },
  {
    global: {},
  },
);
