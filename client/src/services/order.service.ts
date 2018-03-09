import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OrderService {
  options: object = {withCredentials: true}
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getListorders() {
    return this.http.get(`${this.BASE_URL}/api/orders/list`, this.options)
      .map((res) => res.json());
  }
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/orders/${id}`, this.options)
      .map((res) => res.json());
  }

  getlocals() {
    return this.http.get(`${this.BASE_URL}/api/orders/locals`, this.options)
      .map((res) => console.log(res.json()));
  }

  buy(form):Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/orders/newbuyorder`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  sell(form):Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/orders/newsellorder`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  edit(id):Observable<any>{
    return this.http.put(`${this.BASE_URL}/api/orders/update/${id}`, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/orders/delete/${id}`)
      .map((res) => res.json());
  }
}