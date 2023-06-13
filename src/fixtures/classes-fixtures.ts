import * as classes from '..';

export type TClassesFixtures = {
  [ClassKey in keyof typeof classes]: InstanceType<(typeof classes)[ClassKey]>;
};

export const classesFixtures = Object.entries(classes).reduce<TClassesFixtures>((result, [ClassKey, Class]) => {
  result[ClassKey] = async ({ page, baseURL }, use) => await use(new Class({ page, baseURL }));
  return result;
}, {} as TClassesFixtures);
