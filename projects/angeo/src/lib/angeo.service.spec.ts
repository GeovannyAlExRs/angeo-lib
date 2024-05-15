import { TestBed } from '@angular/core/testing';

import { AngeoService } from './angeo.service';

describe('AngeoService', () => {
  let service: AngeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
