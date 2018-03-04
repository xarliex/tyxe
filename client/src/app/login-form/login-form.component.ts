import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username:string;
  password:string;
  name:string;
  surname:string;
  email:string;
  newusername:string;
  newpassword:string;
  error:string;
  constructor(public router: Router, public session:SessionService) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe( status => { if(status === 200) this.router.navigate(['/']) } )
  }

  signup(){
    this.session.signup(this.name, this.surname, this.email, this.newusername,this.newpassword)
    .catch(e => this.error = e)
    .subscribe( status => { if(status === 200) this.router.navigate(['/']) } )
  }
  
}
