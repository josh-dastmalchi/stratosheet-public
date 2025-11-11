import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export function openNewsletterDialog(dialog: MatDialog) {
  return dialog.open(NewsletterDialogComponent, {
    width: '30rem',
    height: '35rem',
    maxWidth: '100%',
  });
}

@Component({
  selector: 'app-newsletter-dialog',
  imports: [MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './newsletter-dialog.component.html',
  styleUrl: './newsletter-dialog.component.scss',
})
export class NewsletterDialogComponent {
  public isLoading = true;
  public hasError = false;

  public onLoaded(event: Event) {
    // The way angular injects the iframe causes the onload event to fire twice, once before the actual URL is bound
    if (event?.target instanceof HTMLIFrameElement) {
      if (event.target.src) {
        this.isLoading = false;
      }
    }
  }

  public onError() {
    this.isLoading = false;
    this.hasError = true;
  }
}
