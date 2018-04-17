import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { TableListComponent } from './table-list/table-list.component';
import { TableClassComponent } from './table-class/table-class.component';
import { TableStudentComponent } from './table-student/table-student.component';
import {TokenService} from './share-service/token.service';
import {UserService} from './share-service/user.service';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './model/student/student.component';
import { TestComponent } from './test/test.component';
import {MatCardModule} from '@angular/material/card';
import {BookFilterPipe} from './share-service/filter/trainer-filter.pipe';


import {TrainerService} from './share-service/trainer/trainer.service';
import { SettingComponent } from './setting/setting.component';
import {EventService} from './share-service/event.service';
@NgModule({
  declarations: [
    
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TableClassComponent,
    TableStudentComponent,
    StudentComponent,
    TestComponent,
    BookFilterPipe,
    SettingComponent
    
  ],
  
  imports: [
    MatCardModule,
    HttpClientModule,
    HttpModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
 
  providers: [TokenService,UserService,TrainerService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
