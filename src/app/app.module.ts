import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherTimetableComponent } from './components/teacher-timetable/teacher-timetable.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { TeachersService } from './services/teachers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    TeachersComponent,
    TeacherTimetableComponent,
    PageNotFoundComponent
  
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: TeacherTimetableComponent }
       
     
]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },  
    TeachersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
