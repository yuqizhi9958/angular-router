import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private msgTochild: string;
  private msgFromChild: string;

  constructor() { }

  ngOnInit() {
    this.msgTochild = 'message from parent';
  }

  receive(msg:string) {
    this.msgFromChild = msg;
  }

}
