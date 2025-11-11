import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationActionsComponent } from './automation-actions.component';

describe('AutomationActionsComponent', () => {
  let component: AutomationActionsComponent;
  let fixture: ComponentFixture<AutomationActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutomationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
