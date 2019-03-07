import { TestBed } from '@angular/core/testing';

import { ReadWriteServiceService } from './read-write-service.service';

describe('ReadWriteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadWriteServiceService = TestBed.get(ReadWriteServiceService);
    expect(service).toBeTruthy();
  });
});
