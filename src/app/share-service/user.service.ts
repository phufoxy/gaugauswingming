import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User}  from '../model/user';
@Injectable()
export class UserService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user = new User();
  public token: string;
  constructor(private _http: Http) {
  }
  getUsers(){
    return this._http.get('http://localhost:3000/user',this.options).map((response:Response)=>response.json());
  }
  getUser(){
    return this._http.get(this.baseUrl+'/user',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  }
  deleteUser(id:Number){
    return this._http.delete(this.baseUrl+'/user/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  }
  posttoken(userName: string, id: Number,role:String){
    return this._http.post('http://localhost:8084/token',JSON.stringify({userName:userName, id:id,role:role}), this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler); 
   } 
  createUsers(user:User){
   return this._http.post('http://localhost:3000/user',JSON.stringify(user), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  } 
 
  updateteUsers(user:User,id:Number){
    return this._http.put('http://localhost:3000/user/'+id,JSON.stringify(user), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler); 
  }
  setter(user:User){
    this.user=user;
  }
  getter(){
    return this.user;
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
 }

}
