import isEmpty from 'lodash.isempty';
import { Page, PlaywrightTestOptions } from '@playwright/test';
import { navigateTo } from 'helpers/navigate-to';

type TBaseClassParams = {
  page: Page;
  baseURL: PlaywrightTestOptions['baseURL'];
  pageRoute: string;
};

export abstract class BaseClass<TPageRouteParams = {}> {
  protected readonly page: TBaseClassParams['page'];
  protected readonly baseURL: TBaseClassParams['baseURL'];
  pageRoute: string | ((routeParams?: TPageRouteParams) => string);

  protected constructor(params: TBaseClassParams) {
    this.page = params.page;
    this.baseURL = params.baseURL;
    this.pageRoute = params.pageRoute;
  }

  async visit(routeParams?: TPageRouteParams) {
    if (typeof this.pageRoute === 'function') {
      if (!routeParams || isEmpty(routeParams)) {
        console.warn('route params are missing or empty inside visit fn. Make sure you do it on purpose.');

        await navigateTo(this.page, this.baseURL, this.pageRoute());
        return;
      }
      await navigateTo(this.page, this.baseURL, this.pageRoute(routeParams));
      return;
    }
    await navigateTo(this.page, this.baseURL, this.pageRoute);
  }
}
