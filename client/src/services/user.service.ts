import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  options: object = {withCredentials: true}
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {}
    
  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`, this.options)
      .map((res) => res.json());
  }
  
  // edit(user) {
  //   return this.http.put(`${this.BASE_URL}/api/user/${user._id}`, user)
  //     .map((res) => res.json());
  // }
  edit(id,form):Observable<any>{
    return this.http.put(`${this.BASE_URL}/api/user/edit/${id}`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  
  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/user/delete/${id}`, this.options)
      .map((res) => res.json());
  }
}