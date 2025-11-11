import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyConceptsComponent } from './key-concepts.component';

describe('KeyConceptsComponent', () => {
  let component: KeyConceptsComponent;
  let fixture: ComponentFixture<KeyConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyConceptsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
