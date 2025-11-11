import { TestBed } from '@angular/core/testing';

import { ConsentManagerService } from './consent-manager.service';

describe('ConsentManagerService', () => {
  let service: ConsentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
