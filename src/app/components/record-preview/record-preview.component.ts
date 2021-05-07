import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


import { User } from 'src/app/models/user';


@Component({
  selector: 'app-record-preview',
  templateUrl: './record-preview.component.html',
  styleUrls: ['./record-preview.component.css']
})
export class RecordPreviewComponent implements OnInit {

  selectedUser: User[];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // previewDetails(content, log) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  // }

}
