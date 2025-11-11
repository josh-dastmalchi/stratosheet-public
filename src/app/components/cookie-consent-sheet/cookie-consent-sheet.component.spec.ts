import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConsentBottomSheetComponent } from './cookie-consent-sheet.component';

describe('CookieConsentDialogComponent', () => {
  let component: CookieConsentBottomSheetComponent;
  let fixture: ComponentFixture<CookieConsentBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieConsentBottomSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieConsentBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
