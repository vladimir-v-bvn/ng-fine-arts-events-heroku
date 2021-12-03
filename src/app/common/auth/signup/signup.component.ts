import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupPayload } from '../signup-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupPayload: SignupPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.signupForm = this.formBuilder.group({
      userName: '',
      email: '',
      password: '',
      confirmPassword:'',
      responseStatus: ''

    });
    this.signupPayload = {
      userName: '',
      email: '',
      password: '',
      confirmPassword:'' 
    };
  }

  ngOnInit(): void {
  }

  onSignupSubmit() {

    this.signupForm.controls['responseStatus'].patchValue('');

    this.signupPayload.userName = this.signupForm.get('userName')?.value;
    this.signupPayload.email = this.signupForm.get('email')?.value;
    this.signupPayload.password = this.signupForm.get('password')?.value;
    this.signupPayload.confirmPassword = this.signupForm.get('confirmPassword')?.value;

    this.authService.signup(this.signupPayload).subscribe(data => {
      console.log('signup success - ');
      this.signupForm.controls['responseStatus'].patchValue('signup success');
      }, error => {
      console.log('signup failed - ' + error);
      this.signupForm.controls['responseStatus'].patchValue(error);
      }
    );
  }
  onBacktohome(){
    this.router.navigate(['/']);
  }
}
