import { TestBed } from '@angular/core/testing';

import { SmoothiesService } from './smoothies.service';

describe('SmoothiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmoothiesService = TestBed.get(SmoothiesService);
    expect(service).toBeTruthy();
  });
});
