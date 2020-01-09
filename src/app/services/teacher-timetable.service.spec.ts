import { TestBed } from '@angular/core/testing';

import { TeacherTimetableService } from './teacher-timetable.service';

describe('TeacherTimetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherTimetableService = TestBed.get(TeacherTimetableService);
    expect(service).toBeTruthy();
  });
});
