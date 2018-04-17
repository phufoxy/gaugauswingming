import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component'
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import { TableClassComponent } from './table-class/table-class.component';
import { TableStudentComponent } from './table-student/table-student.component';
import { TestComponent } from './test/test.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes =[
    { path: 'dashboard',component: DashboardComponent },
    { path: 'test',component: TestComponent },
    { path: 'user-profile',component: UserProfileComponent },
    { path: 'table-list',component: TableListComponent },
    { path: 'table-class',component: TableClassComponent },
    { path: 'table-student',component: TableStudentComponent },
    { path: 'setting',component: SettingComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
    ],
  })
  export class AppRoutingModule { }
  