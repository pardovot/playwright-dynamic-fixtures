import { navigateTo, TNavigateToPublicArgs, TNavigateToPublicFn } from 'helpers/navigate-to';

export type TNavigateFixture = {
  navigateTo: TNavigateToPublicFn;
};
export const navigateToFixture = async ({ page, baseURL }, use) =>
  await use((...args: TNavigateToPublicArgs) => navigateTo(page, baseURL, ...args));
