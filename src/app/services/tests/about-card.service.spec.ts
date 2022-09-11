import { TestBed } from '@angular/core/testing';

import { AboutCardService } from '../about-card.service';

describe('AboutCardService', () => {
  let service: AboutCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
