import { classesFixtures, TClassesFixtures } from 'fixtures/classes-fixtures';
import { navigateToFixture, TNavigateFixture } from 'fixtures/navigate-to-fixture';

export type TFixtures = TClassesFixtures & TNavigateFixture;
export const fixtures = {
  ...classesFixtures,
  navigateTo: navigateToFixture,
};
