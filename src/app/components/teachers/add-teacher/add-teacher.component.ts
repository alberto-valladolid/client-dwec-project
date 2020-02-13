import { Component, OnInit, HostBinding } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import {TeachersService} from '../../../services/teachers.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  @HostBinding ('class') classes = 'row'; 

  teacher : Teacher = {
    id:null,
    user_name: "",
    name:"",
    email : "",
    pw : "",
    phone_number : null,
    
  }; 

  constructor(private teachersService: TeachersService, private router: Router) { }

  ngOnInit() {
  }

  createTeacher(){
    //console.log(this.teacher); 
    this.teachersService.addTeacher(this.teacher).subscribe(
      res =>{
        this.router.navigate(['']);
      },
      err => console.log(err)
    )
  }

}
