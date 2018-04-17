import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {Trainer} from '../model/trainer';
import{Router} from '@angular/router';
import {TrainerService} from '../share-service/trainer/trainer.service';
@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})

export class TableStudentComponent implements OnInit {
  // declare trainer
  private trainer:Trainer[];
  limit: number;
  numberOfBooks: number;
  page: number = 1;
  filter: Trainer = new Trainer()
  pagesIndex =[];
  constructor(private  trainerService:TrainerService,private _router:Router) { }
  ngOnInit() {
    this.init();
  }
  

  // update
  updateUser(trainer){
    this.trainerService.setter(trainer);
    this._router.navigate(['/user-profile']);
  }
  // getdata
  init(){
    this.trainerService.getTrainer().subscribe((trainer)=>{
      console.log(trainer)
      this.trainer=trainer;
      this.numberOfBooks = this.trainer.length;
      this.limit = 6;
     
    },(error)=>{
      console.log(error);
    })
  }
  prevPage(){
    this.page --;
  }
  nextPage(){
    this.page ++;
  }
  

}
