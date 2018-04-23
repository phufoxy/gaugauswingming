import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableTeacherComponent } from './table-teacher/table-teacher.component';
import { TableClassComponent } from './table-class/table-class.component';
import { TableStudentComponent } from './table-student/table-student.component';
import { SettingComponent } from './setting/setting.component';


import {TrainerService} from './share-service/trainer/trainer.service';
import {CourseService} from './share-service/course/course.service';
import { StudentPipe } from './filter/student.pipe';
import { EventComponent } from './event/event.component';
import { ClassProfileComponent } from './class-profile/class-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    TableTeacherComponent,
    TableClassComponent,
    TableStudentComponent,
    SettingComponent,
    StudentPipe,
    EventComponent,
    ClassProfileComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [TrainerService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
