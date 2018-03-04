import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userService:UserService,
    private session:SessionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProfile(params['id']);
    });
  }
  
  getProfile(id) {
    this.userService.get(id)
      .subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });
  }

  deleteUser(){
    this.userService.remove(this.user._id).subscribe( m => {
      this.router.navigate(['/']);
    });
  }

}