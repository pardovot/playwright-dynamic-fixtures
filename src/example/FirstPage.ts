import { Locator } from '@playwright/test';
import { BaseClass } from 'base-class';

export class FirstPage extends BaseClass {
  readonly writingTests: Locator;

  constructor(params) {
    super(params);
    this.pageRoute = '/docs/intro';
    this.writingTests = this.page.getByRole('link', { name: 'Writing tests', exact: true });
  }

  async clickWritingTests() {
    await this.writingTests.click();
  }
}
