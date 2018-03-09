import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username:string,
  password:string,
  _id:string,
}

@Injectable()
export class SessionService {
  
  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  public user:User; 

  // constructor(private http:Http) {
  //   this.isLoggedIn().subscribe( (user:User) =>{
  //     console.log(`Welcome again user ${user.username}`)
  //     this.user = user;
  //   });
  // }

  getUser(){
    return this.user;
  }
  
  public configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        console.log(`Setting user, welcome ${user.username}`)
      }else{
        console.log(`bye bye ${user.username}`)
        this.user = null
      }
      return user;
    }
  }

  back(userId):Observable<any>{
    return this.http.get(`${this.BASEURL}/api/user/${userId}`, this.options)
    .map(res => res.json())
    .map(this.configureUser(true))
    .catch(this.handleError);
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  signup(username:string, email:string,  password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/signup`, {username, email, password}, this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/login`, {username,password},this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/api/auth/logout`,this.options)
      .map(res => res.json())
      .map(this.configureUser(false))
      .catch(this.handleError);
  }


  isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }
  currentUserLogged():Observable<any> {
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}