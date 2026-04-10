import { describe, expect, it } from 'vitest';
import { $fetchRaw } from 'nitro-test-utils/e2e';
import { useRuntimeConfigTest } from '~/utils/use-runtime-config-test.ts';

describe('runtime-config', () => {
  it('should load runtime config in handlers', async () => {
    const { data } = await $fetchRaw('/runtime-config-test');

    expect(data.databaseUrl).toBeDefined();
    expect(data.databaseUrl).toEqual('this-is-a-test');

    expect(data.overwritten).toBeDefined();
    expect(data.overwritten).toEqual('is-overwritten');

    expect(data.something).toBeDefined();
    expect(data.something).toEqual('else');
  });

  it('should load runtime config in utils', async () => {
    const data = useRuntimeConfigTest();

    expect(data.databaseUrl).toBeDefined();
    expect(data.databaseUrl).toEqual('this-is-a-test');

    expect(data.overwritten).toBeDefined();
    expect(data.overwritten).toEqual('is-overwritten');

    expect(data.something).toBeDefined();
    expect(data.something).toEqual('else');
  });
});
