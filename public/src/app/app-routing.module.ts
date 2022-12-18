import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'classes', component : ClassesComponent},
  {path : 'workouts', component : WorkoutsComponent},
  {path : 'schedules', component : SchedulesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
