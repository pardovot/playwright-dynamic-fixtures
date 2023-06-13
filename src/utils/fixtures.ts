import { test as base } from '@playwright/test';

import { fixtures, TFixtures } from 'fixtures';

export const test = base.extend<TFixtures>(fixtures);
