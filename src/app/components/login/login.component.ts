import { Component, OnInit } from '@angular/core';
import { FbAuthService } from 'src/app/services/fb-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn : boolean = false;

  constructor(private firebaseService : FbAuthService) { }

  ngOnInit(): void {
    console.log("login " + localStorage.getItem('user'));
    
    if(localStorage.getItem('user') != 'null'){
      this.isSignedIn = true
    }
    else{
      this.isSignedIn = false
    }
  }

  async onSignIn(loginForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    await this.firebaseService.signIn(email, password);
    
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }
}
