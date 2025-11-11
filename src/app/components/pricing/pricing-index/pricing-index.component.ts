import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { APP_URLS, AppUrls } from 'src/app/models/app-urls';

@Component({
  selector: 'app-pricing-index',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-index.component.html',
  styleUrl: './pricing-index.component.scss',
})
export class PricingIndexComponent {
  public stratosheetUrl: string;
  constructor() {
    const appUrls = inject<AppUrls>(APP_URLS);

    this.stratosheetUrl = appUrls.stratosheetUrl;
  }
}
