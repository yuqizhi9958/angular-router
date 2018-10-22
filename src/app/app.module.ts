import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserComponent,childRoutes } from "./page/user/user.component";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoggerService } from "./page/statistical/log.service";

// import { AppRoutingModule } from './app-routing.module';
import { DateComponent } from './page/date/date.component';
import { OnlineComponent } from './page/online/online.component';
import { StatisticalComponent } from './page/statistical/statistical.component';
import { DetailsComponent } from './page/details/details.component';
import { DetailsChildComponent } from './page/details/details-child/details-child.component';

const routers: Routes = [
  { path: "", redirectTo: "user", pathMatch: "full" },
  { path: "user", component: UserComponent,children:childRoutes },

];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateComponent,
    OnlineComponent,
    StatisticalComponent,
    DetailsComponent,
    DetailsChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    RouterModule.forRoot(routers)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
