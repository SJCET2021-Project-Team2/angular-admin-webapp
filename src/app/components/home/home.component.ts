import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


import { Logs } from 'src/app/models/logs';
import { User } from 'src/app/models/user';
import { FbAuthService } from 'src/app/services/fb-auth.service';
import { LogsService } from 'src/app/services/logs.service'
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  logs: Logs[];
  user: User[];
  inputValue: any;

  constructor(private logsService: LogsService, public firebaseService: FbAuthService, private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // 
    this.onSubmit(100);
  }

  onSubmit(inputUserId: any) {
    // 
    this.inputValue = 100;
    // this.inputValue = inputUserId.value.userInput;  
    this.userService.getUserDeatils(this.inputValue).subscribe((user) => {
      this.user = user;
      this.logsService.getUserLogs(this.inputValue).subscribe(logs => { this.logs = logs });
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

  // bootstrap model preview
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
