import { Component, OnInit } from '@angular/core';

import { Logs } from 'src/app/models/logs';
import { FbAuthService } from 'src/app/services/fb-auth.service';
import { LogsService } from 'src/app/services/logs.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logs: Logs[];
  showLogs: boolean;
  inputValue: any;

  constructor(private logsService: LogsService, public firebaseService: FbAuthService) { }

  ngOnInit(): void {
    this.showLogs = true;
  }

  onSubmit(inputUserId: any) {
    this.inputValue = inputUserId.value.userInput;
    this.showLogs = true;
    this.logsService.getUserLogs(this.inputValue).subscribe(logs => { this.logs = logs });
  }

  sendAlert(inputMsg: any) {
    let msg: string = "You have been exposed to someone tested positive for virus. Stay Home Stay Safe";
    if (inputMsg.value.alertMsg != "")
      msg = inputMsg.value.alertMsg;

    alert("Notifcation has been sent to all users")
    // alertAllUsers(msg);
  }
}
