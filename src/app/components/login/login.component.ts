import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';
  username = '';
  password = '';
  constructor(private authService: AuthService) { }

  Login() {
    this.error = '';
    console.log("you are logging in");
    this.authService.login(this.username, this.password); 
    this.error = 'Usuario o contraseña incorrectos';
     
  }


  
  ngOnInit() {
  }

}
