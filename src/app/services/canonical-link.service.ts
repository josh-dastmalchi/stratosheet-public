import {
  Injectable,
  Renderer2,
  RendererFactory2,
  DOCUMENT,
  inject,
} from '@angular/core';

import { Router } from '@angular/router';
import { APP_URLS, AppUrls } from '../models/app-urls';

@Injectable({
  providedIn: 'root',
})
export class CanonicalLinkService {
  private document = inject<Document>(DOCUMENT);
  private appUrls = inject<AppUrls>(APP_URLS);
  private router = inject(Router);

  private renderer: Renderer2;

  constructor() {
    const rendererFactory = inject(RendererFactory2);

    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // Manually set the canonical url for special cases
  public setCanonicalUrl() {
    const link = this.renderer.createElement('link');

    link.setAttribute('rel', 'canonical');

    const existingLink =
      this.document.head.querySelectorAll('[rel="canonical"]')[0];

    if (existingLink) {
      this.document.head.replaceChild(link, existingLink);
    } else {
      this.renderer.appendChild(this.document.head, link);
    }

    link.setAttribute('href', `${this.appUrls.hostedUrl}${this.router.url}`);
  }
}
