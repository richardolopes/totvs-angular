import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder, private loginS: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      user: this.form.control('', [
        Validators.minLength(5),
        Validators.required
      ]),
      password: this.form.control('', [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }

  validLogin(login: Login) {
    // this.loginS.login({
    //   Password: login.password,
    //   Username: login.user
    // }).subscribe( data => {
    //   localStorage.setItem('token', data.AccessToken.access_token);
    //   this.router.navigate(['/']);
    // });
  }

}
