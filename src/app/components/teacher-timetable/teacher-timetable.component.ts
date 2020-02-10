import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TeacherTimetableService} from '../../services/teacher-timetable.service';

@Component({
  selector: 'app-teacher-timetable',
  templateUrl: './teacher-timetable.component.html',
  styleUrls: ['./teacher-timetable.component.css']
})
export class TeacherTimetableComponent implements OnInit {


  constructor(private teacherTimetableService: TeacherTimetableService) { }

  ngOnInit() {
    
    
  }

}


