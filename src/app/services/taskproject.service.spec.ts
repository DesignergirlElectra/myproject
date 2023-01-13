import { TestBed } from '@angular/core/testing';

import { TaskprojectService } from './taskproject.service';

describe('TaskprojectService', () => {
  let service: TaskprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
