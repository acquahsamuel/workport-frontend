import { TestBed } from '@angular/core/testing';

import { CreateJobService } from './create-job.service';

describe('CreateJobService', () => {
  let service: CreateJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
