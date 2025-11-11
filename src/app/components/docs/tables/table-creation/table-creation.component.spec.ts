import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreationComponent } from './table-creation.component';

describe('TableCreationComponent', () => {
  let component: TableCreationComponent;
  let fixture: ComponentFixture<TableCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
