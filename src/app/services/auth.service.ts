import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import config from '../config'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  token: any;

  constructor(private http: HttpClient,private router: Router) { }
  login(username: string, password: string) {
    this.http.post(config.serverApi + '/auth/login', {username: username,password: password})
    .subscribe((resp: any) => {

        localStorage.setItem('auth_token', resp.token);        
        localStorage.setItem('accType', resp.accType);
        console.log(localStorage.getItem('accType')); 
        this.router.navigate([`${this.router.url}`]);
      
        
      
      })
      
  }
  

  logout() {
    localStorage.removeItem('auth_token');
  }
 
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public get logToken(): string {
    return localStorage.getItem('auth_token'); 
  }


}
