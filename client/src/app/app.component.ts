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
  
  constructor(public router: Router, public session:SessionService) { }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}



