import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  error:string;
  user: any;
  constructor(public router: Router, public session:SessionService) { 
    this.session.getUser();
  }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( user => {
      this.user = user;
    });
  }

  logout(){
    this.session.logout()
    .subscribe(user => this.user = null)
  }
}
