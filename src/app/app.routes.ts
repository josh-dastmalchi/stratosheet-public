import { Routes } from '@angular/router';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { PricingIndexComponent } from './components/pricing/pricing-index/pricing-index.component';
import { CompanyIndexComponent } from './components/company/company-index/company-index.component';
import { PublicIndexComponent } from './components/public-index/public-index.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { HeaderFooterLayoutComponent } from './components/header-footer-layout/header-footer-layout.component';
import { CookieNoticeComponent } from './components/cookie-notice/cookie-notice.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderFooterLayoutComponent,
    children: [
      {
        path: '',
        component: PublicIndexComponent,
        title: 'Stratosheet',
      },
      {
        path: 'product',
        title: 'Product | Stratosheet',
        component: ProductIndexComponent,
      },
      {
        path: 'pricing',
        title: 'Pricing | Stratosheet',
        component: PricingIndexComponent,
      },
      {
        path: 'company',
        title: 'Company | Stratosheet',
        component: CompanyIndexComponent,
      },
    ],
  },
  {
    path: 'terms',
    title: 'Terms of Service | Stratosheet',
    component: TermsOfServiceComponent,
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Stratosheet',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'cookies',
    title: 'Cookie Policy | Stratosheet',
    component: CookieNoticeComponent,
  },
];
