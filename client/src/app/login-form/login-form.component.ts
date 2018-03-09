import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  newusername: string;
  newpassword: string;
  error: string;
  constructor(public router: Router, public session: SessionService) {}

  ngOnInit() {
  
    const signupButton = document.getElementById("signup-button"),
      loginButton = document.getElementById("login-button"),
      userForms = document.getElementById("user_options-forms");

    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
      },
      false
    );

    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
      },
      false
    );
  }

  login() {
    this.session
      .login(this.username, this.password)
      .catch(e => (this.error = e))
      .subscribe(user => {
        if (user) this.router.navigate([`/user/${user._id}`]);
      });
  }

  signup() {
    this.session
      .signup(
        this.email,
        this.newusername,
        this.newpassword
      )
      .catch(e => (this.error = e))
      .subscribe(user => {
        if (user) this.router.navigate([`/user/${user._id}`]);
      });
  }
}
