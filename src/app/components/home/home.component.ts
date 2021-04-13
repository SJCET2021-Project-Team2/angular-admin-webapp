import { Component, OnInit } from '@angular/core';

import { Logs } from 'src/app/models/logs';
import { LogsService } from 'src/app/services/logs.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logs : Logs[];
  showLogs : boolean;
  inputValue : any;

  constructor( private logsService : LogsService ) { }

  ngOnInit(): void {   
    this.showLogs = false; 
  }

  onSubmit(inputField) {
    console.log(inputField.value);
    
    this.inputValue = inputField.value.userInput;
    this.showLogs = true;
    this.logsService.getUserLogs().subscribe(logs => {this.logs = logs});
  }

}
