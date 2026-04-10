import type { TestProject } from 'vitest/node';

export async function setup(project: TestProject) {
  process.env.NITRO_OVERWRITTEN = 'is-overwritten';
}

export async function teardown() {}
