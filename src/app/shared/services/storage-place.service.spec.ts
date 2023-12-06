import { TestBed } from '@angular/core/testing';

import { StoragePlaceService } from './storage-place.service';

describe('StoragePlaceService', () => {
  let service: StoragePlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragePlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
