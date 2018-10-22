import { Component, OnInit , } from "@angular/core";
import { NgModule } from "@angular/core";
import { ActivatedRoute,Router,Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DateComponent } from "../date/date.component";
import { OnlineComponent } from "../online/online.component";
import { DetailsComponent } from "../details/details.component";
import { StatisticalComponent } from "../statistical/statistical.component";
// import { StaffComponent } from './staff/staff.component';
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: []
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// export class PagesModule {}

export const childRoutes:Routes=[
  {path:'',redirectTo:'date',pathMatch:'full'},
  {path:'date',component:DateComponent},
  {path:'online',component:OnlineComponent},
  {path:'statistical',component:StatisticalComponent},
  {path:'details',component:DetailsComponent}
]
