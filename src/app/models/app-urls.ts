import { InjectionToken } from '@angular/core';

export const APP_URLS = new InjectionToken('APP_URLS');

export interface AppUrls {
  /** The url for the Stratosheet account application */
  accountUrl: string;
  /** The url for the main Stratosheet app */
  stratosheetUrl: string;
  /** The url where the documentation is hosted */
  helpUrl: string;
  /** The url where this app is hosted */
  hostedUrl: string;
}
