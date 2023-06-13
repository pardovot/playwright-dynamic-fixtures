import { Locator } from '@playwright/test';
import { BaseClass } from 'base-class';

export class SomePage extends BaseClass {
  readonly getStarted: Locator;

  constructor(params) {
    super(params);
    this.pageRoute = '/';
    this.getStarted = this.page.getByRole('link', { name: 'Get started' });
  }

  async clickGetStarted() {
    await this.getStarted.click();
  }
}
