import { BreakpointObserver } from '@angular/cdk/layout';

import {
  afterNextRender,
  ChangeDetectorRef,
  Component,
  ViewChild,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

interface DocumentationCategory {
  title: string;
  topics: DocumentationTopic[];
}

interface DocumentationTopic {
  title: string;
  route: string;
  keywords?: string[];
}

@Component({
  selector: 'app-docs-layout',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './docs-layout.component.html',
  styleUrl: './docs-layout.component.scss',
})
export class DocsLayoutComponent {
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild('drawer') drawer: MatSidenav | undefined;

  public categories: DocumentationCategory[];
  public navMode: MatDrawerMode | undefined;
  public isNavOpen = true;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);
    const router = inject(Router);

    this.categories = [
      {
        title: 'Getting Started',
        topics: [
          { title: 'What is Stratosheet?', route: '/docs' },
          {
            title: 'Key Concepts',
            route: '/docs/getting-started/key-concepts',
          },
        ],
      },
      {
        title: 'Tables',
        topics: [
          { title: 'Overview', route: '/docs/tables/overview' },
          { title: 'Creating a Table', route: '/docs/tables/creating-a-table' },
          { title: 'Table Columns', route: '/docs/tables/columns' },
        ],
      },
      {
        title: 'Views',
        topics: [
          { title: 'Overview', route: '/docs/views/overview' },
          { title: 'Table View', route: '/docs/views/table' },
          { title: 'Calendar View', route: '/docs/views/calendar' },
          { title: 'Kanban View', route: '/docs/views/kanban' },
        ],
      },
      {
        title: 'Automations',
        topics: [
          { title: 'Overview', route: '/docs/automations/overview' },
          {
            title: 'Creating an Automation',
            route: '/docs/automations/creating-an-automation',
          },
          {
            title: 'Automation Actions',
            route: '/docs/automations/automation-actions',
          },
        ],
      },
    ];

    // Close the nav drawer when we change topics
    router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (this.drawer?.mode === 'over') {
          this.drawer.close();
        }
      }
    });

    // Change between side and over mode based on the screen size
    afterNextRender(() => {
      breakpointObserver.observe('(max-width: 1024px)').subscribe(() => {
        const isSmall = breakpointObserver.isMatched('(max-width: 1024px)');
        if (isSmall) {
          this.navMode = 'over';
          this.isNavOpen = false;
        } else {
          this.navMode = 'side';
          this.isNavOpen = true;
        }
        this.changeDetector.detectChanges();
      });
    });
  }

  // TODO: add a way to search the docs once they're extensive enough
  // @HostListener('document:keydown', ['$event'])
  // handleTheKeyboardEvent(event: KeyboardEvent) {
  //   if (event.ctrlKey && event.key === 'k') {
  //     // open a search modal or something
  //     event.preventDefault();
  //   }
  // }
}
