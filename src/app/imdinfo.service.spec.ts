import { TestBed } from '@angular/core/testing';

import { ImdinfoService } from './imdinfo.service';

describe('ImdinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImdinfoService = TestBed.get(ImdinfoService);
    expect(service).toBeTruthy();
  });
});
