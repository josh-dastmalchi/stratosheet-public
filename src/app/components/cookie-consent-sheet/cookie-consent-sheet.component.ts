import { afterNextRender, Component, signal, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CookieConsent } from 'src/app/models/cookie-consent';
import { ConsentManagerService } from 'src/app/services/consent-manager.service';

export function openCookieConsentBottomSheet(bottomSheet: MatBottomSheet) {
  return bottomSheet.open(CookieConsentBottomSheetComponent);
}

@Component({
  selector: 'app-cookie-consent-sheet',
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule,
  ],
  templateUrl: './cookie-consent-sheet.component.html',
  styleUrl: './cookie-consent-sheet.component.scss',
})
export class CookieConsentBottomSheetComponent {
  private consentManager = inject(ConsentManagerService);
  private bottomSheetRef =
    inject<MatBottomSheetRef<CookieConsentBottomSheetComponent>>(
      MatBottomSheetRef,
    );
  private formBuilder = inject(FormBuilder);

  public formGroup!: FormGroup<{
    preferencesAllowed: FormControl<boolean | null>;
    statisticsAllowed: FormControl<boolean | null>;
    marketingAllowed: FormControl<boolean | null>;
  }>;
  public shouldShowFullOptions = signal(false);

  constructor() {
    const consentManager = this.consentManager;

    this.formGroup = this.formBuilder.group({
      preferencesAllowed: [false],
      statisticsAllowed: [false],
      marketingAllowed: [false],
    });

    afterNextRender({
      read: () => {
        let cookieConsent: CookieConsent;
        const existingConsent = consentManager.tryGetConsent();
        if (existingConsent) {
          cookieConsent = existingConsent;
          this.shouldShowFullOptions.set(true);
        } else {
          cookieConsent = new CookieConsent();
        }

        this.formGroup.setValue({
          preferencesAllowed: cookieConsent.preferencesAllowed,
          statisticsAllowed: cookieConsent.statisticsAllowed,
          marketingAllowed: cookieConsent.marketingAllowed,
        });
      },
    });
  }

  public showFullOptions(): void {
    this.shouldShowFullOptions.set(true);
  }

  public allowAll(): void {
    this.formGroup.setValue({
      preferencesAllowed: true,
      statisticsAllowed: true,
      marketingAllowed: true,
    });
    this.savePreferences();
  }

  public rejectAll(): void {
    this.formGroup.setValue({
      preferencesAllowed: false,
      statisticsAllowed: false,
      marketingAllowed: false,
    });
    this.savePreferences();
  }

  public savePreferences(): void {
    this.consentManager.setConsent(
      this.formGroup.controls.preferencesAllowed.value!,
      this.formGroup.controls.statisticsAllowed.value!,
      this.formGroup.controls.marketingAllowed.value!,
    );

    this.bottomSheetRef.dismiss();
  }
}
