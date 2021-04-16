import { Component, OnInit } from '@angular/core';
import { FbAuthService } from 'src/app/services/fb-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // isSignedIn: boolean = false;

  constructor(public firebaseService: FbAuthService) { }

  ngOnInit(): void {

    if (localStorage.getItem('user') != null) {
      this.firebaseService.isLoggedIn = true
    }
    else {
      this.firebaseService.isLoggedIn = false
    }
  }

  async onSignIn(loginForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    await this.firebaseService.signIn(email, password);

    if (this.firebaseService.isLoggedIn) {
      this.firebaseService.isLoggedIn = true;
    }
  }
}
