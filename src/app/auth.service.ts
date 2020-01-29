import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  uri = 'http://localhost:3000/api';
  token: any;

  constructor(private http: HttpClient,private router: Router) { }
  login(username: string, password: string) {
    this.http.post(this.uri + '/auth/login', {username: username,password: password})
    .subscribe((resp: any) => {
     
      this.router.navigate(['./']);
      localStorage.setItem('auth_token', resp.token);
      
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
