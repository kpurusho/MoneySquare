import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  get loggedIn() : boolean {
    return this.authStateService.loggedIn;
  }

  get userName() : string {
    return this.authStateService.user.firstName + ' ' + this.authStateService.user.lastName;
  }

  constructor(private authStateService: AuthStateService) { }

  ngOnInit(): void {
  }

}
