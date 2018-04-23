import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Trainer} from '../model/trainer';
import { Router } from '@angular/router';
import {TrainerService} from '../share-service/trainer/trainer.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private trainer:Trainer;
  constructor(
    private router: Router,
    private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainer=this.trainerService.getter();
  }
 
  processForm(){
    if(this.trainer.id==undefined && this.trainer.description=="Sinh Viên"){
      this.trainerService.createTrainer(this.trainer).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-student']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }else if(this.trainer.id==undefined && this.trainer.description=="Giáo Viên"){
      this.trainerService.createTrainer(this.trainer).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-teacher']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }else if(this.trainer.id!=undefined && this.trainer.description=="Sinh Viên"){
      this.trainerService.updateTrainer(this.trainer,this.trainer.id).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-student']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }else if(this.trainer.id!=undefined && this.trainer.description=="Giáo Viên"){
      this.trainerService.updateTrainer(this.trainer,this.trainer.id).subscribe((trainer)=>{
        console.log(trainer);
        this.router.navigate(['/table-teacher']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
      console.log("update Giáo viên")
    }
  }
   // clear input
   clear(){
    this.trainer.lastname = '';
    this.trainer.firstname = '';
    this.trainer.birthday = '';
    this.trainer.phone = '';
    this.trainer.address = '';
    this.trainer.image = '';
    this.trainer.joined = '';
    this.trainer.status = '';
    this.trainer.description='';
  }
}
