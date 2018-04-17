import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User}  from '../../model/user';
import {Trainer} from '../../model/trainer';
@Injectable()
export class TrainerService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user = new User();
  private trainer = new Trainer();
  public token: string;
  constructor(private _http: Http) {
  }
  // getdata
  getTrainer(){
    return this._http.get(' http://localhost:3000/trainers?description=Sinh Viên',this.options).map((response:Response)=>response.json());
  }
  
  createTrainer(trainer:Trainer){
   return this._http.post('http://localhost:3000/trainers',JSON.stringify(trainer), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  } 
 
  updateTrainer(trainer:Trainer,id:Number){
    return this._http.put('http://localhost:3000/trainers/'+id,JSON.stringify(trainer), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  }
  setter(trainer:Trainer){
    this.trainer=trainer;
  }
  getter(){
    return this.trainer;
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
 }
}
