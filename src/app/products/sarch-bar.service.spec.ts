import { TestBed } from '@angular/core/testing';

import { SarchBarService } from './sarch-bar.service';

describe('SarchBarService', () => {
  let service: SarchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
