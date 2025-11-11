import { afterNextRender, Component, signal, inject } from '@angular/core';
import { APP_URLS, AppUrls } from 'src/app/models/app-urls';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { interval, Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { openNewsletterDialog } from '../newsletter-dialog/newsletter-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-public-index',
  imports: [MatButtonModule, MatIconModule, NgClass],
  templateUrl: './public-index.component.html',
  styleUrl: './public-index.component.scss',
})
export class PublicIndexComponent {
  private dialog = inject(MatDialog);

  public appUrl: string;
  public subscription: Subscription | undefined;
  public wasManuallySet = false;
  public carouselIndex = signal(0);

  constructor() {
    const appUrls = inject<AppUrls>(APP_URLS);

    this.appUrl = appUrls.stratosheetUrl;

    afterNextRender(() => {
      this.subscription = interval(5000).subscribe(() => {
        this.carouselIndex.update((x) => x + 1);

        if (this.carouselIndex() > 2) {
          this.carouselIndex.set(0);
        }
      });
    });
  }

  public moveLeft() {
    this.subscription?.unsubscribe();
    this.carouselIndex.update((x) => x - 1);

    if (this.carouselIndex() < 0) {
      this.carouselIndex.set(2);
    }
  }

  public moveRight() {
    this.subscription?.unsubscribe();
    this.carouselIndex.update((x) => x + 1);

    if (this.carouselIndex() > 2) {
      this.carouselIndex.set(0);
    }
  }

  public showNewsletterDialog() {
    openNewsletterDialog(this.dialog);
  }
}
