import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Course} from '../../model/course';
@Injectable()
export class CourseService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private course = new Course();
  public token: string;
  constructor(private _http: Http) {
  }
  // getdata
  getTrainer(){
    return this._http.get('http://localhost:3000/course',this.options).map((response:Response)=>response.json());
  }
  // Add data
  createTrainer(course:Course){
    return this._http.post('http://localhost:3000/course',JSON.stringify(course), this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler); 
  } 
  // update data
  updateTrainer(course:Course,id:Number){
    return this._http.put('http://localhost:3000/course/'+id,JSON.stringify(course), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  }
  // delete data
  deleteUser(id:Number){
    return this._http.delete('http://localhost:3000/course/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  // set data
  setter(course:Course){
    this.course=course;
  }
  // get data
  getter(){
    return this.course;
  }
  // Error
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}
