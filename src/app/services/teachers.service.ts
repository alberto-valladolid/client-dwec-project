import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '../config'; 

import { Teacher } from '../models/Teacher';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  API_URL= config.serverApi+"/teachers";

  constructor(private http:HttpClient) { }
 
  getTeachers()  {
    return this.http.get(this.API_URL); 

  }

  deleteTeacher(id : string){
    return this.http.delete(this.API_URL + "/" + id); 
  }

  // updateTeacher(teacher : Teacher): Observable<Teacher>{
  //   return this.http.delete(this.API_URL); 
  // }
  // getATeacher(id: string,tokenService: TokenService){
  //   return this.http.get( `${this.API_URL}/${id}` ); 
  // }

}
