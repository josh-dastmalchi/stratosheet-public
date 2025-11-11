import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationCreationComponent } from './automation-creation.component';

describe('AutomationCreationComponent', () => {
  let component: AutomationCreationComponent;
  let fixture: ComponentFixture<AutomationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutomationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
