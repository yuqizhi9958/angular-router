import { Component, OnInit ,NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoggerService } from "./log.service";


@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: []
})



export class StatisticalComponent implements OnInit {
  
  private CountNum:number;
  private num:number;
  
  constructor(public log:LoggerService) { }

  ngOnInit() {
    this.CountNum = 1;
    this.num =1;
    this.log.debug("应用已经初始化");
  }
  getNum():number{
    console.log(this.CountNum)
    let count = this.num;
    count = Number(count);
    return this.CountNum = this.CountNum+count
  }
  
}
