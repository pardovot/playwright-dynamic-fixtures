import { Page, PlaywrightTestOptions, test } from '@playwright/test';

export type TNavigateToParams = {
  path: Parameters<Page['goto']>[0];
  options?: {
    waitUntil?: Parameters<Page['goto']>[1]['waitUntil'];
    navigationDescription?: string;
  };
};

export type TNavigateToPublicFn = (
  path: TNavigateToParams['path'],
  options?: TNavigateToParams['options'],
) => Promise<void>;
export type TNavigateToPublicArgs = [TNavigateToParams['path'], TNavigateToParams['options']];

export const navigateTo = async (
  page: Page,
  baseURL: PlaywrightTestOptions['baseURL'],
  path: TNavigateToParams['path'],
  options: TNavigateToParams['options'] = { waitUntil: 'load' },
) => {
  const stepDescription = options.navigationDescription
    ? options.navigationDescription
    : `Navigate to ${baseURL + path}`;

  await test.step(stepDescription, async () => {
    await page.goto(path, { waitUntil: options.waitUntil });

    // Adds a URL annotation to the test report
    test.info().annotations.push({ type: 'URL', description: page.url() });
  });
};
