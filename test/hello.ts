import { $fetchRaw } from 'nitro-test-utils/e2e';
import { describe, expect, it } from 'vitest';

describe('api', () => {
  it('returns status ok', async () => {
    const { data, status } = await $fetchRaw('/hello');

    expect(status).toBe(200);
    expect(data).toEqual({ api: 'works!' });
  });
});
