import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthStateService }  from '../auth-state.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string =  'Login'
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;    

  constructor(private fb: FormBuilder,
     private authService: AuthService,
     private authStateService: AuthStateService,
     private router: Router) { }    

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.authStateService.user = this.user;
      this.authStateService.loggedIn = this.loggedIn;
    });
  } 

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      user => this.router.navigate(['myinvestment']));
  }  
  
  signOut(): void {
    this.authService.signOut().then(
      reason => this.router.navigate(['welcome'])
    );
  }
}
