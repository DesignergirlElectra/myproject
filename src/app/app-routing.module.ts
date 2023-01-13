import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskformComponent } from './add-taskform/add-taskform.component';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: 'addtask', component: AddTaskformComponent },
  { path: 'banner' , component: BannerComponent},
  { path:'dash', component: DashboardComponent},
  { path:'view', component: ViewTaskComponent},
  { path: 'login' , component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'userdash', component: UserDashboardComponent},
  {path:'home' , component : HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
