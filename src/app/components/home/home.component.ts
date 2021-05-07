import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Logs } from 'src/app/models/logs';
import { User } from 'src/app/models/user';
import { Premises } from 'src/app/models/premises';

import { FbAuthService } from 'src/app/services/fb-auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  logs: Logs[];
  user: User[];
  selectedUser: User[];
  selectedPremises: Premises[];
  inputValue: any;

  constructor(public firebaseService: FbAuthService, private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // 
    this.onSubmit(100);
  }

  onSubmit(inputUserId: any) {
    // 
    this.inputValue = 100;
    // this.inputValue = inputUserId.value.userInput;  
    this.apiService.getUserDeatils(this.inputValue).subscribe((user) => {
      this.user = user;
      this.apiService.getUserLogs(this.inputValue).subscribe(logs => { this.logs = logs });
    }, (error) => {
      alert("User not exist")
    });
  }

  sendAlert(inputMsg: any) {
    let msg: string = "You have been exposed to someone tested positive for virus. Stay Home Stay Safe";
    if (inputMsg.value.alertMsg != "")
      msg = inputMsg.value.alertMsg;

    alert("Notifcation has been sent to all users")
    // alertAllUsers(msg);
  }

  // bootstrap modal preview
  previewDetails(content, log) {
    this.apiService.getUserDeatils(log.userId).subscribe((user) => {
      this.selectedUser = user;
      this.apiService.getPremisesDeatils(log.premisesId).subscribe((premises) => {
        this.selectedPremises = premises;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
      });
    });
  }
}
