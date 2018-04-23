import { Component, OnInit } from '@angular/core';
import {Trainer} from '../model/trainer';
import{Router} from '@angular/router';
import {TrainerService} from '../share-service/trainer/trainer.service';
@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.scss']
})
export class TableTeacherComponent implements OnInit {
  // declare trainer
  private trainer:Trainer[];
  limit: number;
  numberOfBooks: number;
  page: number = 1;
  filter: Trainer = new Trainer()
  pagesIndex =[];
  maxpage:number=0;
  max:number=0;
  constructor(private  trainerService:TrainerService,private _router:Router) { }

  ngOnInit() {
    this.init();
  }
  // delete
  deleteTrainer(trainer){
    this.trainerService.deleteUser(trainer.id).subscribe((data)=>{
        this.trainer.splice(this.trainer.indexOf(trainer),1);
    },(error)=>{
      console.log(error);
    });
  }
  // update
  updateUser(trainer){
    this.trainerService.setter(trainer);
    this._router.navigate(['/user-profile']);
  }
  // getdata
  init(){
    this.trainerService.getTrainer("Giáo Viên").subscribe((trainer)=>{
      console.log(trainer)
      this.trainer=trainer;
      this.numberOfBooks = this.trainer.length;
      this.limit = 6;
      if(this.numberOfBooks<this.limit){
        this.maxpage=1
      }else if(this.numberOfBooks%6==0){
        this.maxpage=(this.numberOfBooks/6);
      }else{
        this.maxpage=((this.numberOfBooks%6)/(this.numberOfBooks%6))+(this.numberOfBooks/6);
      }
      // cover number
      this.max=Math.floor(this.maxpage);
      // push item page
      for(var i=1;i<=this.max;i++){
        this.pagesIndex.push(i);
      }
    },(error)=>{
      console.log(error);
    })
  }
  // prevpage
  prevPage(){
    this.page --;
  }
  // nextpage
  nextPage(){
    this.page ++;
  }
  // set page
  setPage(pagenumber:number){
    this.page=pagenumber;
  }

}
