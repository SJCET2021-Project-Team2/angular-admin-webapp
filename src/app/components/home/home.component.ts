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
  
  constructor( private logsService : LogsService ) { }

  ngOnInit(): void {
    this.logsService.getUserLogs().subscribe();
  }

}
