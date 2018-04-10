import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TokenService} from '../share-service/token.service';
import {User} from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../share-service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';
  constructor(
    private router: Router,
    private tokenservice: TokenService,
    private userService: UserService) { }

  ngOnInit() {
    console.log(localStorage.getItem("currentUser"));
    this.userService.getHomeDetails()
            .subscribe(users => {
                
                console.log(users)
            });
  }
  login(form:NgForm){
    this.loading = true;
        this.tokenservice.login(form.value.username, form.value.password)
            .subscribe(result => {
                if (result === true) {
                    console.log("Thanhf Coong");
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
  }
 
}
