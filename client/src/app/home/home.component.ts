import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error:string;
  user:any 
  
  constructor(public router: Router, public session:SessionService) { 
    // this.session.loginEvent.subscribe( user => {
    //   this.user = user; 
    // })
  }

  ngOnInit() {
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
