import { Component, OnInit } from '@angular/core';

import {TeachersService} from '../../services/teachers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers : any = [];
  accType = localStorage.getItem('accType');
  constructor(private teachersService: TeachersService,private router: Router ) { }

  deleteTeacher(id : string){
    this.teachersService.deleteTeacher(id).subscribe(
      res =>{
        console.log(res); 
        this.getTeachers(); 
      },
      err => console.log(err)
    )
  }

  editTeacher(id : string){
    this.router.navigate(['/teachers/edit/'+id]);
  }

  getTeachers(){
    this.teachersService.getTeachers().subscribe(
      res =>{
        this.teachers = res; 
      },
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe(
      res =>{
        this.teachers = res; 
      },
      err => console.log(err)
    )
  
  }


}
