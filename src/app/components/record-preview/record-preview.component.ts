import { Component, OnInit, ViewChild } from '@angular/core';
import { Bootstrap } from 'bootstrap/dist/js/bootstrap';


@Component({
  selector: 'app-record-preview',
  templateUrl: './record-preview.component.html',
  styleUrls: ['./record-preview.component.css']
})
export class RecordPreviewComponent implements OnInit {

  modalDirect: Bootstrap.Modal;
  @ViewChild('demoModal') input;

  constructor() { }

  ngOnInit(): void {
  }

  open(element): void {
    this.modalDirect = new Bootstrap.Modal(element, {});
  }

}
