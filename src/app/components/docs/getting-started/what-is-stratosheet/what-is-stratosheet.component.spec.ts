import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsStratosheetComponent } from './what-is-stratosheet.component';

describe('WhatIsStratosheetComponent', () => {
  let component: WhatIsStratosheetComponent;
  let fixture: ComponentFixture<WhatIsStratosheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsStratosheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatIsStratosheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
