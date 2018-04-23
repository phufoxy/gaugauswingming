import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Course} from '../model/course';
import { Router } from '@angular/router';
import {CourseService} from '../share-service/course/course.service';
@Component({
  selector: 'app-class-profile',
  templateUrl: './class-profile.component.html',
  styleUrls: ['./class-profile.component.scss']
})
export class ClassProfileComponent implements OnInit {
  private course:Course;
  constructor(
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.course=this.courseService.getter();
  }
  processForm(){
    if(this.course.id==undefined){
      this.courseService.createTrainer(this.course).subscribe((course)=>{
        console.log(course);
        this.router.navigate(['/table-class']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }else{
      this.courseService.updateTrainer(this.course,this.course.id).subscribe((course)=>{
        console.log(course);
        this.router.navigate(['/table-class']);
        this.clear();
      },(error)=>{
        console.log(error);
      });
    }
  }
   // clear input
   clear(){
    this.course.name = '';
    this.course.price = 0;
    this.course.status = '';
    this.course.image= '';
    this.course.description='';
    this.course.details='';
    this.course.date_start='';
    this.course.date_end='';
    this.course.create_at='';
  }

}
