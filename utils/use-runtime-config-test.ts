import { useRuntimeConfig } from 'nitro/runtime-config';

export const useRuntimeConfigTest = () => {
  const { databaseUrl, overwritten, something } = useRuntimeConfig();

  return { databaseUrl, overwritten, something };
};
