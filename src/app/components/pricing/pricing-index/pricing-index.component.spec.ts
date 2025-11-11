import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingIndexComponent } from './pricing-index.component';

describe('PricingIndexComponent', () => {
  let component: PricingIndexComponent;
  let fixture: ComponentFixture<PricingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
