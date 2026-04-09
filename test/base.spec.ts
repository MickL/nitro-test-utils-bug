import { $fetchRaw } from 'nitro-test-utils/e2e';
import { describe, expect, it } from 'vitest';

describe('api', () => {
  it('responds successfully', async () => {
    const { status } = await $fetchRaw('/healthz');

    expect(status).toBe(200);
  });

  it('responds successfully if route doesnt exists', async () => {
    const { status } = await $fetchRaw('/test');

    expect(status).toBe(404);
  });
});
