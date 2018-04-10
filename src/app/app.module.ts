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
import { FormComponent } from './form/form.component';
import {TokenService} from './share-service/token.service';
import {UserService} from './share-service/user.service';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
    FormComponent
  ],
  
  imports: [
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
 
  providers: [TokenService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
