import { Component, OnInit } from '@angular/core';
import {TokenService} from '../share-service/token.service';
import {User} from '../model/user';
import{Router}  from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private tokenservice:TokenService) { }

  ngOnInit() {
    this.tokenservice.getitle(localStorage.getItem("token")).subscribe((users)=>{
    console.log(users)
    },(error)=>{
      console.log(error);
    })
  }
  login(form:NgForm){
    console.log(form.value.userName+"-"+form.value.password);
    this.tokenservice.login(form.value.userName,form.value.password)
    .subscribe(result => {
        if (result === true) {
            console.log("Thành Công");
           
        } else {
          
        }
    });
    
  }
}
