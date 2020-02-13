import { Component, OnInit, HostBinding } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import {Router, ActivatedRoute} from '@angular/router'; 
import {TeachersService} from '../../../services/teachers.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  @HostBinding ('class') classes = 'row'; 

  teacher : Teacher = {
    id:null,
    user_name: "",
    name:"",
    email : "",
    pw : "",
    phone_number : null,
    
  }; 

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private teachersService: TeachersService) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params; 

    this.teacher.id = params.id;      

    this.teachersService.getATeacher(params.id).subscribe(
      res =>{

        this.teacher.id = res[0].id; 
        this.teacher.user_name = res[0].user_name; 
        this.teacher.name = res[0].name; 
        this.teacher.email = res[0].email; 
        this.teacher.phone_number = res[0].phone_number; 
 
        //console.log(res[0]); 
       
      },
      err => console.log(err)
    )

  }

  guardar(id){
    this.teachersService.updateTeacher(id, this.teacher).subscribe(
      res =>{
        console.log(res['text']); 
      },
      err => console.log(err)
    )
  }

}
