import { TestBed } from '@angular/core/testing';

import { CanonicalLinkService } from './canonical-link.service';

describe('CanonicalLinkService', () => {
  let service: CanonicalLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanonicalLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
