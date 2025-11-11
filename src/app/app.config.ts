import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { routes } from './app.routes';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_URLS, AppUrls } from './models/app-urls';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(),
    importProvidersFrom(
      // Angular
      BrowserModule,
      // Angular Material
      MatBottomSheetModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      MatToolbarModule,
    ),
    {
      provide: APP_URLS,
      useValue: {
        accountUrl: environment.accountUrl,
        stratosheetUrl: environment.stratosheetUrl,
        helpUrl: environment.helpUrl,
        hostedUrl: environment.hostedUrl,
      } as AppUrls,
    },
    provideAnimations(),
  ],
};
