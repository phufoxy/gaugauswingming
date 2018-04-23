import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import{Router} from '@angular/router';
import {CourseService} from '../share-service/course/course.service';
@Component({
  selector: 'app-table-class',
  templateUrl: './table-class.component.html',
  styleUrls: ['./table-class.component.scss']
})
export class TableClassComponent implements OnInit {
  // declare trainer
  private course:Course[];
  limit: number;
  numberOfBooks: number;
  page: number = 1;
  filter: Course = new Course()
  pagesIndex =[];
  maxpage:number=0;
  max:number=0;
  constructor(private  courseService:CourseService,private _router:Router) { }

  ngOnInit() {
    this.init();
  }
  // delete
  deleteTrainer(course){
    this.courseService.deleteUser(course.id).subscribe((data)=>{
        this.course.splice(this.course.indexOf(course),1);
    },(error)=>{
      console.log(error);
    });
  }
  // update
  updateUser(course){
    this.courseService.setter(course);
    this._router.navigate(['/class-profile']);
  }
  // getdata
  init(){
    this.courseService.getTrainer().subscribe((course)=>{
      console.log(course)
      this.course=course;
      this.numberOfBooks = this.course.length;
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
