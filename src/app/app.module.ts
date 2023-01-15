import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskformComponent } from './add-taskform/add-taskform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimationbackgroundComponent } from './animationbackground/animationbackground.component';
import { BannerComponent } from './banner/banner.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamSecComponent } from './team-sec/team-sec.component';
import { PartnerComponent } from './partner/partner.component';
import { EmployfedtempformComponent } from './employfedtempform/employfedtempform.component'

@NgModule({
  declarations: [
    AppComponent,
    AddTaskformComponent,
    DashboardComponent,
    AnimationbackgroundComponent,
    BannerComponent,
    ViewTaskComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    HeaderComponent,
    HomeComponent,
    TeamSecComponent,
    PartnerComponent,
    EmployfedtempformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
