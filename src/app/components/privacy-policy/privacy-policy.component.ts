import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  public privacyEmailAddress = 'privacy@gracklesoft.com';
  public privacyEmailHref = `mailto:${this.privacyEmailAddress}`;
}
