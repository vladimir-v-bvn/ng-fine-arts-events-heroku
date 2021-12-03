import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginPayload } from '../login-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: '',
      responseStatus: ''

    });
    this.loginPayload = {
      userName: '',
      password: ''
    };

  }
  ngOnInit(): void {
  }
  onLoginSubmit() {

    this.loginForm.controls['responseStatus'].patchValue('');

    this.loginPayload.userName = this.loginForm.get('userName')?.value;
    this.loginPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginPayload).subscribe(data => {
      console.log('login success -- ');
      this.loginForm.controls['responseStatus'].patchValue('login success');
      }, error => {
      console.log('login failed -- ' + error);
      this.loginForm.controls['responseStatus'].patchValue(error);
      }
    );
  }
  
  onLogoutSubmit() {
    this.authService.logout();
  }

  onBacktohome(){
    this.router.navigate(['/']);
  }

}
