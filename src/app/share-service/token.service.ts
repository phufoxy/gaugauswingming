import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class TokenService {

  public token: string;
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private http: Http) {
      // set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:8080/auth', JSON.stringify({ username: username, password: password }),this.options)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;
                console.log(token);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
}
errorHandler(error:Response){
  return Observable.throw(error||"SERVER ERROR");
}

}
