import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Meta } from '@angular/platform-browser';
import { CanonicalLinkService } from './services/canonical-link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})
export class AppComponent {
  private meta = inject(Meta);
  private router = inject(Router);

  constructor() {
    const canonicalLinkService = inject(CanonicalLinkService);

    if (environment.hideFromRobots) {
      this.meta.updateTag({ name: 'robots', content: 'noindex' });
    }
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd)
        canonicalLinkService.setCanonicalUrl();
    });
  }
}
