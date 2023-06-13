import { test } from "utils/fixtures";

test("some test", async ({ FirstPage }) => {
  await FirstPage.visit();
  await FirstPage.clickWritingTests();
});

test("some other test", async ({ SomePage }) => {
  await SomePage.visit();
  await SomePage.clickGetStarted();
});
