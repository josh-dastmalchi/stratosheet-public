import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  imports: [],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.scss',
})
export class TermsOfServiceComponent {
  public legalEmailAddress = 'legal@gracklesoft.com';
  public legalEmailHref = `mailto:${this.legalEmailAddress}`;
}
