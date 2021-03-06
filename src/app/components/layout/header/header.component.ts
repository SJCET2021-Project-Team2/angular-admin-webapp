import { Component, OnInit } from '@angular/core';
import { FbAuthService } from 'src/app/services/fb-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public firebaseService : FbAuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.firebaseService.logout();
   } 
}
