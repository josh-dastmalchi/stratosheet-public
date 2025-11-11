import { afterNextRender, Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { openCookieConsentBottomSheet } from '../cookie-consent-sheet/cookie-consent-sheet.component';
import { ConsentManagerService } from 'src/app/services/consent-manager.service';

@Component({
  selector: 'app-header-footer-layout',
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './header-footer-layout.component.html',
  styleUrl: './header-footer-layout.component.scss',
})
export class HeaderFooterLayoutComponent {
  constructor() {
    const consentManager = inject(ConsentManagerService);
    const bottomSheet = inject(MatBottomSheet);

    afterNextRender(() => {
      if (!consentManager.hasConsent())
        openCookieConsentBottomSheet(bottomSheet);
    });
  }
}
