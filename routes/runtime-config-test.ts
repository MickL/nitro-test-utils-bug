import { defineHandler } from 'nitro';
import { useRuntimeConfig } from 'nitro/runtime-config';

export default defineHandler((event) => {
  const { databaseUrl, overwritten, something } = useRuntimeConfig();

  return { databaseUrl, overwritten, something };
});
