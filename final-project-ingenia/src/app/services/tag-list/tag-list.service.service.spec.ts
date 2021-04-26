import { TestBed } from '@angular/core/testing';

import { TagListServiceService } from './tag-list.service.service';

describe('TagListServiceService', () => {
  let service: TagListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
