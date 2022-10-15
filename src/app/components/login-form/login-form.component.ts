import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from './login';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  form: FormGroup;
  isAuthenticated = false;
  didLoginFail = false;
  loginUser!: Login;
  roles: string[] = [];


  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private tokenService: TokenService, private route: Router) {
    this.form = this.formBuilder.group(

      {
        userName: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isAuthenticated = true;
      this.didLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get userName() {
    return this.form.get('userName');
  }

  get Password() {
    return this.form.get('password')
  }

  logIn(loginData: Login): void {
    this.authservice.logIn(loginData).subscribe({
      next: (data) => {
      this.isAuthenticated = true;
      this.didLoginFail = false;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      
      
      this.route.navigate(['/home'])
      },
      error: (err) =>{
        this.isAuthenticated = false;
        this.didLoginFail = true;
        console.log(err);

      }})

  }


}
