import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { TokenService } from '../share-service/token.service';
import { User } from '../model/user';
@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(
    private http: Http,
    private TokenService: TokenService) {
  }
  securedGet(getURL: string, token:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + token);
    let obs = new Observable(observer => {
        this.http.get(getURL, {headers: headers, body: ''}).subscribe(
            (response: Response) => {
                observer.next(response);
                observer.complete();
            },
            error=> {
                observer.error(error);
            });
    });
    return obs;
}




getHomeDetails(): Observable<User[]> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let authToken = this.TokenService.token;
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.get('http://localhost:8080/api/footer',{headers})
    .map(response => response.json()) .catch(this.errorHandler); 
}  









  getUsers(): Observable<User[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + this.TokenService.token);
    
    const options = new RequestOptions({ headers: headers });
    console.log("abc:"+headers.get('Authorization')+headers.get("Content-Type"));
    // get users from api
    return this.http.get('http://localhost:8080/api/footer', options)
        .map((response: Response) => response.json());
}
errorHandler(error:Response){
  return Observable.throw("abc:"+error||"SERVER ERROR");
}
}
