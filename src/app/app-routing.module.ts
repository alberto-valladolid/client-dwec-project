import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './components/login/login.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { TeacherTimetableComponent } from './components/teacher-timetable/teacher-timetable.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'




const routes: Routes = [
  {
    path: '',
    component: TeacherTimetableComponent

  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
