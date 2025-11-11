import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { openCookieConsentBottomSheet } from '../cookie-consent-sheet/cookie-consent-sheet.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private bottomSheet = inject(MatBottomSheet);

  public supportEmail = 'support@gracklesoft.com';
  public showCookieConsentDialog() {
    openCookieConsentBottomSheet(this.bottomSheet);
  }
}
