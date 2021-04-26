import { TestBed } from '@angular/core/testing';

import { ExpertListService } from './expert-list.service';

describe('ExpertListService', () => {
  let service: ExpertListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
