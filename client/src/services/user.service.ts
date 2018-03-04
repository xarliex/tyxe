import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`)
      .map((res) => res.json());
  }
  
  edit(user) {
    return this.http.put(`${this.BASE_URL}/api/user/${user._id}`, user)
      .map((res) => res.json());
  }
  
  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/user/delete/${id}`)
      .map((res) => res.json());
  }
}

