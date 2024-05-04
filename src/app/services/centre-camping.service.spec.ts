import { TestBed } from '@angular/core/testing';

import { CentreCampingService } from './centre-camping.service';

describe('CentreCampingService', () => {
  let service: CentreCampingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreCampingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
