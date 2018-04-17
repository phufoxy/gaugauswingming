import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TokenService} from '../share-service/token.service';
import {User} from '../model/user';
import {Trainer} from '../model/trainer';
import { Router } from '@angular/router';
import { UserService } from '../share-service/user.service';
import {TrainerService} from '../share-service/trainer/trainer.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 private user:User;
 private trainer:Trainer;
 desciption=[
  { path: 'Sinh Viên'},
  { path: 'Giáo Viên'},
  { path: 'Thành Viên'},
  { path: 'Admin'}
];
  constructor(
    private router: Router,
    private trainerService: TrainerService,
    private _userService: UserService) { }

  ngOnInit() {
    this.trainer=this.trainerService.getter();
    this.init();
  }
  init(){
    this.trainerService.getTrainer().subscribe((trainer)=>{
      console.log(trainer)
    },(error)=>{
      console.log(error);
    })
  }
  processForm(){
    if(this.trainer.id==undefined){
      this.trainerService.createTrainer(this.trainer).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-student']);
      },(error)=>{
        console.log(error);
      });
    }else{
      this.trainerService.updateTrainer(this.trainer,this.trainer.id).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-student']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}