import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '../config'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherTimetableService {

  API_URL= config.serverApi+"/teachers";

  constructor(private http:HttpClient) {  }

}
