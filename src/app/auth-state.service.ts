import { Injectable } from '@angular/core';
import {  SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  user: SocialUser = null;
  loggedIn: boolean = false;    

  constructor() { }    

  ngOnInit() {
  } 
}
