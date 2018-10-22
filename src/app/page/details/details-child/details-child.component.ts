import { Component, OnInit ,Input , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details-child',
  templateUrl: './details-child.component.html',
  styleUrls: ['./details-child.component.css']
})
export class DetailsChildComponent implements OnInit {
  @Input() private message:string;
  @Output() private outer = new EventEmitter<string>();
  constructor() { }

  sendToParent(){
    this.outer.emit('message from child')
  }


  ngOnInit() {
  }

}
