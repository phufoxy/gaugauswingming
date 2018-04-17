import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{Event}  from '../model/event';
import {Trainer} from '../model/trainer';
@Injectable()
export class EventService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private event = new Event();
  private trainer = new Trainer();
  public token: string;
  constructor(private _http: Http) {
  }
  // getdata
  getEvent(){
    return this._http.get(' http://localhost:3000/event',this.options).map((response:Response)=>response.json());
  }
  
  
  setter(event:Event){
    this.event=event;
  }
  getter(){
    return this.event;
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
 }
}
