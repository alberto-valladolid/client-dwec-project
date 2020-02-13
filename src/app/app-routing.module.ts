import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './components/login/login.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { TeacherTimetableComponent } from './components/teacher-timetable/teacher-timetable.component';


import { AddTeacherComponent } from './components/teachers/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './components/teachers/edit-teacher/edit-teacher.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeachersComponent } from './components/teachers/teachers.component';
//import { AuthGuard  } from './services/auth-guard.service'



const routes: Routes = [

  { path: '', component: TeachersComponent },
  { path: 'teachers/add', component: AddTeacherComponent },
  { path: 'teachers/edit/:id', component: EditTeacherComponent }, 
  
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
