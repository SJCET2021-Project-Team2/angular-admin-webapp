import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Logs } from 'src/app/models/logs';
import { User } from 'src/app/models/user';
import { Premises } from 'src/app/models/premises';

import { FbAuthService } from 'src/app/services/fb-auth.service';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

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

  constructor(public firebaseService: FbAuthService, private apiService: ApiService, private modalService: NgbModal, public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  onSubmit(inputUserId: any) {

    this.inputValue = inputUserId.value.userInput;
    this.apiService.getUserDeatils(this.inputValue).subscribe((user) => {
      this.user = user;
      this.apiService.getUserLogs(this.inputValue).subscribe(logs => { this.logs = logs });
    }, (error) => {
      console.log(error);
    });
  }

  sendAlert(inputMsg: any) {
    
    if (this.logs.length != 0) {
      let msg: string = "You have been exposed to someone tested positive for virus. Stay Home Stay Safe";
      if (inputMsg.value.alertMsg != "")
        msg = inputMsg.value.alertMsg;

      for (const key in this.logs) {
        if (Object.prototype.hasOwnProperty.call(this.logs, key)) {
          const element = this.logs[key];
          this.apiService.getUserDeatils(element.userId).subscribe((user) => {
            const alert = {
              userMailId: user['userMail'],
              alertMsg: msg
            }
            this.apiService.alertUsers(alert).subscribe();
            console.log("Email sent successfully to " + alert.userMailId);
          });
        }
      }
      alert("Alert mail has been sent successfully to exposed users")
    }
    else{
      alert("User logs empty")
    }
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
