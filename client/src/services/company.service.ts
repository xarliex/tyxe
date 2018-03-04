import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CompanyService {
  options: object = {withCredentials: true}
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/companies/list`, this.options)
      .map((res) => res.json());
  }
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/companies/${id}`, this.options)
      .map((res) => res.json());
  }
  // edit(id) {
  //   return this.http.get(`${this.BASE_URL}/api/companies/edit/${id}`, this.options)
  //     .map((res) => res.json());
  // }
  register(form):Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/companies/newcompany`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  edit(id,form):Observable<any>{
    return this.http.put(`${this.BASE_URL}/api/companies/edit/${id}`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/companies/delete/${id}`)
      .map((res) => res.json());
  }
}
