import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private userService:UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params['id']);
    });
  }
  
  getUser(id) {
    this.userService.get(id)
      .subscribe((user) => {
        this.user = user;
      });
  }

  deleteUser(){
    this.userService.remove(this.user._id).subscribe( m => {
      this.router.navigate(['/']);
    });
  }

}