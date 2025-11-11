export class CookieConsent {
  constructor(
    public preferencesAllowed: boolean = false,
    public statisticsAllowed: boolean = false,
    public marketingAllowed: boolean = false,
  ) {}
}
