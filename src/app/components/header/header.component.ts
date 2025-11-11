import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { APP_URLS, AppUrls } from 'src/app/models/app-urls';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbar,
    RouterLink,
  ],
})
export class HeaderComponent {
  public stratosheetUrl: string;
  public helpUrl: string;
  constructor() {
    const appUrls = inject<AppUrls>(APP_URLS);

    this.stratosheetUrl = appUrls.stratosheetUrl;
    this.helpUrl = appUrls.helpUrl;
  }
}
