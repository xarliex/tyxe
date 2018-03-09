import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:any;
  name:string;
  surname:string;
  username:string;
  email:string;
  password:string;
  cash:number;
  funds:number;
  error:string

  constructor( 
    public router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params['id']);
    });
  }

  getUser(id) {
    this.userService.get(id)
      .subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });
  }

  submitForm(id, form){
    console.log(form.value)
    console.log(id)
     console.log(this.user._id)
    this.userService.edit(this.user._id, form.value)
    .catch(e => this.error = e)
    .subscribe(status => { 
      if(status === 200){
        this.sessionService.isLoggedIn().subscribe(() => {
          this.router.navigate([`/user/${this.user._id}`])
        })
      }
    }
  )}
}
