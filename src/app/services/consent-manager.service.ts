import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieConsent } from '../models/cookie-consent';

@Injectable({
  providedIn: 'root',
})
export class ConsentManagerService {
  private cookieService = inject(CookieService);

  private consentCookieName = 'cookie-consent';

  public hasConsent(): boolean {
    return this.tryGetConsent() !== null;
  }

  public tryGetConsent(): CookieConsent | null {
    if (this.cookieService.check(this.consentCookieName)) {
      const text = this.cookieService.get(this.consentCookieName);
      try {
        const parsed = JSON.parse(text);
        if (
          parsed.preferencesAllowed !== undefined &&
          parsed.statisticsAllowed !== undefined &&
          parsed.marketingAllowed !== undefined
        ) {
          return parsed;
        }
      } catch {
        return null;
      }
    }
    return null;
  }

  public setConsent(
    preferencesAllowed: boolean,
    statisticsAllowed: boolean,
    marketingAllowed: boolean,
  ): void {
    const cookieConsent = new CookieConsent(
      preferencesAllowed,
      statisticsAllowed,
      marketingAllowed,
    );
    const serialized = JSON.stringify(cookieConsent);
    this.cookieService.set(this.consentCookieName, serialized, {
      path: '/',
      sameSite: 'None',
      secure: true,
      expires: 365,
    });
  }
}
