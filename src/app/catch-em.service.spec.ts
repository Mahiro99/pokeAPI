import { TestBed } from '@angular/core/testing';

import { CatchEmService } from './catch-em.service';

describe('CatchEmService', () => {
  let service: CatchEmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatchEmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
