import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbAuthService {

  isLoggedIn = false
  constructor(private firebaseAuth: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }
}
